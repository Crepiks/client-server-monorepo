# Monorepo scaffold

Provide a small, working starter for React, TypeScript, Vite, NestJS, TypeORM,
and PostgreSQL. npm workspaces keep dependencies and commands in one repository
without another task orchestration framework.

- `apps/web`: a responsive status page with a manual connection check. It requests
  `/api/health` through Vite's proxy and reports pending, success, and failure.
- `apps/api`: NestJS with `/api/health`. A TypeORM query checks PostgreSQL;
  outages return HTTP 503 with a generic public error, never connection details.
- Database configuration validates required credentials and port ranges, disables
  schema synchronization, and supports TypeORM's migration CLI. No product tables
  or business domain are invented for this scaffold.
- Docker Compose runs PostgreSQL, API watch mode, and Vite with source mounts.
  Database data persists in a named volume; published ports bind to localhost.
  A database-only Compose command supports host-based Node development.
- Node 22.12+ within Node 22, npm 10+, and Docker Compose v2 are required.
- Environment variables are documented in `.env.example`; `.env` stays ignored.
- Unit tests enforce 100% per-file line, branch, function, and statement coverage
  for application behavior. Only documented bootstrap files are excluded.
- README instructions cover setup, architecture, commands, migrations, and errors.

Verification includes unit tests, type checking, production builds, formatting,
Compose validation, and a live browser → API → PostgreSQL smoke test.
