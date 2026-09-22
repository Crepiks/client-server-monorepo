# Monorepo Scaffold Implementation Plan

> Execute inline using the executing-plans and test-driven-development skills.

**Goal:** Deliver the requested stack with a working local development loop.

**Architecture:** npm workspaces contain a React/Vite frontend and NestJS API.
The API uses TypeORM to query PostgreSQL. Compose runs all services in watch mode.

**Tech Stack:** React, TypeScript, Vite, NestJS, TypeORM, PostgreSQL, Vitest, npm.

**Spec:** `docs/superpowers/specs/2026-09-22-monorepo-scaffold-design.md`

## Global constraints

- Node 22.12+ within Node 22; npm 10+; Docker Compose v2.
- No credentials in source; no automatic schema synchronization.
- 100% meaningful unit coverage, with documented bootstrap exclusions only.
- Task branch `feat/monorepo-scaffold`; no publishing or merging requested.

## Review focus

- Blank database credentials must fail startup clearly.
- Invalid, fractional, and out-of-range ports must fail validation.
- Database outages must return 503 without leaking connection details.
- Empty or malformed API responses must produce a useful frontend error.
- Container DNS, dependency volumes, startup readiness, and hot reload must work.

## Tasks

- [ ] Add workspace tooling, API configuration, and health behavior with tests.
      Config tests exercise missing credentials, port defaults and boundaries.
      Health tests use a fake database boundary to verify SQL and 503 responses.
      Run `npm test` and `npm run typecheck`; commit the API and workspace foundation.
- [ ] Add the React page and fetch boundary with tests for success, errors,
      invalid JSON, and invalid payloads. Run the tests before and after implementation.
      Add Compose, a development Dockerfile, Vite proxy, and README commands.
      Run `npm run check`, `docker compose config --quiet`, and the live stack.
      Capture the starter page for the README and commit the frontend/dev environment.
- [ ] Review the complete scaffold, resolve defects, and report verification.

## Execution decisions

The user authorized scaffolding this stack. Routine architecture choices and
local reversible verification proceed inline without additional approval gates.
Dependencies are checked against the npm registry before installation.
