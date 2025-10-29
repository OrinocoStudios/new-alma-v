import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando seed de base de datos...\n');

  try {
    // Crear datos base: España
    let spain = await prisma.pais.findFirst({
      where: { pais: 'España' },
    });

    if (!spain) {
      spain = await prisma.pais.create({
        data: {
          pais_nro: 1,
          pais: 'España',
          codigo: 'ES',
          iso_2: 'ES',
          iso_3: 'ESP',
          moneda: 'EUR',
          continente: 'EU',
        },
      });
      console.log('✅ País España creado\n');
    }

    const adminUsuario = 'admin';
    const adminPassword = 'admin';

    // Verificar si el admin ya existe
    const existingAdmin = await prisma.admin.findUnique({
      where: { usuario: adminUsuario },
    });

    if (existingAdmin) {
      console.log('✅ Admin ya existe en la base de datos');
      console.log(`   Usuario: ${existingAdmin.usuario}`);
      console.log(`   Nombre: ${existingAdmin.nombres} ${existingAdmin.apellido1re}`);
    } else {
      // Hashear contraseña
      const hashedPassword = await bcrypt.hash(adminPassword, 10);

      // Crear nuevo admin
      const newAdmin = await prisma.admin.create({
        data: {
          usuario: adminUsuario,
          password: hashedPassword,
          nombres: 'Administrador',
          apellido1re: 'Sistema',
          apellido2do: 'Alma',
          rol: 'admin',
          activo: 1,
        },
      });

      console.log('✅ Admin creado exitosamente');
      console.log(`   ID: ${newAdmin.id}`);
      console.log(`   Usuario: ${newAdmin.usuario}`);
      console.log(`   Nombre: ${newAdmin.nombres} ${newAdmin.apellido1re}\n`);
    }

    console.log('📝 Credenciales para acceso:\n');
    console.log(`   Usuario: ${adminUsuario}`);
    console.log(`   Contraseña: ${adminPassword}\n`);
    console.log('✨ Seed completado exitosamente\n');
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
