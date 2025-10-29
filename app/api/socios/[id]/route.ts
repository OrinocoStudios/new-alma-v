import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/app/lib/db';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const socioId = parseInt(id);

    if (isNaN(socioId)) {
      return NextResponse.json(
        { error: 'ID de socio inválido' },
        { status: 400 }
      );
    }

    // Obtener socio
    const socio = await prisma.socio.findUnique({
      where: { id: socioId },
    });

    if (!socio) {
      return NextResponse.json(
        { error: 'Socio no encontrado' },
        { status: 404 }
      );
    }

    // Obtener asociados del socio
    const asociados = await prisma.asociado.findMany({
      where: { id_socio: socioId },
      orderBy: { id_asociado: 'asc' },
    });

    // Obtener direcciones del socio
    const direcciones = await prisma.direccion.findMany({
      where: { id_socio: socioId },
    });

    return NextResponse.json({
      success: true,
      socio: {
        id: socio.id,
        id_socio: socio.id_socio,
        nombres: socio.nombres,
        apellido1re: socio.apellido1re,
        apellido2do: socio.apellido2do,
        apellidos: `${socio.apellido1re} ${socio.apellido2do}`,
        miembroprincipal: Boolean(socio.miembroprincipal),
        id_admin: socio.id_admin,
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      asociados: asociados.map((a: any) => ({
        id: a.id,
        id_asociado: a.id_asociado,
        tipo_documento: a.tipo_documento,
        numero_documento: a.numero_documento,
        nombres: a.nombres,
        apellido1re: a.apellido1re,
        apellido2do: a.apellido2do,
        fecha_nacimiento: a.fecha_nacimiento,
        genero: a.genero,
        miembroPrincipal: Boolean(a.miembroPrincipal),
      })),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      direcciones: direcciones.map((d: any) => ({
        id: d.id,
        id_tipo_via: d.id_tipo_via,
        nombre_via: d.nombre_via,
        numero: d.numero,
        portal: d.portal,
        piso: d.piso,
        apartamento: d.apartamento,
        pueblo: d.pueblo,
        nombre_pueblo: d.nombre_pueblo,
        codigo_postal: d.codigo_postal,
        activa: Boolean(d.activa),
      })),
      stats: {
        familyMembersCount: asociados.length,
        addressCount: direcciones.length,
      },
    });
  } catch (error) {
    console.error('Error al obtener detalles del socio:', error);
    return NextResponse.json(
      { error: 'Error al obtener detalles del socio', details: String(error) },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const socioId = parseInt(id);
    const body = await request.json();
    const { nombres, apellido1re, apellido2do, miembroprincipal } = body;

    if (isNaN(socioId)) {
      return NextResponse.json(
        { error: 'ID de socio inválido' },
        { status: 400 }
      );
    }

    const socio = await prisma.socio.findUnique({
      where: { id: socioId },
    });

    if (!socio) {
      return NextResponse.json(
        { error: 'Socio no encontrado' },
        { status: 404 }
      );
    }

    // Actualizar campos
    const updateData: { nombres?: string; apellido1re?: string; apellido2do?: string; miembroprincipal?: number } = {};
    if (nombres) updateData.nombres = nombres;
    if (apellido1re) updateData.apellido1re = apellido1re;
    if (apellido2do) updateData.apellido2do = apellido2do;
    if (miembroprincipal !== undefined) updateData.miembroprincipal = miembroprincipal ? 1 : 0;

    const updatedSocio = await prisma.socio.update({
      where: { id: socioId },
      data: updateData,
    });

    return NextResponse.json({
      success: true,
      socio: {
        id: updatedSocio.id,
        id_socio: updatedSocio.id_socio,
        nombres: updatedSocio.nombres,
        apellido1re: updatedSocio.apellido1re,
        apellido2do: updatedSocio.apellido2do,
        miembroprincipal: Boolean(updatedSocio.miembroprincipal),
      },
    });
  } catch (error) {
    console.error('Error al actualizar socio:', error);
    return NextResponse.json(
      { error: 'Error al actualizar socio', details: String(error) },
      { status: 500 }
    );
  }
}
