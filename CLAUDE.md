# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Poseidon.AI is a fintech application featuring three coordinated AI engines (Protect, Grow, Optimize) for financial risk detection and opportunity forecasting. Full-stack TypeScript with React 19 frontend and Express backend.

## Development Commands

```bash
# Install dependencies
npm install

# Development (full stack with HMR)
npm run dev

# Development (client only)
npm run dev:client

# Production build
npm run build

# Run production server
npm run start

# Type checking
npm run check

# Database migrations
npm run db:push
```

## Architecture

### Directory Structure
- `client/` - React 19 SPA with Vite
  - `src/components/ui/` - shadcn/Radix UI components
  - `src/components/layout/` - Navbar, Footer
  - `src/pages/` - Route pages (Home, Dashboard, 404)
  - `src/hooks/` - Custom React hooks
  - `src/lib/` - Utilities and queryClient
- `server/` - Express.js API server
  - `index.ts` - Server setup and middleware
  - `routes.ts` - API route definitions
  - `storage.ts` - Storage interface (IStorage) with MemStorage implementation
- `shared/` - Shared code between client/server
  - `schema.ts` - Drizzle ORM schema and Zod validation
- `script/build.ts` - Production build script (esbuild + Vite)

### Key Technologies
- **Frontend**: React 19, Vite 7, wouter (routing), React Query, framer-motion, recharts
- **Backend**: Express.js, Drizzle ORM, PostgreSQL, Passport
- **Styling**: Tailwind CSS 4 (via @tailwindcss/vite), shadcn/ui components
- **Validation**: Zod with drizzle-zod integration

### Path Aliases
- `@/*` → `client/src/*`
- `@shared/*` → `shared/*`
- `@assets` → `attached_assets/`

### Data Flow
1. React components use React Query with `apiRequest()` from `lib/queryClient.ts`
2. Backend routes use the `storage` interface for data operations
3. Database schema defined in `shared/schema.ts` with Zod validation

### Storage Interface Pattern
The `IStorage` interface in `server/storage.ts` abstracts data operations. Currently uses in-memory `MemStorage` - swap implementation for PostgreSQL by implementing the interface.

## Environment Variables

- `DATABASE_URL` - PostgreSQL connection string (required for db:push)
- `PORT` - Server port (default: 5000)
- `NODE_ENV` - "development" or "production"

## Build Output

- Client builds to `dist/public/`
- Server bundles to `dist/index.cjs` (CommonJS)
