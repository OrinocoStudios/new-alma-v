# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Quick Commands

```bash
# Development
npm run dev                  # Start dev server (localhost:3000)

# Building & Linting
npm run build                # Build for production
npm start                    # Start production server
npm run lint                 # Run ESLint

# Database
npx prisma generate         # Generate Prisma client
npx prisma db push          # Push schema changes to database
npx prisma studio          # Open Prisma Studio UI for database inspection
npm run seed                 # Seed database with initial admin user and Spain data
```

## Architecture Overview

**Tech Stack**: Next.js 14 + React 19 + TypeScript + PostgreSQL + Prisma

### Core Architecture

This is a full-stack family management system for Alma Venezuela. The application has two main user flows: **Admin** (management panel) and **Socio** (main account user). Architecture follows Next.js App Router patterns with clear separation:

- **Authentication**: Dual-layer with Admin (session-based) and Socio authentication
- **Data Layer**: Prisma ORM with PostgreSQL
- **Validation**: Zod schemas with React Hook Form
- **Styling**: Tailwind CSS 4

### API Layer (`/app/api`)

RESTful API routes following Next.js conventions:

- **`/auth/login`**: POST - Authenticate socio (main account) with ID + document number
- **`/asociados`**: GET/POST/PUT - CRUD operations for family members
- **`/direcciones`**: GET/POST/PUT - CRUD operations for addresses  
- **`/filters`**: GET - Dynamic filters (countries, states, cities, postal codes, address types)

All routes validate input with Zod schemas and return appropriate HTTP status codes.

### Admin Flow

**Routes**:
- **`/api/auth/admin/login`**: POST - Authenticate admin with username + password (bcryptjs hashing)
- **`/api/auth/admin/logout`**: POST - Clear admin session
- **`/socios`**: Admin panel showing all socios and families
- **`/socios/[id]`**: Detailed view of a socio's family and addresses

**Components**:
- **`AdminLoginForm.tsx`**: Admin authentication
- **`SociosPanel.tsx`**: List of all socios (admin view)
- **`SocioDetailPanel.tsx`**: Details of a specific socio's associates and addresses
- **`AddSocioForm.tsx`**: Form to register new socios (admin only)

### Socio Flow

**Routes**:
- **`/api/auth/login`**: POST - Authenticate socio (legacy) with ID + document number
- **`/api/socios`**: GET/POST/PUT - CRUD for socios (by admin)
- **`/api/socios/[id]`**: GET - Fetch specific socio details
- **`/dashboard/[id]`**: Socio dashboard (post-authentication) showing family members and addresses

**Components**:
- **`LoginForm.tsx`**: Socio authentication form
- **`AsociadoForm.tsx`**: Add/edit family members with cascading filters
- **`AddAsociadoModal.tsx`**: Modal wrapper for adding family members

### Data Model (`prisma/schema.prisma`)

The database uses a hierarchical structure:

1. **`Socio`** (Main Account) - Top-level user account (id_socio must be unique)
2. **`Asociado`** (Family Member) - Associated people linked to a Socio
3. **`Direccion`** (Address) - Address records for a Socio
4. **Location Tables** - `Pais`, `Estado`, `Ciudad`, `CodigoPostal`, `TipoVia` for geographical and address data

**Key Fields**:
- Date fields use `DateTime @db.Date` format; stored as YYYY-MM-DD, converted to DD/MM/YYYY for UI
- Document types: DNI (Spain), NIE (Spain), PS (Passport), OTR (Other)
- Gender: H (Hembra/Female), M (Macho/Male)
- Boolean fields stored as TinyInt (0/1): `miembroPrincipal`, `alimentacion1`, `activa`

### Components (`/app/components`)

- **`LoginForm.tsx`**: Authentication form - validates socio ID and document number
- **`AsociadoForm.tsx`**: Complex family member form with:
  - Dependent country → state → city filters
  - Document type validation (DNI/NIE/Passport/Other with specific patterns)
  - Auto-nationality assignment based on document type
  - Date formatting (DD/MM/YYYY input, YYYY-MM-DD database)
  - Phone validation (9 digits for Spain)

### Page Structure

**Authentication**:
- **`/`** (home): Login page (defaults to LoginForm for Socio, check logic for Admin redirect)

**Admin Routes** (require admin auth):
- **`/socios`**: Admin panel listing all socios
- **`/socios/[id]`**: Socio detail page with family and address management

**Socio Routes** (require socio auth):
- **`/dashboard/[id]`**: Main dashboard with family member table, two tabs (Familia/Dirección), and add member form

## Development Patterns

### Validation

All input validation uses Zod schemas in `/app/lib/validations.ts`. Each schema has:
- Type-specific document validation (DNI regex: 8 digits + letter, NIE regex: X/Y/Z + 7 digits + letter)
- Phone validation (exactly 9 digits)
- Date format validation (DD/MM/YYYY input format)
- Field length constraints

**Helper functions**: `formatDateForDB()`, `formatDateForDisplay()`, `validateDocumentByType()`, `getDefaultNationality()`

### Database Access

- Singleton Prisma client in `/app/lib/db.ts`
- All routes import: `import { prisma } from '@/app/lib/db'`
- Path alias `@/*` resolves to project root

### Error Handling

- API routes return `{ error, details }` with appropriate status codes
- Validation errors return 400 with Zod error flatten
- Missing resources return 401/404 based on context
- Server errors return 500

### State Management

- Login state stored in `sessionStorage` as JSON (key: 'socio')
- Dashboard fetches associated data on mount via API calls
- useEffect handles redirect if session missing

### Environment Setup

Required `.env.local` file:
```
DATABASE_URL="postgresql://user:password@localhost:5432/alma_venezuela"
NODE_ENV="development"  # or "production"
```

**Initial Setup**:
1. `npm install` - Install dependencies
2. `npx prisma generate` - Generate Prisma client
3. `npx prisma db push` - Sync schema with database
4. `npm run seed` - Create initial admin user (usuario: admin, password: admin) and Spain data
5. `npm run dev` - Start development server

### Common Development Patterns

**Adding a new API endpoint**:
1. Create route handler in `/app/api/path/route.ts`
2. Define Zod schema in `/app/lib/validations.ts` if input validation needed
3. Use `prisma` singleton from `/app/lib/db.ts` for database operations
4. Return `{ error, details }` format for errors with appropriate status codes

**Working with dates**:
- UI accepts/displays: `DD/MM/YYYY` format
- Database stores: `YYYY-MM-DD` format
- Use `formatDateForDB()` and `formatDateForDisplay()` helpers in `/app/lib/validations.ts`

**Document validation**:
- Use `validateDocumentByType()` helper for DNI/NIE/Passport validation
- DNI pattern: 8 digits + letter (e.g., 12345678A)
- NIE pattern: X/Y/Z + 7 digits + letter (e.g., X1234567A)
- Passport/Other: 10-15 alphanumeric characters

**Debugging database queries**:
- Prisma logs in dev mode: check console for `query`, `error`, `warn` logs
- Use `npx prisma studio` for UI-based database exploration
- Check `/app/lib/db.ts` for Prisma client configuration

## Known Limitations & Next Steps

### Security
- Current sessionStorage login is **NOT production-ready**
- TODO: Migrate to JWT with secure HTTP-only cookies
- TODO: Add CSRF protection
- TODO: Implement server-side session validation

### Features In Progress
- Address management UI (route exists, form placeholder in dashboard)
- Editable family member table (view-only currently)
- Export/PDF generation

### Planned Improvements
- Pagination for large datasets
- Redis caching for filter data
- Analytics and monitoring
- E2E tests (Playwright)

## Important Notes

**Prisma Client Generation**:
After pulling schema changes from git, always run `npx prisma generate` to ensure the Prisma client is up-to-date.

**Database Schema Changes**:
When modifying `prisma/schema.prisma`, push changes with `npx prisma db push`. This will update both the database and generate migrations.

**React Compiler**:
This project uses Next.js Babel React Compiler (`reactCompiler: true` in `next.config.ts`). This may affect debugging—check browser DevTools if unexpected behavior occurs.

**Admin Default Credentials** (from seed):
- Username: `admin`
- Password: `admin`
Change these in production after first login.

## File Locations Reference

- Route handlers: `/app/api/**/route.ts`
- React components: `/app/components/*.tsx`
- Pages: `/app/page.tsx`, `/app/socios/page.tsx`, `/app/dashboard/[id]/page.tsx`
- Utilities: `/app/lib/*.ts` (validations, db client)
- Database schema: `/prisma/schema.prisma`
- Database seed: `/prisma/seed.ts`
- Type definitions: `tsconfig.json` with `@/*` path alias
