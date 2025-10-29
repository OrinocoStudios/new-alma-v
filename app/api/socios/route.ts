import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/app/lib/db';

// GET: Listar socios de un admin específico
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const adminId = searchParams.get('adminId');

    if (!adminId || isNaN(Number(adminId))) {
      return NextResponse.json({ error: 'adminId requerido y válido' }, { status: 400 });
    }

    // Obtener socios del admin
    const socios = await prisma.socio.findMany({
      where: { id_admin: Number(adminId) },
      orderBy: { id_socio: 'asc' },
    });

    return NextResponse.json({
      success: true,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      socios: socios.map((socio: any) => ({
        id: socio.id,
        id_socio: socio.id_socio,
        nombres: socio.nombres,
        apellido1re: socio.apellido1re,
        apellido2do: socio.apellido2do,
        apellidos: `${socio.apellido1re} ${socio.apellido2do}`,
        miembroprincipal: Boolean(socio.miembroprincipal),
        familyMembersCount: 0,
      })),
    });
  } catch (error) {
    console.error('Error al obtener socios:', error);
    return NextResponse.json(
      { error: 'Error al obtener socios', details: String(error) },
      { status: 500 }
    );
  }
}

// POST: Crear nuevo socio
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { id_admin, id_socio, nombres, apellido1re, apellido2do, miembroprincipal } = body;

    // Validaciones
    if (!id_admin || !id_socio || !nombres || !apellido1re || !apellido2do) {
      return NextResponse.json(
        { error: 'Campos requeridos: id_admin, id_socio, nombres, apellido1re, apellido2do' },
        { status: 400 }
      );
    }

    // Verificar que el admin existe
    const admin = await prisma.admin.findUnique({
      where: { id: Number(id_admin) },
    });

    if (!admin) {
      return NextResponse.json({ error: 'Admin no encontrado' }, { status: 404 });
    }

    // Verificar que no existe un socio con el mismo id_socio
    const existingSocio = await prisma.socio.findUnique({
      where: { id_socio: Number(id_socio) },
    });

    if (existingSocio) {
      return NextResponse.json(
        { error: 'Ya existe un socio con este ID' },
        { status: 409 }
      );
    }

    // Crear nuevo socio
    const newSocio = await prisma.socio.create({
      data: {
        id_socio: Number(id_socio),
        id_admin: Number(id_admin),
        nombres: nombres,
        apellido1re: apellido1re,
        apellido2do: apellido2do,
        miembroprincipal: miembroprincipal ? 1 : 0,
      },
    });

    return NextResponse.json(
      {
        success: true,
        socio: {
          id: newSocio.id,
          id_socio: newSocio.id_socio,
          nombres: newSocio.nombres,
          apellido1re: newSocio.apellido1re,
          apellido2do: newSocio.apellido2do,
          miembroprincipal: Boolean(newSocio.miembroprincipal),
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error al crear socio:', error);
    return NextResponse.json(
      { error: 'Error al crear socio', details: String(error) },
      { status: 500 }
    );
  }
}
