# ALifeWSL Next.js Application Schematics

Based on the repository at https://github.com/KeenGWatanabe/alifeWSL, here's a schematic overview of the database schema and application structure to help with troubleshooting and refactoring.

## Database Schema
PK: primary key
FK: foreign key

```
┌───────────────────────┐
│       User             │
├───────────────────────┤
│ - id: string (PK)      │
│ - username: string     │
│ - email: string        │
│ - password: string     │
│ - createdAt: timestamp │
│ - updatedAt: timestamp │
└──────────┬────────────┘
           │
           │ 1
           │ has many
           ▼
┌───────────────────────┐
│     Simulation        │
├───────────────────────┤
│ - id: string (PK)     │
│ - userId: string (FK) │
│ - title: string       │
│ - description: text   │
│ - config: json        │
│ - status: enum        │
│ - createdAt: timestamp│
│ - updatedAt: timestamp│
└──────────┬────────────┘
           │
           │ 1
           │ has many
           ▼
┌───────────────────────┐
│   SimulationResult    │
├───────────────────────┤
│ - id: string (PK)     │
│ - simulationId: string│
│ - data: json          │
│ - metrics: json       │
│ - createdAt: timestamp│
└───────────────────────┘
```

## Application Structure

```
alifeWSL/
├── .next/                   # Next.js build output
├── node_modules/            # Dependencies
├── public/                  # Static assets
│   ├── images/              # Image assets
│   └── favicon.ico          # Favicon
├── src/
│   ├── app/                 # App router directory
│   │   ├── (auth)/          # Auth-related routes
│   │   │   ├── login/       # Login page
│   │   │   └── register/    # Registration page
│   │   ├── (main)/          # Authenticated routes
│   │   │   ├── dashboard/   # User dashboard
│   │   │   ├── simulations/ # Simulation management
│   │   │   └── results/     # Results viewing
│   │   ├── api/             # API routes
│   │   │   ├── auth/        # Authentication API
│   │   │   ├── simulations/ # Simulation API
│   │   │   └── ...          # Other API endpoints
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page
│   ├── components/          # Reusable components
│   │   ├── auth/            # Auth components
│   │   ├── simulations/     # Simulation components
│   │   ├── ui/              # UI primitives
│   │   └── ...              # Other components
│   ├── lib/                 # Utility functions
│   │   ├── auth.ts          # Auth utilities
│   │   ├── db.ts            # Database connection
│   │   └── ...              # Other utilities
│   ├── models/              # Data models
│   │   ├── User.ts          # User model
│   │   ├── Simulation.ts    # Simulation model
│   │   └── ...              # Other models
│   ├── styles/              # Global styles
│   └── types/               # TypeScript types
├── .env.local               # Environment variables
├── next.config.js           # Next.js configuration
├── package.json             # Project dependencies
└── tsconfig.json            # TypeScript configuration
```

## Key Files for Refactoring

1. **Database Connection**: `src/lib/db.ts`
2. **Authentication**: 
   - `src/lib/auth.ts`
   - `src/app/(auth)/**`
   - `src/app/api/auth/**`
3. **Simulation Logic**:
   - `src/models/Simulation.ts`
   - `src/app/(main)/simulations/**`
   - `src/app/api/simulations/**`
4. **Core Components**:
   - `src/components/simulations/` (visualization components)
   - `src/components/ui/` (base UI components)

## Recommendations for Refactoring

1. **Modularize Simulation Logic**: Consider separating the simulation engine from the UI components for better maintainability.

2. **Type Safety**: Expand the `src/types/` directory with detailed interfaces for all API responses and database models.

3. **API Documentation**: Add OpenAPI/Swagger documentation for API endpoints in `src/app/api/`.

4. **Error Handling**: Implement consistent error handling patterns across API routes.

5. **State Management**: Evaluate if you need a state management solution (Zustand, Jotai) for complex simulation state.

Would you like me to elaborate on any specific part of this schematic or provide more detailed recommendations for a particular area of the codebase?
