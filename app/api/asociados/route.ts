import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/app/lib/db';
import { AsociadoSchema, formatDateForDB, validateDocumentByType } from '@/app/lib/validations';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const id_socio = searchParams.get('id_socio');

  if (!id_socio) {
    return NextResponse.json({ error: 'id_socio required' }, { status: 400 });
  }

  try {
    const asociados = await prisma.asociado.findMany({
      where: { id_socio: parseInt(id_socio) },
      orderBy: { id_asociado: 'asc' },
    });

    return NextResponse.json(asociados);
  } catch (error) {
    console.error('Get asociados error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validar schema
    const validation = AsociadoSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: 'Validación fallida', details: validation.error.flatten() },
        { status: 400 }
      );
    }

    const {
      id_socio,
      tipo_documento,
      numero_documento,
      nombres,
      apellido1re,
      apellido2do,
      fecha_nacimiento,
      genero,
      nacionalidad,
      pais_nacimiento,
      estado_nacimiento,
      ciudad_nacimiento,
      numero_telefonico,
      ocupacion,
      profesion,
    } = body;

    // Validar documento según tipo
    if (!validateDocumentByType(tipo_documento, numero_documento)) {
      return NextResponse.json(
        { error: `Número de documento inválido para tipo ${tipo_documento}` },
        { status: 400 }
      );
    }

    // Obtener siguiente id_asociado
    const lastAsociado = await prisma.asociado.findFirst({
      where: { id_socio: parseInt(id_socio) },
      orderBy: { id_asociado: 'desc' },
    });

    const id_asociado = (lastAsociado?.id_asociado ?? 0) + 1;

    const asociado = await prisma.asociado.create({
      data: {
        id_socio: parseInt(id_socio),
        id_asociado,
        tipo_documento,
        numero_documento: numero_documento.toUpperCase(),
        nombres,
        apellido1re,
        apellido2do,
        fecha_nacimiento: new Date(formatDateForDB(fecha_nacimiento)),
        genero,
        nacionalidad: parseInt(nacionalidad),
        pais_nacimiento: parseInt(pais_nacimiento),
        estado_nacimiento: estado_nacimiento ? parseInt(estado_nacimiento) : null,
        ciudad_nacimiento: ciudad_nacimiento ? parseInt(ciudad_nacimiento) : null,
        numero_telefonico: numero_telefonico || null,
        ocupacion: ocupacion || null,
        profesion: profesion || null,
      },
    });
    return NextResponse.json(asociado, { status: 201 });
  } catch (error) {
    console.error('Create asociado error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, ...updateData } = body;

    if (!id) {
      return NextResponse.json({ error: 'ID required' }, { status: 400 });
    }

    // Validar documento si fue actualizado
    if (updateData.tipo_documento && updateData.numero_documento) {
      if (!validateDocumentByType(updateData.tipo_documento, updateData.numero_documento)) {
        return NextResponse.json(
          { error: `Número de documento inválido para tipo ${updateData.tipo_documento}` },
          { status: 400 }
        );
      }
      updateData.numero_documento = updateData.numero_documento.toUpperCase();
    }

    // Convertir fecha si existe
    if (updateData.fecha_nacimiento) {
      updateData.fecha_nacimiento = new Date(formatDateForDB(updateData.fecha_nacimiento));
    }

    const asociado = await prisma.asociado.update({
      where: { id: parseInt(id) },
      data: updateData,
    });
    return NextResponse.json(asociado);
  } catch (error) {
    console.error('Update asociado error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
