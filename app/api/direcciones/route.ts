import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/app/lib/db';
import { DireccionSchema } from '@/app/lib/validations';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const id_socio = searchParams.get('id_socio');

  if (!id_socio) {
    return NextResponse.json({ error: 'id_socio required' }, { status: 400 });
  }

  try {
    const direcciones = await prisma.direccion.findMany({
      where: { id_socio: parseInt(id_socio) },
      orderBy: { activa: 'desc' },
    });

    return NextResponse.json(direcciones);
  } catch (error) {
    console.error('Get direcciones error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validar schema
    const validation = DireccionSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: 'Validación fallida', details: validation.error.flatten() },
        { status: 400 }
      );
    }

    const {
      id_socio,
      id_tipo_via,
      nombre_via,
      numero,
      portal,
      piso,
      apartamento,
      pueblo,
      nombre_pueblo,
      codigo_postal,
    } = body;

    // Verificar que código postal existe
    const cpExists = await prisma.codigoPostal.findUnique({
      where: { cp: codigo_postal },
    });

    if (!cpExists) {
      return NextResponse.json(
        { error: 'Código postal no válido para La Rioja' },
        { status: 400 }
      );
    }

    const direccion = await prisma.direccion.create({
      data: {
        id_socio: parseInt(id_socio),
        id_tipo_via: parseInt(id_tipo_via),
        nombre_via,
        numero: numero || '',
        portal: portal || '',
        piso: piso || '',
        apartamento: apartamento || '',
        pueblo,
        nombre_pueblo,
        codigo_postal,
        activa: 1,
      },
    });

    return NextResponse.json(direccion, { status: 201 });
  } catch (error) {
    console.error('Create direccion error:', error);
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

    // Si se cambia código postal, validar que existe
    if (updateData.codigo_postal) {
      const cpExists = await prisma.codigoPostal.findUnique({
        where: { cp: updateData.codigo_postal },
      });

      if (!cpExists) {
        return NextResponse.json(
          { error: 'Código postal no válido' },
          { status: 400 }
        );
      }
    }

    const direccion = await prisma.direccion.update({
      where: { id: parseInt(id) },
      data: updateData,
    });

    return NextResponse.json(direccion);
  } catch (error) {
    console.error('Update direccion error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
