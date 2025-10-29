const { PrismaClient } = require('./prisma/generated/client');

const prisma = new PrismaClient();

async function main() {
  try {
    // Crear Socio
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

    // Crear Asociado principal (miembroPrincipal: 1)
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
        nacionalidad: 1, // España
        pais_nacimiento: 1,
        numero_telefonico: '912345678',
        ocupacion: 'Demo',
        profesion: 'Demo',
        miembroPrincipal: 1,
        alimentacion1: 1
      }
    });

    console.log('\n✓ Usuario listo para acceder:');
    console.log(`  ID Socio: ${socio.id_socio}`);
    console.log(`  Documento: ${asociado.numero_documento}\n`);
  } catch (e) {
    console.error('Error:', e.message);
    console.error(e);
  } finally {
    await prisma.$disconnect();
  }
}

main();
