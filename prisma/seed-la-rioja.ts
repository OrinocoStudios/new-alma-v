import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando seed de La Rioja...\n');

  try {
    // Obtener España (debe existir del seed principal)
    const spain = await prisma.pais.findFirst({
      where: { pais: 'España' },
    });

    if (!spain) {
      throw new Error('❌ España no encontrada. Ejecuta primero: npm run seed');
    }

    // Seed Tipos de Vía
    const tiposVia = [
      'Calle',
      'Avenida',
      'Plaza',
      'Paseo',
      'Carretera',
      'Camino',
      'Travesía',
      'Ronda',
      'Glorieta',
      'Alameda',
      'Parque',
      'Urbanización',
    ];

    console.log('📍 Creando tipos de vía...');
    for (const tipo of tiposVia) {
      await prisma.tipoVia.upsert({
        where: { tipo_via: tipo },
        update: {},
        create: { tipo_via: tipo },
      });
    }
    console.log(`✅ ${tiposVia.length} tipos de vía creados\n`);

    // Seed Códigos Postales de La Rioja (26XXX)
    // Logroño y principales localidades
    const codigosPostales = [
      // Logroño
      { cp: '26001', ciudad: 'Logroño', provincia: 'La Rioja' },
      { cp: '26002', ciudad: 'Logroño', provincia: 'La Rioja' },
      { cp: '26003', ciudad: 'Logroño', provincia: 'La Rioja' },
      { cp: '26004', ciudad: 'Logroño', provincia: 'La Rioja' },
      { cp: '26005', ciudad: 'Logroño', provincia: 'La Rioja' },
      { cp: '26006', ciudad: 'Logroño', provincia: 'La Rioja' },
      { cp: '26007', ciudad: 'Logroño', provincia: 'La Rioja' },
      { cp: '26008', ciudad: 'Logroño', provincia: 'La Rioja' },
      { cp: '26009', ciudad: 'Logroño', provincia: 'La Rioja' },
      
      // Calahorra
      { cp: '26500', ciudad: 'Calahorra', provincia: 'La Rioja' },
      
      // Arnedo
      { cp: '26580', ciudad: 'Arnedo', provincia: 'La Rioja' },
      
      // Haro
      { cp: '26200', ciudad: 'Haro', provincia: 'La Rioja' },
      
      // Alfaro
      { cp: '26540', ciudad: 'Alfaro', provincia: 'La Rioja' },
      
      // Nájera
      { cp: '26300', ciudad: 'Nájera', provincia: 'La Rioja' },
      
      // Santo Domingo de la Calzada
      { cp: '26250', ciudad: 'Santo Domingo de la Calzada', provincia: 'La Rioja' },
      
      // Lardero
      { cp: '26140', ciudad: 'Lardero', provincia: 'La Rioja' },
      
      // Villamediana
      { cp: '26142', ciudad: 'Villamediana de Iregua', provincia: 'La Rioja' },
      
      // Otras localidades importantes
      { cp: '26100', ciudad: 'Ribafrecha', provincia: 'La Rioja' },
      { cp: '26110', ciudad: 'Alberite', provincia: 'La Rioja' },
      { cp: '26120', ciudad: 'Albelda de Iregua', provincia: 'La Rioja' },
      { cp: '26130', ciudad: 'Murillo de Río Leza', provincia: 'La Rioja' },
      { cp: '26150', ciudad: 'Navarrete', provincia: 'La Rioja' },
      { cp: '26160', ciudad: 'Entrena', provincia: 'La Rioja' },
      { cp: '26180', ciudad: 'Agoncillo', provincia: 'La Rioja' },
      { cp: '26190', ciudad: 'Varea', provincia: 'La Rioja' },
      { cp: '26210', ciudad: 'Casalarreina', provincia: 'La Rioja' },
      { cp: '26220', ciudad: 'Briñas', provincia: 'La Rioja' },
      { cp: '26230', ciudad: 'Zarratón', provincia: 'La Rioja' },
      { cp: '26240', ciudad: 'San Asensio', provincia: 'La Rioja' },
      { cp: '26260', ciudad: 'Cenicero', provincia: 'La Rioja' },
      { cp: '26270', ciudad: 'Torremontalbo', provincia: 'La Rioja' },
      { cp: '26280', ciudad: 'Ezcaray', provincia: 'La Rioja' },
      { cp: '26290', ciudad: 'Pradejón', provincia: 'La Rioja' },
      { cp: '26310', ciudad: 'Cordovín', provincia: 'La Rioja' },
      { cp: '26320', ciudad: 'Badarán', provincia: 'La Rioja' },
      { cp: '26330', ciudad: 'Briones', provincia: 'La Rioja' },
      { cp: '26340', ciudad: 'San Vicente de la Sonsierra', provincia: 'La Rioja' },
      { cp: '26350', ciudad: 'Cenicero', provincia: 'La Rioja' },
      { cp: '26360', ciudad: 'Fuenmayor', provincia: 'La Rioja' },
      { cp: '26370', ciudad: 'Navarrete', provincia: 'La Rioja' },
      { cp: '26400', ciudad: 'Cervera del Río Alhama', provincia: 'La Rioja' },
      { cp: '26510', ciudad: 'Pradejón', provincia: 'La Rioja' },
      { cp: '26520', ciudad: 'Rincón de Soto', provincia: 'La Rioja' },
      { cp: '26530', ciudad: 'Aldeanueva de Ebro', provincia: 'La Rioja' },
      { cp: '26550', ciudad: 'Quel', provincia: 'La Rioja' },
      { cp: '26560', ciudad: 'Autol', provincia: 'La Rioja' },
      { cp: '26570', ciudad: 'Préjano', provincia: 'La Rioja' },
      { cp: '26590', ciudad: 'Grávalos', provincia: 'La Rioja' },
    ];

    console.log('📮 Creando códigos postales de La Rioja...');
    for (const cp of codigosPostales) {
      await prisma.codigoPostal.upsert({
        where: { cp: cp.cp },
        update: {
          ciudad: cp.ciudad,
          provincia: cp.provincia,
        },
        create: {
          cp: cp.cp,
          ciudad: cp.ciudad,
          provincia: cp.provincia,
          id_pais: spain.id,
        },
      });
    }
    console.log(`✅ ${codigosPostales.length} códigos postales creados\n`);

    console.log('✨ Seed de La Rioja completado exitosamente\n');
  } catch (error) {
    console.error('❌ Error durante el seed:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
