import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/app/lib/db';

// GET: Obtener detalles de una familia específica
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const familyId = (await params).id;
    
    console.log('Family detail endpoint called with ID:', familyId);
    console.log('Type of ID:', typeof familyId);
    console.log('ID truthy check:', !!familyId);
    
    // Verificar si puede ser convertido a number
    const parsedId = Number(familyId);
    console.log('Parsed ID:', parsedId);
    console.log('isNaN check on parsed ID:', isNaN(parsedId));
    
    if (isNaN(parsedId) || familyId === '') {
      console.log('Invalid family ID - not a number:', familyId);
      return NextResponse.json(
        { error: 'ID de familia inválido - debe ser un número' },
        { status: 400 }
      );
    }

    console.log('Valid family ID, searching for:', parsedId);

    // Obtener familia con todos sus miembros
    // Primero intentar con el ID directamente
    let family = await prisma.familia.findUnique({
      where: { id: parsedId },
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
        miembros: {
          orderBy: [
            { esPrincipal: 'desc' }, // El principal primero
            { id_miembro: 'asc' }
          ]
        }
      }
    });
    
    console.log('Family found by direct ID:', !!family);
    
    // si no se encuentra, intentar buscar por el id_socio
    if (!family) {
      console.log('Trying to find family by socio Id:', parsedId);
      const socio = await prisma.socio.findUnique({
        where: { id_socio: parsedId },
        include: {
          familia: {
            include: {
              miembros: {
                orderBy: [
                  { esPrincipal: 'desc' }, // El principal primero
                  { id_miembro: 'asc' }
                ]
              }
            }
          }
        }
      });
      
      if (socio && socio.familia) {
        family = socio.familia;
        console.log('Family found through socio:', !!family);
      }
    }

    console.log('Final result:', !!family);
    console.log('Family data:', family ? {
      id: family.id,
      id_socio: family.socioPrincipal?.id_socio,
      apellidos: family.apellidos,
      memberCount: family.miembros?.length
    } : null);

    if (!family) {
      return NextResponse.json(
        { error: 'Familia no encontrada' },
        { status: 404 }
      );
    }

    // Formatear fechas para display
    const formattedMembers = family.miembros.map(member => ({
      ...member,
      fecha_nacimiento: member.fecha_nacimiento 
        ? new Date(member.fecha_nacimiento).toLocaleDateString('es-ES')
        : null,
      edad: member.fecha_nacimiento 
        ? Math.floor((new Date().getTime() - new Date(member.fecha_nacimiento).getTime()) / (365.25 * 24 * 60 * 60 * 1000 * 1000))
        : null
    }));

    return NextResponse.json({
      success: true,
      family: {
        ...family,
        miembros: formattedMembers
      }
    });
  } catch (error) {
    console.error('Error al obtener familia:', error);
    return NextResponse.json(
      { error: 'Error al obtener familia', details: String(error) },
      { status: 500 }
    );
  }
}