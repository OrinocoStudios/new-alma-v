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
npx prisma generate         # Generate Prisma client (run after pulling schema changes)
npx prisma db push          # Push schema changes to database
npx prisma studio          # Open Prisma Studio UI for database inspection

# Seeding
npm run seed                 # Seed database with initial admin user and Spain data
npm run seed:larioja        # Seed La Rioja specific data (postal codes and street types)
```

## Architecture Overview

**Tech Stack**: Next.js 16 + React 19 + TypeScript + PostgreSQL + Prisma ORM

⚠️ **Note**: This project uses React 19 and Next.js React Compiler (experimental features). Some debugging patterns may behave differently.

This is a full-stack family management system for Alma Venezuela with dual authentication:

1. **Admin Panel** - Administrative interface for managing families and members
2. **Familia Dashboard** - End-user accounts for family data self-management

**Key Architectural Patterns**:
- Dual authentication system (Admin session-based, Familia ID+document validation)
- Prisma ORM with PostgreSQL backend
- Zod schemas with React Hook Form for type-safe validation
- Tailwind CSS 4 for styling
- Standard Next.js App Router structure: `/app` for routes, `/app/api` for endpoints, `/app/components` for shared components

### Database Hierarchy

The system organizes data in a hierarchical structure:

1. **`Familia`** (Main Account) - Top-level entity representing a family unit
   - Linked to one principal member via unique `id_socio` field (references `Socio` table)
   - Contains multiple `Miembro` records (family members)
   - Contains multiple `Direccion` records (addresses)

2. **`Miembro`** (Family Member) - Individual people associated with a Familia
   - Validates via document type (DNI, NIE, Pasaporte, Otro)
   - Stores birth location information (country, state, city)
   - Tracks relationship role and dietary preferences
   - One record marked as principal (`esPrincipal = 1`)

3. **`Direccion`** (Address) - Address records linked to Familia
   - References street type (`TipoVia`) from La Rioja dataset
   - References postal code (`CodigoPostal`) for validation
   - Supports multiple address types (sector, organization, pueblo)

4. **Location & Reference Tables**:
   - `Pais` - Countries (Spain required for initial data)
   - `Estado` - States/Provinces (Venezuela data included)
   - `Ciudad` - Cities
   - `CodigoPostal` - Postal codes (La Rioja dataset: 26xxx range)
   - `TipoVia` - Street types (12 types from La Rioja seed)

5. **`Admin`** - Administrator accounts for management functions
   - Supports role-based access (admin, moderator)
   - Passwords hashed with bcryptjs

6. **`Socio`** - Legacy principal member table (kept for backwards compatibility with `id_socio` references)

### Data Storage Notes

- **Date Fields**: Stored as `YYYY-MM-DD` in database; UI converts to/from `DD/MM/YYYY`
- **Boolean Fields**: Stored as `TinyInt` (0=false, 1=true): `esPrincipal`, `alimentacion1`, `activa`
- **Document Types**: DNI (8 digits + letter), NIE (X/Y/Z + 7 digits + letter), PS (Passport), OTR (Other)
- **Gender**: H (Hembra/Female), M (Macho/Male)

### API Layer (`/app/api`)

RESTful API routes following Next.js conventions with consistent error handling.

**Authentication Routes**:
- **`POST /api/auth/admin/login`**: Admin authentication (username + password with bcryptjs)
- **`POST /api/auth/admin/logout`**: Clear admin session
- **`POST /api/auth/login`**: Familia authentication (ID + document number)

**Familia & Miembro Management**:
- **`GET/POST /api/familias`**: List/create families
- **`GET /api/familias/[id]`**: Fetch specific familia with miembros
- **`GET/POST/PUT /api/miembros`**: CRUD operations for family members (cascading validation)

**Address Management**:
- **`GET/POST/PUT /api/direcciones`**: CRUD operations for addresses

**Dynamic Filters**:
- **`GET /api/filters`**: Dynamic dropdown data (paises, estados, ciudades, codigo_postal, tipos_via)

All routes validate input with Zod schemas and return appropriate HTTP status codes.

### Admin Flow

**Purpose**: Administrative interface for managing all families in the system.

**Access**: `/` (admin login) → `/familias` (list) → `/familias/[id]` (detail)

**Key Features**:
- Username/password authentication (bcryptjs hashed)
- Session-based access control
- View all families with search/filter
- Create new familia records
- View/edit miembros and direcciones for any familia

**Main Components**:
- `AdminLoginForm.tsx` - Admin credentials form
- `FamiliasPanel.tsx` - Family list with search
- `SocioDetailPanel.tsx` - Familia detail with members and addresses (⚠️ component name uses legacy "Socio" terminology)
- `CreateFamiliaForm.tsx` - New family registration

### Familia Flow

**Purpose**: Self-service dashboard for families to manage their own data.

**Access**: `/` (familia login) → `/dashboard/[id]` (dashboard)

**Key Features**:
- ID + document number authentication (no password)
- sessionStorage-based login (⚠️ **NOT production-ready** - see Security Limitations)
- View/add/edit own family members
- Manage own addresses
- No access to other families' data

**Main Components**:
- `LoginForm.tsx` - Familia authentication (ID + document)
- `MiembroForm.tsx` - Add/edit members with cascading filters (country→state→city)
- `FamiliaMembersList.tsx` - Member table display
- `AddDireccionModal.tsx` - Address management modal

**Legacy Components** (⚠️ consider migrating or removing):
- `FamiliaMemberForm.tsx` - Duplicate of MiembroForm.tsx
- `AddAsociadoModal.tsx` - Uses old "Asociado" terminology
- `/app/socios/` routes - Old route structure, use `/app/familias/` instead

## Development Patterns

### Dual Authentication System

The application implements two completely separate authentication flows:

| Aspect | Admin Auth | Familia Auth |
|--------|-----------|-------------|
| **Credentials** | Username + Password | ID (`id_socio`) + Document Number |
| **Storage** | Server-side session/cookies | Client-side sessionStorage |
| **Validation** | bcryptjs hash | Direct DB lookup |
| **Protected Routes** | `/familias/*` | `/dashboard/[id]` |
| **Access Scope** | All families (read/write) | Own family only (read/write) |
| **Role System** | Yes (admin/moderator) | No |

⚠️ **CRITICAL SECURITY ISSUE**: The Familia authentication using sessionStorage is **NOT production-ready**. Planned migration to JWT with secure HTTP-only cookies is required before production deployment (see Known Limitations).

### Validation & Zod Schemas

All input validation uses Zod schemas in `/app/lib/validations.ts`:

- **Document Validation**:
  - DNI: 8 digits + 1 letter (regex: `^\d{8}[A-Z]$`)
  - NIE: X/Y/Z + 7 digits + 1 letter (regex: `^[XYZ]\d{7}[A-Z]$`)
  - Passport: 10-15 alphanumeric characters
  - Other: 10-15 characters (text, alphanumeric, or mixed)

- **Phone Validation**: Exactly 9 digits for Spain
- **Date Validation**: DD/MM/YYYY input format
- **Field Constraints**:
  - Nombres/Apellidos: max 30/15 characters
  - Ocupación/Profesión: max 100 characters
  - Postal Code: 5 digits
  - Género: H or M only

### Helper Functions

Located in `/app/lib/validations.ts`:
- `formatDateForDB(ddmmyyyyString)` - Convert DD/MM/YYYY to YYYY-MM-DD
- `formatDateForDisplay(yyyymmddDate)` - Convert YYYY-MM-DD to DD/MM/YYYY
- `validateDocumentByType(tipoDocumento, numero)` - Validate document by type
- `getDefaultNationality(tipoDocumento)` - Auto-assign nationality based on document type

### Database Access

- Singleton Prisma client in `/app/lib/db.ts`
- All routes import: `import { prisma } from '@/app/lib/db'`
- Path alias `@/*` resolves to project root (configured in `tsconfig.json`)

### Error Handling

API routes follow a consistent error response pattern:

```typescript
// Success response
{ data: { /* payload */ }, error: null }

// Error response
{ data: null, error: { message: string, details?: any }, status: number }
```

- Validation errors: 400 with Zod error flatten
- Authentication failures: 401
- Resource not found: 404
- Server errors: 500

### State Management

**Admin**: Session-based (server-side or HTTP-only cookies)

**Familia**: 
- Login state stored in `sessionStorage` as JSON
- Dashboard fetches associated data on mount via API calls
- `useEffect` handles redirect if session missing
- Logout clears `sessionStorage`

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
4. `npm run seed` - Create initial admin user and Spain data
5. `npm run seed:larioja` - Load La Rioja postal codes and street types
6. `npm run dev` - Start development server

### Common Development Patterns

**Adding a new API endpoint**:
1. Create route handler in `/app/api/path/route.ts`
2. Define Zod schema in `/app/lib/validations.ts` if input validation needed
3. Use `prisma` singleton from `/app/lib/db.ts` for database operations
4. Return consistent error/success response format with appropriate status codes

**Working with dates**:
- UI accepts/displays: `DD/MM/YYYY` format
- Database stores: `YYYY-MM-DD` format
- Always use helper functions to avoid format mismatch bugs

**Adding new location data** (countries, states, cities):
- Spain (España): Created by base seed
- La Rioja municipalities: Postal codes (26xxx range) and street types created by `npm run seed:larioja`
- Use Prisma Studio (`npx prisma studio`) to verify data is persisted

**Debugging database queries**:
- Check Next.js dev server console for Prisma logs
- Use `npx prisma studio` for interactive database exploration
- Verify schema changes with `git diff prisma/schema.prisma`

## React Compiler & Performance

This project uses **Next.js Babel React Compiler** for automatic memoization and optimization.

**Configuration**: `next.config.ts` with `reactCompiler: true`

**Important Notes**:
- The compiler automatically memoizes components and values
- May affect debugging behavior in browser DevTools
- Use React DevTools Profiler if performance issues arise
- No manual `memo()` or `useMemo()` needed (compiler handles it)

For debugging issues related to the compiler:
- Check browser console for unexpected re-renders
- Disable compiler temporarily by setting `reactCompiler: false` to isolate issues
- Refer to [Next.js React Compiler documentation](https://nextjs.org/docs/app/building-your-application/optimizing/react-compiler)

## Known Limitations & Next Steps

### Security Issues (Must Fix Before Production)

- ⚠️ **CRITICAL**: Familia sessionStorage authentication is insecure - migrate to JWT with HTTP-only cookies
- ⚠️ Admin default credentials hardcoded in seed (username: `admin`, password: `admin`)
- **Planned**: CSRF protection middleware
- **Planned**: Server-side session validation
- **Planned**: Secure admin password change mechanism

### Technical Debt

- **Duplicate components**: `FamiliaMemberForm.tsx` vs `MiembroForm.tsx`, `AddAsociadoModal.tsx` (consolidate or remove)
- **Legacy terminology**: "Socio/Asociado" in component names and routes (use "Familia/Miembro" in new code)
- **Legacy routes**: `/app/socios/` structure still exists (migrate to `/app/familias/`)

### Features In Progress

- Address management UI refinement
- Editable family member table (currently view-only)
- Export/PDF generation for family records
- Bulk operations (import, update multiple records)

### Planned Improvements

- Pagination for large datasets
- Redis caching for filter data
- Error tracking and performance monitoring
- Internationalization (multi-language support)
- Accessibility improvements (WCAG compliance)

## Important Notes & Troubleshooting

### After Pulling Code

**Always run**: `npx prisma generate` after pulling schema changes to regenerate the Prisma client.

### Database Schema Changes

When modifying `prisma/schema.prisma`:
1. Run `npx prisma db push` to sync with database
2. Verify with `npx prisma studio` that changes persisted
3. Commit both `schema.prisma` and generated migration files

### React 19 + React Compiler (Experimental)

This project uses React 19 and Next.js React Compiler (`reactCompiler: true` in `next.config.ts`):
- Automatic memoization of components and values
- Debugging may behave differently in DevTools
- If unexpected re-renders occur, check React DevTools Profiler first
- To isolate compiler issues, temporarily set `reactCompiler: false`

### Common Issues

**Date Format Mismatches**:
- UI displays/accepts: `DD/MM/YYYY`
- Database stores: `YYYY-MM-DD`
- **Always use helper functions** from `/app/lib/validations.ts`: `formatDateForDB()` and `formatDateForDisplay()`
- Common bug: Forgetting to convert dates before API calls

**Empty Dropdowns in Address Forms**:
- Cause: La Rioja seed data not loaded
- Solution: Run `npm run seed:larioja` to load postal codes and street types
- Verify in Prisma Studio: check `codigos_postales` and `tipos_via` tables

**Authentication Redirects Not Working**:
- Admin: Check server-side session configuration
- Familia: Check `sessionStorage.getItem('familia')` in browser DevTools
- Clear sessionStorage if stale data exists

**Prisma Client Import Errors**:
- Run `npx prisma generate` to regenerate client
- Restart dev server: `npm run dev`
- If persists, delete `node_modules/.prisma` and regenerate

### Security Warnings

⚠️ **Admin Default Credentials** (change immediately in production):
- Username: `admin`
- Password: `admin`
- Update via SQL: `UPDATE admins SET password = 'nuevo-hash-bcrypt' WHERE usuario = 'admin'`

⚠️ **Familia sessionStorage Authentication**: NOT production-ready. See Known Limitations section.

### Required Seeds for Full Functionality

1. **Base seed** (`npm run seed`): Admin user, Spain country data
2. **La Rioja seed** (`npm run seed:larioja`): Postal codes (26xxx) and street types - **Required** for address forms to work

## Deployment Notes

For Vercel deployment:

1. Ensure `postinstall` script in `package.json` includes `prisma generate`
2. Set `DATABASE_URL` environment variable in Vercel Settings
3. Run base seed on first deploy: `npm run seed`
4. Run La Rioja seed: `npm run seed:larioja`
5. Verify address/postal code features work after deployment

See `DEPLOYMENT.md` for detailed deployment instructions.
