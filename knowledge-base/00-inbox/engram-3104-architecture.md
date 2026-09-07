---
created: 2026-08-25 02:12:14
tags: [engram, architecture]
engram_id: 3104
type: architecture
---

# Dashboard RBAC v1 implemented

**What**: Implemented dashboard RBAC v1 end-to-end: session→principal binding at login (bootstrap: first principal = admin, later logins keep existing role or default viewer fail-closed), versioned policy (viewer<operator<admin; reads=viewer.read, mutations=operator.write, /api/admin/*=admin), admin API (GET/POST/PATCH role/DELETE/revoke-sessions under /api/admin/principals), CSRF double-submit on admin mutations, login rate limiting (429+Retry-After), lockout guards 409 (no self-role-change/self-delete/last-admin demote-delete), audit events in Nexus.
**Why**: P0 of NEXT-SESSION-PLAN-2026-08-25 — "administrar todo" was blocked by missing identity/RBAC layer.
**Where**: apps/web-dashboard/server/{rbac.ts NEW, login-rate-limiter.ts NEW, auth.ts (+productionMode getter), websocket-server.ts, database/repositories/{PrincipalRepo.ts NEW, AuthSessionRepo.ts, MigrationRunner.ts (014_rbac_session_binding)}, database/manager.ts}; tests/unit/{dashboard-rbac,dashboard-principal-repo}.test.ts; tests/e2e/dashboard-security.test.ts; docs/security/DASHBOARD-ADMIN-STATUS.md
**Learned**: (1) Root `npm run typecheck` does NOT cover apps/web-dashboard strictness — always run `cd apps/web-dashboard && npm run build` too (caught private `production` + `req.method` undefined). (2) CSRF double-submit needs BOTH cookies echoed by client + header. (3) E2E now uses isolated DB via GENTLE_VANGUARD_DB_DIR temp dir — direct SQLite manipulation safe for RBAC tests. (4) Migration 014 applied to operational DB (14 migrations, healthy).

---
*Imported from Engram on 2026-09-06*
