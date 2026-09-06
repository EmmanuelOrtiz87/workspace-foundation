---
created: 2026-06-05 04:13:51
tags: [engram, architecture]
engram_id: 1339
type: architecture
---

# Completed pending revisions for v3.2.0 features

**What**: Fixed all pending integration issues from the 4 roadmap features implementation. Added npm scripts, fixed Dockerfiles, verified auto-update scripts work on Windows, converted integration tests to node:test.

**Where**:
- `package.json` — added scripts: update:check, update:run, docker:build, docker:test, test:integration, dashboard:build, dashboard:dev, dashboard:server
- `Dockerfile` (root) — fixed CMD to use compiled JS instead of pnpm dev, fixed multi-file COPY paths, proper monorepo build
- `apps/web-dashboard/Dockerfile` — fixed to use repo root as build context
- `apps/web-dashboard/server/marketplace-server-routes.ts` — rewritten from Express Router to raw `http` handler
- `tests/integration/api-health.test.ts` → `api-health.test.js` — converted from vitest to node:test + node:assert (Node 20 built-in)
- Deleted orphaned `tests/integration/api-health.test.ts`

**Verified**:
- `pnpm build:mcp` — compiles clean
- `pnpm build` (dashboard) — Vite build 2.86s, all chunks generated
- `pnpm exec tsc --noEmit` — 0 errors
- `node --test tests/unit/dashboard.spec.js` — 7/7 pass
- `gentle-vanguard.ps1 -Version` — outputs v3.2.0 (dynamic from VERSION file)
- `gentle-vanguard.ps1 -CheckVersion` — connects to GitHub API, reports UP_TO_DATE
- `check-version.ps1` — works on Windows, correct semver comparison

---
*Imported from Engram on 2026-09-06*
