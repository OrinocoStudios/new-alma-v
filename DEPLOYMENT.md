# 🚀 Deployment en Vercel - Alma Venezuela

## ✅ Pre-requisitos

- ✅ Vercel CLI instalado (`vercel --version`)
- ✅ Cuenta de Vercel activa
- ✅ Base de datos PostgreSQL (Supabase)
- ✅ Código en Git

---

## 📋 Pasos para Deployment

### 1. **Verificar que todo compila**

```bash
npm run build
```

Debe salir: `✓ Compiled successfully`

---

### 2. **Configurar Variables de Entorno en Vercel**

Ve a tu proyecto en Vercel Dashboard y agrega estas variables en **Settings → Environment Variables**:

#### Variables Requeridas:

```env
# Database (Supabase)
DATABASE_URL="postgresql://postgres.xxx:xxx@aws-1-eu-north-1.pooler.supabase.com:5432/postgres"
DIRECT_URL="postgresql://postgres:xxx@db.xxx.supabase.co:5432/postgres"

# Node Environment
NODE_ENV="production"
```

> ⚠️ **IMPORTANTE**: Usa las URLs de tu `.env.local` pero cámbialas según el ambiente:
> - **Production**: Usa las URLs de producción de Supabase
> - **Preview**: Puedes usar las mismas o una DB de staging

---

### 3. **Verificar que el seed se ejecutó en producción**

Después del primer deploy, necesitas ejecutar los seeds en la base de datos de producción:

```bash
# Opción 1: Desde tu local conectado a la DB de producción
DATABASE_URL="postgresql://..." npm run seed
DATABASE_URL="postgresql://..." npm run seed:larioja

# Opción 2: Crear un script de deployment
# (ver sección "Post-Deploy Scripts" abajo)
```

---

### 4. **Desplegar a Vercel**

#### Opción A: Desde Vercel CLI

```bash
# Deploy a preview (recomendado primero)
vercel

# Deploy a producción
vercel --prod
```

#### Opción B: Desde GitHub (Automático)

Si conectaste tu repo a Vercel:
1. Push a `main` → Deploy automático a producción
2. Push a otra rama → Deploy a preview

```bash
git push origin main
```

---

## 🔧 Configuración Adicional de Vercel

### Build Configuration

Vercel detecta automáticamente Next.js, pero verifica que tenga:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "installCommand": "npm install",
  "framework": "nextjs"
}
```

---

### Post-Deploy Scripts (Opcional)

Para ejecutar seeds automáticamente después del deploy, puedes crear un endpoint API:

**`app/api/admin/seed/route.ts`** (protegido con autenticación):

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  // Verificar token de autenticación
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.ADMIN_SEED_TOKEN}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    // Ejecutar seed de La Rioja
    // ... código del seed aquí
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Seed failed' }, { status: 500 });
  }
}
```

Luego puedes llamarlo con:

```bash
curl -X POST https://tu-app.vercel.app/api/admin/seed \
  -H "Authorization: Bearer tu-token-secreto"
```

---

## 🧪 Verificar el Deployment

### 1. **Verificar que la app carga**

```
https://tu-app.vercel.app
```

### 2. **Verificar login admin**

- Usuario: `admin`
- Contraseña: `admin`

### 3. **Verificar datos de La Rioja**

- Navega a un socio
- Tab "Direcciones" → "+ Agregar Dirección"
- Campo "Tipo de Vía" debe tener autocompletado
- Campo "Código Postal" con `26140` debe validar correctamente

---

## 🐛 Troubleshooting

### Error: "Cannot find module '@prisma/client'"

**Solución**: Vercel necesita generar el Prisma client durante el build.

Agrega en `package.json`:

```json
{
  "scripts": {
    "postinstall": "prisma generate"
  }
}
```

---

### Error: "DATABASE_URL not found"

**Solución**: Verifica que las variables de entorno están configuradas en Vercel Dashboard.

---

### Error: "Tipos de vía vacíos"

**Solución**: La base de datos de producción no tiene los seeds ejecutados.

```bash
# Conectarte a la DB de producción y ejecutar:
npm run seed:larioja
```

---

### Error: "CP 26140 no encontrado"

**Solución**: Igual que arriba, ejecutar `npm run seed:larioja` en producción.

---

## 📊 Checklist Post-Deployment

- [ ] ✅ App carga en Vercel URL
- [ ] ✅ Login admin funciona
- [ ] ✅ Socios se listan correctamente
- [ ] ✅ Modal de direcciones abre
- [ ] ✅ Autocompletado de tipo de vía funciona (12 opciones)
- [ ] ✅ Autocompletado de tipo de ubicación funciona (6 opciones)
- [ ] ✅ CP 26140 valida correctamente
- [ ] ✅ Se pueden guardar direcciones
- [ ] ✅ Las direcciones aparecen en la lista

---

## 🔒 Seguridad Post-Deployment

### Cambiar credenciales de admin

Después del primer deploy, cambia la contraseña del admin:

```sql
-- Conectarse a la base de datos de producción
UPDATE admins 
SET password = 'nuevo-hash-bcrypt' 
WHERE usuario = 'admin';
```

O crea un endpoint API protegido para cambiar la contraseña.

---

## 🌐 Dominios Personalizados

Para agregar un dominio personalizado:

1. Ve a Vercel Dashboard → Settings → Domains
2. Agrega tu dominio (ej: `almavzla.com`)
3. Configura los DNS según las instrucciones de Vercel
4. Espera propagación (5-60 minutos)

---

## 📈 Monitoreo

### Analytics de Vercel

Vercel incluye analytics automáticamente:
- **Performance**: Core Web Vitals
- **Traffic**: Requests por endpoint
- **Errors**: Logs de errores

Accede en: `https://vercel.com/tu-usuario/tu-proyecto/analytics`

---

### Logs en Tiempo Real

Para ver logs en tiempo real:

```bash
vercel logs [deployment-url] --follow
```

---

## 🔄 Continuous Deployment

### Configurar CI/CD

1. Conecta tu repositorio de GitHub a Vercel
2. Cada push a `main` → Deploy automático
3. Cada PR → Preview deployment automático

### Proteger main branch

En GitHub Settings → Branches:
- Require pull request reviews
- Require status checks (Vercel build)

---

## 📝 Notas Finales

- **Costos**: Vercel tiene plan gratuito generoso (Hobby)
- **Límites**: 100GB bandwidth/mes gratis
- **Supabase**: 500MB DB gratis, 2GB bandwidth
- **Escalabilidad**: Fácil upgrade a Pro si necesitas más

---

✅ **Tu app está lista para producción**
