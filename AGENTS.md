# Andineering - Agent Guide

This document serves as a comprehensive guide for AI agents working on the **Andineering** project. It outlines the technical stack, architectural patterns, coding conventions, and workflows to ensure consistent and high-quality code generation.

## 1. Project Overview

**Andineering** is a full-stack web application designed to provide all-in-one agentic solutions. It features user management, organization dashboards, AI agent configuration, and inquiry tracking.

## 2. Technology Stack

### Core
- **Runtime & Manager**: [Bun](https://bun.sh) (v1.0+)
- **Framework**: [React Router v7](https://reactrouter.com)
- **Language**: [TypeScript](https://www.typescriptlang.org) (v5.0+)

### Frontend
- **UI Library**: [React 19](https://react.dev)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **Components**: [shadcn/ui](https://ui.shadcn.com) (Radix UI based)
- **Animations**: [Motion](https://motion.dev)
- **Forms**: [React Hook Form](https://react-hook-form.com) + [Zod](https://zod.dev)
- **Data Fetching**: [TanStack Query](https://tanstack.com/query) (via tRPC)

### Backend
- **API**: [tRPC](https://trpc.io) (End-to-end typesafe)
- **Database**: [PostgreSQL](https://www.postgresql.org)
- **ORM**: [Drizzle ORM](https://orm.drizzle.team)
- **Authentication**: [Better Auth](https://www.better-auth.com)
- **Email**: [React Email](https://react.email) + [Resend](https://resend.com)

### Testing
- **Unit/Integration**: [Vitest](https://vitest.dev)

## 3. Project Structure

The project follows a **feature-based architecture** to keep related code collocated.

```
kagentic-solution/
├── app/
│   ├── api/              # API routes (auth endpoints, tRPC handler)
│   ├── common/           # Shared resources used across multiple features
│   │   ├── components/   # Generic UI components (buttons, inputs, etc.)
│   │   └── pages/        # General pages (landing, 404, etc.)
│   ├── features/         # Domain-specific modules
│   │   ├── agents/       # Agent management logic & UI
│   │   ├── inquiries/    # Inquiry tracking logic & UI
│   │   ├── organizations/# Org & multi-tenancy logic & UI
│   │   └── users/        # User profile & settings logic & UI
│   ├── hooks/            # Global React hooks
│   ├── lib/              # Core utilities & configurations (auth, trpc, utils)
│   ├── sql/              # Database migrations & seeders
│   ├── routes.ts         # React Router configuration
│   ├── trpc-router.ts    # Root tRPC router
│   └── root.tsx          # Application root layout
├── public/               # Static assets
├── react-email-starter/  # Email templates workspace
└── package.json
```

## 4. Coding Conventions

### File Naming
- **Files**: Use `kebab-case` (e.g., `user-profile.tsx`, `auth-service.ts`).
- **Components**: Use `PascalCase` for component names inside files.
- **Utilities**: Use `camelCase` for function names.

### Component Structure
- **Colocation**: Keep components, hooks, and types related to a specific feature within that feature's directory.
- **Exports**: Prefer named exports over default exports for better refactoring support.
- **Server Components**: React Router v7 supports server-side logic. Use `loader` and `action` functions for server-side data handling where appropriate, but primarily rely on **tRPC** for client-server communication in this setup.

### Styling
- **Tailwind**: Use utility classes for styling.
- **cn()**: Use the `cn` utility (from `clsx` + `tailwind-merge`) for conditional class names.
- **Variables**: Use CSS variables defined in `app.css` for theming (colors, radius, etc.).

### State Management
- **Server State**: Use `tRPC` hooks (`useQuery`, `useMutation`) for server data.
- **URL State**: Use URL search params for shareable state (filters, pagination) via `useSearchParams`.
- **Local State**: Use `useState` or `useReducer` for transient UI state.
- **Global State**: Avoid global stores (Redux/Zustand) unless absolutely necessary. Prefer Context for compound components.

### Database & API
- **Schema**: Define database schemas in `app/features/<feature>/schema.ts`.
- **Routers**: Define tRPC routers in `app/features/<feature>/router.ts` (or similar) and merge them in `app/trpc-router.ts`.
- **Type Safety**: Always export and use inferred types from Zod schemas and tRPC outputs.

## 5. Workflows

### Development Server
Start the development server with hot reloading:
```bash
bun run dev
```

### Database Management
When modifying the database schema (Drizzle):
1. **Edit Schema**: Modify `schema.ts` files in `app/features/`.
2. **Generate Migration**:
   ```bash
   bun run db:generate
   ```
3. **Apply Migration**:
   ```bash
   bun run db:migrate
   ```

### Adding UI Components
To add a new component from shadcn/ui:
```bash
bun run add:ui [component-name]
# Example: bun run add:ui button
```

### Testing
Run tests to ensure stability:
```bash
bun run test       # Watch mode
bun run test:run   # Single run
bun run test:coverage # Coverage report
```

## 6. Key Configuration Files
- `vite.config.ts`: Vite configuration (plugins, aliases).
- `tsconfig.json`: TypeScript configuration.
- `drizzle.config.ts`: Drizzle Kit configuration.
- `react-router.config.ts`: React Router configuration.
- `tailwind.config.ts`: Tailwind CSS configuration (if present, or v4 CSS).

---
**Note**: Always check `package.json` for the latest dependencies and scripts.
