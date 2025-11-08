import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/app/lib/db';
import { LoginSocioSchema } from '@/app/lib/validations';
import bcrypt from 'bcryptjs';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log('Socio login attempt:', { 
      hasId: !!body.id_socio, 
      hasDocumento: !!body.numero_documento, 
      hasUsuario: !!body.usuario, 
      hasPassword: !!body.password 
    });
    
    // Soportar legacy login (id_socio + documento) y nuevo login (usuario + password)
    const { id_socio, numero_documento, usuario, password } = body;
    
    let socio;
    
    // Nuevo método de login con credenciales de usuario/password
    if (usuario && password) {
      console.log('Trying username/password login for usuario:', usuario);
      
      // Buscar socio por usuario
      socio = await prisma.socio.findUnique({
        where: { usuario },
        include: {
          familia: {
            include: {
              miembros: true,
              direcciones: true
            }
          }
        }
      });
      
      console.log('Socio found by usuario:', socio ? { id: socio.id, id_socio: socio.id_socio, hasPassword: !!socio.password } : 'null');
      
      if (!socio || !socio.password) {
        console.error('No socio found or no password');
        return NextResponse.json(
          { error: 'Credenciales incorrectas' },
          { status: 401 }
        );
      }
      
      // Validar password
      console.log('Comparing password for socio with id:', socio.id_socio);
      const isPasswordValid = await bcrypt.compare(password, socio.password);
      console.log('Password match result:', isPasswordValid);
      if (!isPasswordValid) {
        return NextResponse.json(
          { error: 'Credenciales incorrectas' },
          { status: 401 }
        );
      }
      
      // Login exitoso con nuevo método
      return NextResponse.json({
        success: true,
        socio: {
          id: socio.id,
          id_socio: socio.id_socio,
          nombres: socio.nombres,
          apellido1re: socio.apellido1re,
          apellido2do: socio.apellido2do,
          id_familia: socio.familia?.id,
          apellidos: socio.familia?.apellidos,
        },
        familia: socio.familia ? {
          id: socio.familia.id,
          apellidos: socio.familia.apellidos,
          miembros: socio.familia.miembros,
          direcciones: socio.familia.direcciones
        } : null
      });
    }
    
    // Legacy login (mantener por compatibilidad momentánea)
    else if (id_socio && numero_documento) {
      // Validar schema
      const validation = LoginSocioSchema.safeParse({ id_socio, numero_documento });
      if (!validation.success) {
        return NextResponse.json(
          { error: 'Validación fallida', details: validation.error.flatten() },
          { status: 400 }
        );
      }

      // Buscar socio
      socio = await prisma.socio.findUnique({
        where: { id_socio: parseInt(id_socio) },
        include: {
          familia: {
            include: {
              miembros: true,
              direcciones: true
            }
          }
        }
      });

      if (!socio) {
        return NextResponse.json(
          { error: 'ID de socio no encontrado' },
          { status: 401 }
        );
      }

      // Buscar miembro principal de la familia
      if (socio.familia) {
        const miembroPrincipal = socio.familia.miembros.find(m => m.esPrincipal === 1);
        
        // Validar número de documento con miembro principal
        if (miembroPrincipal && miembroPrincipal.numero_documento !== numero_documento.toUpperCase()) {
          return NextResponse.json(
            { error: 'Número de documento incorrecto' },
            { status: 401 }
          );
        }
      }

      // Login exitoso legacy
      return NextResponse.json({
        success: true,
        socio: {
          id: socio.id,
          id_socio: socio.id_socio,
          nombres: socio.nombres,
          apellido1re: socio.apellido1re,
          apellido2do: socio.apellido2do,
          id_familia: socio.familia?.id,
          apellidos: socio.familia?.apellidos,
        },
        familia: socio.familia || null
      });
    }
    
    // Sin credenciales válidas
    else {
      return NextResponse.json(
        { error: 'Se requieren credenciales (usuario/password) o (id_socio/documento)' },
        { status: 400 }
      );
    }

  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Error en servidor' },
      { status: 500 }
    );
  }
}
