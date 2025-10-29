import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/app/lib/db';
import { LoginSocioSchema } from '@/app/lib/validations';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validar schema
    const validation = LoginSocioSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: 'Validación fallida', details: validation.error.flatten() },
        { status: 400 }
      );
    }

    const { id_socio, numero_documento } = validation.data;

    // Buscar socio
    const socio = await prisma.socio.findUnique({
      where: { id_socio: parseInt(id_socio) },
    });

    if (!socio) {
      return NextResponse.json(
        { error: 'ID de socio no encontrado' },
        { status: 401 }
      );
    }

    // Buscar miembro principal del socio
    const miembroPrincipal = await prisma.asociado.findFirst({
      where: { id_socio: socio.id, miembroPrincipal: 1 },
    });

    // Validar número de documento con miembro principal
    if (miembroPrincipal) {
      if (miembroPrincipal.numero_documento !== numero_documento.toUpperCase()) {
        return NextResponse.json(
          { error: 'Número de documento incorrecto' },
          { status: 401 }
        );
      }
    }

    // Login exitoso
    return NextResponse.json({
      success: true,
      socio: {
        id: socio.id,
        id_socio: socio.id_socio,
        nombres: socio.nombres,
        apellido1re: socio.apellido1re,
        apellido2do: socio.apellido2do,
      },
    });

  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Error en servidor' },
      { status: 500 }
    );
  }
}
