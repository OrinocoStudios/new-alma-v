# Alma Venezuela Connect

Aplicación web para gestión de socios y grupos familiares de la Asociación Alma Venezuela.

## Stack Tecnológico

- **Frontend**: Next.js 14+ con React y TypeScript
- **Estilos**: Tailwind CSS
- **Base de Datos**: PostgreSQL
- **ORM**: Prisma
- **Validaciones**: Zod + React Hook Form

## Características

- ✅ Autenticación de socio (ID + Documento)
- ✅ Gestión de grupo familiar
- ✅ Validación de documentos (DNI, NIE, Pasaporte)
- ✅ Filtros dependientes (País → Estados → Ciudades)
- ✅ Gestión de direcciones
- ✅ Interfaz responsive

## Inicio Rápido

### 1. Instalar dependencias
```bash
npm install
```

### 2. Configurar .env.local
```
DATABASE_URL="postgresql://user:password@localhost:5432/alma_venezuela"
```

### 3. Configurar Prisma
```bash
npx prisma generate
npx prisma db push
```

### 4. Ejecutar en desarrollo
```bash
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000)

## API Endpoints

- `POST /api/auth/login` - Autenticación
- `GET/POST/PUT /api/asociados` - Gestión de familia
- `GET/POST/PUT /api/direcciones` - Gestión de direcciones
- `GET /api/filters` - Filtros dinámicos

## Build y Deploy

```bash
npm run build
npm start
```

Listo para Vercel o cualquier host Node.js.
