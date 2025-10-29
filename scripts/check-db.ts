import { prisma } from '@/app/lib/db';

async function main() {
  try {
    console.log('Checking database connection...');
    const count = await prisma.pais.count();
    console.log(`✅ Connected! Found ${count} countries in database.`);
    process.exit(0);
  } catch (error) {
    console.error('❌ Failed to connect to database:', error);
    process.exit(1);
  }
}

main();
