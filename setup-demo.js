const { PrismaClient } = require('./prisma/generated/client');

const prisma = new PrismaClient();

async function main() {
  try {
    // 1. Crear país (España)
    const pais = await prisma.pais.upsert({
      where: { pais_nro: 1 },
      update: {},
      create: {
        pais_nro: 1,
        pais: 'España',
        codigo: 'ES',
        iso_2: 'ES',
        iso_3: 'ESP',
        moneda: 'EUR',
        continente: 'EU'
      }
    });
    console.log('✓ País creado/actualizado');

    // 2. Crear Socio
    const socio = await prisma.socio.upsert({
      where: { id_socio: 12345 },
      update: {},
      create: {
        id_socio: 12345,
        nombres: 'Cliente',
        apellido1re: 'Demo',
        apellido2do: 'Test',
        miembroprincipal: 1
      }
    });
    console.log('✓ Socio creado/actualizado');

    // 3. Crear Asociado principal
    const asociado = await prisma.asociado.upsert({
      where: { numero_documento: '12345678A' },
      update: { miembroPrincipal: 1 },
      create: {
        id_socio: socio.id,
        id_asociado: 1,
        tipo_documento: 'DNI',
        numero_documento: '12345678A',
        nombres: 'Cliente',
        apellido1re: 'Demo',
        apellido2do: 'Test',
        fecha_nacimiento: new Date('1990-01-15'),
        genero: 'M',
        nacionalidad: pais.id,
        pais_nacimiento: pais.id,
        numero_telefonico: '912345678',
        ocupacion: 'Demo',
        profesion: 'Demo',
        miembroPrincipal: 1,
        alimentacion1: 1
      }
    });
    console.log('✓ Asociado principal creado/actualizado');

    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('✅ DATOS PARA LOGIN:');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log(`ID Socio:     ${socio.id_socio}`);
    console.log(`Documento:    ${asociado.numero_documento}`);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  } catch (e) {
    console.error('❌ Error:', e.message);
    if (e.code) console.error('   Código:', e.code);
  } finally {
    await prisma.$disconnect();
  }
}

main();
