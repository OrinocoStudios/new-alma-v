import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/app/lib/db';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const type = searchParams.get('type');

  try {
    switch (type) {
      case 'paises':
        const paises = await prisma.pais.findMany({
          orderBy: { pais: 'asc' },
          select: {
            id: true,
            pais: true,
            codigo: true,
          },
        });
        return NextResponse.json(paises);

      case 'estados':
        const id_pais = searchParams.get('id_pais');
        if (!id_pais) return NextResponse.json({ error: 'id_pais required' }, { status: 400 });
        
        const estados = await prisma.estado.findMany({
          where: { id_pais: parseInt(id_pais) },
          orderBy: { estado: 'asc' },
          select: {
            id: true,
            estado: true,
          },
        });
        return NextResponse.json(estados);

      case 'ciudades':
        const id_estado = searchParams.get('id_estado');
        if (!id_estado) return NextResponse.json({ error: 'id_estado required' }, { status: 400 });
        
        const ciudades = await prisma.ciudad.findMany({
          where: { id_estado: parseInt(id_estado) },
          orderBy: { ciudad: 'asc' },
          select: {
            id: true,
            ciudad: true,
          },
        });
        return NextResponse.json(ciudades);

      case 'codigo_postal':
        const cp = searchParams.get('cp');
        if (!cp) return NextResponse.json({ error: 'cp required' }, { status: 400 });
        
        const codigoPostal = await prisma.codigoPostal.findMany({
          where: { cp: cp },
          select: {
            provincia: true,
            ciudad: true,
            cp: true,
          },
        });
        return NextResponse.json(codigoPostal);

      case 'tipos_via':
        const tiposVia = await prisma.tipoVia.findMany({
          orderBy: { tipo_via: 'asc' },
        });
        return NextResponse.json(tiposVia);

      default:
        return NextResponse.json({ error: 'Invalid type' }, { status: 400 });
    }
  } catch (error) {
    console.error('Filter error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
