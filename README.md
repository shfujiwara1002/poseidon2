# Poseidon.AI

A unified financial immune system designed to detect risks and opportunities across your entire financial footprint.

## Features

- **Protect Engine** - Real-time fraud detection and security monitoring
- **Grow Engine** - Financial opportunity forecasting and investment insights
- **Optimize Engine** - Automated financial execution and optimization

## Tech Stack

- **Frontend**: React 19, Vite, Tailwind CSS 4, shadcn/ui
- **Backend**: Express.js, TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Validation**: Zod

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL (optional for development)

### Installation

```bash
npm install
```

### Development

```bash
# Full stack development
npm run dev

# Client only (faster HMR)
npm run dev:client
```

Open http://localhost:5000 in your browser.

### Production

```bash
npm run build
npm run start
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start full stack dev server |
| `npm run dev:client` | Start client dev server only |
| `npm run build` | Build for production |
| `npm run start` | Run production server |
| `npm run check` | TypeScript type checking |
| `npm run db:push` | Push database schema changes |

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | PostgreSQL connection string | For database features |
| `PORT` | Server port (default: 5000) | No |

## License

MIT
