---
created: 2026-08-24 21:57:01
tags: [engram, architecture]
engram_id: 3068
type: architecture
---

# Persistent dashboard auth sessions

**What**: Integrated dashboard cookie auth with a SQLite-backed AuthSessionRepo exposed by DatabaseManager; sessions store SHA-256 hashes in isolated `dashboard_auth_sessions_persistent` table via migration `010_dashboard_auth_sessions`, avoiding collision with the existing tenant migration's `dashboard_auth_sessions` schema.
**Why**: Preserve opaque TTL sessions across server/DatabaseManager restarts while retaining fail-closed behavior and revocation.
**Where**: apps/web-dashboard/server/auth.ts, apps/web-dashboard/server/database/repositories/AuthSessionRepo.ts, apps/web-dashboard/server/database/repositories/MigrationRunner.ts, apps/web-dashboard/server/database/manager.ts, apps/web-dashboard/server/websocket-server.ts, tests/unit/dashboard-auth.test.ts
**Learned**: Tenant migration already owns `dashboard_auth_sessions`; the auth persistence table must remain separately named. Auth repository failures return unauthenticated/failed login rather than bypassing protection. Focused auth, database reliability, typecheck, lint, and changed-file Prettier checks pass; repository-wide format check still reports pre-existing violations in unrelated files.

---
*Imported from Engram on 2026-09-06*
