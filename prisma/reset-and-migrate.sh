#!/bin/bash

# Script para resetear la base de datos y aplicar migración al nuevo modelo Familia/Miembro

echo "=============================================="
echo "  MIGRACIÓN AL NUEVO MODELO FAMILIA/MIEMBRO"
echo "=============================================="

# 1. Resetear base de datos (drop all tables)
echo "Paso 1: Resetear base de datos..."
npx prisma db push --force-reset

# 2. Aplicar nueva estructura con Prisma
echo "Paso 2: Aplicar nueva estructura..."
npx prisma generate
npx prisma db push

# 3. Ejecutar script de migración si hay datos existentes
echo "Paso 3: Ejecutando script de migración..."

# Verificar si hay datos existentes
COUNT=$(npx prisma db execute --stdin "SELECT COUNT(*) as count FROM socios;" | grep -oP '\d+' | tail -1)

if [ "$COUNT" -gt 0 ]; then
  echo "Datos existentes detectados, ejecutando migración..."
  # Ejecutar script de migración
  npx prisma db execute --file prisma/migrate-to-familia-model.sql
  
  echo "✅ Migración completada. Verificando integridad de datos..."
  
  # Verificar integridad
  echo "✅ Estadísticas post-migración:"
  npx prisma db execute --stdin "
  SELECT 'Socios migrados:', COUNT(*) FROM socios;
  SELECT 'Familias creadas:', COUNT(*) FROM familias;
  SELECT 'Miembros principales:', COUNT(*) FROM miembros WHERE esPrincipal = 1;
  SELECT 'Miembros secundarios:', COUNT(*) FROM miembros WHERE esPrincipal = 0;
  SELECT 'Direcciones migradas:', COUNT(*) FROM direcciones;
  "
  
else
  echo "Base de datos vacía. Aplicando seed con nuevo modelo..."
  npx prisma db seed
fi

echo "✅ Migración completada exitosamente!"
echo "=============================================="