import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/app/lib/db';
import { formatDateForDB, validateDocumentByType } from '@/app/lib/validations';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const id_familia = searchParams.get('id_familia');

  if (!id_familia) {
    return NextResponse.json({ error: 'id_familia required' }, { status: 400 });
  }

  try {
    const miembros = await prisma.miembro.findMany({
      where: { id_familia: parseInt(id_familia) },
      include: {
        familia: {
          select: {
            id: true,
            apellidos: true,
          }
        },
        paisNacionalidad: {
          select: { pais: true }
        },
        paisNacimiento: {
          select: { pais: true }
        },
        estadoNacimiento: {
          select: { estado: true }
        },
        ciudadNacimiento: {
          select: { ciudad: true }
        }
      },
      orderBy: { id_miembro: 'asc' },
    });

    return NextResponse.json(miembros);
  } catch (error) {
    console.error('Get miembros error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
const {
      id_familia,
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
      rango_ingresos,
    } = body;

    // Validar documento según tipo
    if (!validateDocumentByType(tipo_documento, numero_documento)) {
      return NextResponse.json(
        { error: `Número de documento inválido para tipo ${tipo_documento}` },
        { status: 400 }
      );
    }

    // Verificar que la familia existe
    const familia = await prisma.familia.findUnique({
      where: { id: parseInt(id_familia) },
    });

    if (!familia) {
      return NextResponse.json({ error: 'Familia no encontrada' }, { status: 404 });
    }

    // Obtener siguiente id_miembro
    const lastMiembro = await prisma.miembro.findFirst({
      where: { id_familia: parseInt(id_familia) },
      orderBy: { id_miembro: 'desc' },
    });

    const id_miembro = (lastMiembro?.id_miembro ?? 0) + 1;

    // Crear miembro (sin marcar como principal)
    const miembro = await prisma.miembro.create({
      data: {
        id_familia: parseInt(id_familia),
        id_miembro,
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
        rango_ingresos: rango_ingresos || null,
        esPrincipal: 0, // 0 = no es el miembro principal
      },
    });

    return NextResponse.json(miembro, { status: 201 });
  } catch (error) {
    console.error('Create miembro error:', error);
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

    const miembro = await prisma.miembro.update({
      where: { id: parseInt(id) },
      data: updateData,
    });
    
    return NextResponse.json(miembro);
  } catch (error) {
    console.error('Update miembro error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// DELETE: Eliminar miembro
export async function DELETE(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const id = url.pathname.split('/').pop();

    if (!id) {
      return NextResponse.json(
        { error: 'ID de miembro requerido' },
        { status: 400 }
      );
    }

    // Verificar que el miembro no es el principal
    const miembro = await prisma.miembro.findUnique({
      where: { id: parseInt(id) }
    });

    if (!miembro) {
      return NextResponse.json(
        { error: 'Miembro no encontrado' },
        { status: 404 }
      );
    }

    if (miembro.esPrincipal === 1) {
      return NextResponse.json(
        { error: 'No se puede eliminar el miembro principal de la familia' },
        { status: 403 }
      );
    }

    // Realizar eliminación lógica (borrado físico)
    const miembroEliminado = await prisma.miembro.delete({
      where: { id: parseInt(id) }
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Miembro eliminado exitosamente',
        miembro: miembroEliminado
      }
    );
  } catch (error) {
    console.error('Delete miembro error:', error);
    return NextResponse.json(
      { error: 'Error al eliminar miembro', details: String(error) },
      { status: 500 }
    );
  }
}
