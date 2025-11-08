import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/app/lib/db';
import bcrypt from 'bcryptjs';

// GET: Listar todas las familias para un admin
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const adminId = searchParams.get('adminId');

    if (!adminId || isNaN(Number(adminId))) {
      return NextResponse.json({ error: 'adminId requerido y válido' }, { status: 400 });
    }

    // Obtener familias filtradas por admin con sus miembros principales
    const familias = await prisma.familia.findMany({
      where: {
        id_admin: Number(adminId)
      },
      include: {
        socioPrincipal: {
          select: {
            id: true,
            id_socio: true,
            nombres: true,
            apellido1re: true,
            apellido2do: true,
            usuario: true,
          }
        },
        _count: {
          select: {
            miembros: true
          }
        }
      },
      orderBy: {
        id: 'asc'
      }
    });

    return NextResponse.json({
      success: true,
      familias: familias.map(familia => ({
        id: familia.id,
        id_socio: familia.socioPrincipal?.id_socio,
        apellidos: familia.apellidos,
        socioPrincipal: familia.socioPrincipal,
        familyMembersCount: familia._count.miembros,
      }))
    });
  } catch (error) {
    console.error('Error al obtener familias:', error);
    return NextResponse.json(
      { error: 'Error al obtener familias', details: String(error) },
      { status: 500 }
    );
  }
}

// POST: Crear nueva familia y su socio principal
export async function POST(request: NextRequest) {
  try {
    const { 
      id_admin, 
      id_socio, 
      nombres, 
      apellido1re, 
      apellido2do,
      documento,
      password
    } = await request.json();

    // Validaciones
    if (!id_admin || !id_socio || !nombres || !apellido1re || !apellido2do) {
      return NextResponse.json(
        { error: 'Campos requeridos: id_admin, id_socio, nombres, apellido1re, apellido2do, documento, password' },
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

    // Crear socio principal con credenciales
    const passwordHash = await bcrypt.hash(password || 'temp123', 10);
    const usuario = documento.toLowerCase().replace(/\s+/g, '');

    // Crear transacción para crear ambos registros
    const result = await prisma.$transaction(async (tx) => {
      // 1. Crear el socio
      const newSocio = await tx.socio.create({
        data: {
          id_socio: Number(id_socio),
          id_admin: Number(id_admin),
          nombres: nombres,
          apellido1re: apellido1re,
          apellido2do: apellido2do,
          usuario,
          password: passwordHash,
        },
      });

      // 2. Crear la familia vinculada al socio
      const newFamilia = await tx.familia.create({
        data: {
          id_socio: newSocio.id,
          id_admin: Number(id_admin), // Agregado: vincular la familia al admin
          apellidos: `${apellido1re} ${apellido2do}`,
        },
      });

      // 3. Crear miembro principal (socio como miembro)
      const principalMiembro = await tx.miembro.create({
        data: {
          id_familia: newFamilia.id,
          id_miembro: 1, // El primer miembro de la familia
          tipo_documento: 'DNI', // Por defecto
          numero_documento: documento,
          nombres: nombres,
          apellido1re: apellido1re,
          apellido2do: apellido2do,
          fecha_nacimiento: new Date(), // Valor temporal
          genero: 'M', // Valor temporal
          nacionalidad: 1, // Suponiendo que 1 es el país local
          pais_nacimiento: 1,
          estado_nacimiento: null,
          ciudad_nacimiento: null,
          esPrincipal: 1, // 1 = es el miembro principal
        },
      });

      return { socio: newSocio, familia: newFamilia, miembro: principalMiembro };
    });

    return NextResponse.json(
      {
        success: true,
        familia: {
          id: result.familia.id,
          id_socio: result.socio.id_socio,
          apellidos: result.familia.apellidos,
          socioPrincipal: {
            id: result.socio.id,
            nombres: result.socio.nombres,
            apellidos: `${result.socio.apellido1re} ${result.socio.apellido2do}`,
            usuario: result.socio.usuario,
          },
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error al crear familia:', error);
    return NextResponse.json(
      { error: 'Error al crear familia', details: String(error) },
      { status: 500 }
    );
  }
}