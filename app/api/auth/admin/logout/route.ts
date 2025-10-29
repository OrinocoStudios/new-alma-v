import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Crear respuesta que limpia la cookie de sesión
    const res = NextResponse.json(
      { message: 'Sesión cerrada correctamente' },
      { status: 200 }
    );

    res.headers.set('Set-Cookie', 
      'admin_session=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0'
    );

    return res;
  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
