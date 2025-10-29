import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { prisma } from '@/app/lib/db';
import { LoginAdminSchema } from '@/app/lib/validations';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = LoginAdminSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { 
          error: 'Validación fallida',
          details: result.error.flatten()
        },
        { status: 400 }
      );
    }

    const { usuario, password } = result.data;

    // Buscar admin por usuario
    const admin = await prisma.admin.findUnique({
      where: { usuario },
    });

    if (!admin) {
      return NextResponse.json(
        { error: 'Usuario o contraseña incorrectos' },
        { status: 401 }
      );
    }

    if (admin.activo === 0) {
      return NextResponse.json(
        { error: 'Usuario inactivo' },
        { status: 403 }
      );
    }

    // Validar contraseña
    const passwordMatch = await bcrypt.compare(password, admin.password);

    if (!passwordMatch) {
      return NextResponse.json(
        { error: 'Usuario o contraseña incorrectos' },
        { status: 401 }
      );
    }

    // Retornar datos del admin (sin contraseña)
    const response = {
      id: admin.id,
      usuario: admin.usuario,
      nombres: admin.nombres,
      apellido1re: admin.apellido1re,
      apellido2do: admin.apellido2do,
      rol: admin.rol,
    };

    // Crear respuesta con cookie de sesión
    const res = NextResponse.json(
      { admin: response },
      { status: 200 }
    );

    // Guardar en sessionStorage del cliente (será enviado en cada request)
    // La sesión se almacenará en el cliente para simplificar
    res.headers.set('Set-Cookie', 
      `admin_session=${Buffer.from(JSON.stringify(response)).toString('base64')}; Path=/; HttpOnly; SameSite=Strict`
    );

    return res;
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
