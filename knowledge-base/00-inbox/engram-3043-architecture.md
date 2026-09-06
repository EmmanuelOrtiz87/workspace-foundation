---
created: 2026-08-24 21:03:48
tags: [engram, architecture]
engram_id: 3043
type: architecture
---

# Dashboard opaque cookie authentication

**What**: Added server-side opaque cookie sessions with TTL, bootstrap-token login/status/logout endpoints, constant-time token validation, fail-closed protected routes, localhost-only explicit dev bypass warning, and cookie-authenticated WebSocket upgrades rejecting URL tokens.
**Why**: Harden the existing dashboard server auth boundary without tenant schema migration.
**Where**: apps/web-dashboard/server/auth.ts, apps/web-dashboard/server/websocket-server.ts, apps/web-dashboard/src/App.tsx, tests/unit/dashboard-auth.test.ts
**Learned**: Authentication is intentionally in-memory and process-local; configure GV_DASHBOARD_TOKEN in production, or explicitly set GV_DASHBOARD_DEV_AUTH=1 only for non-production localhost development. Existing workspace has unrelated dirty/generated changes and broad format-check failures.

---
*Imported from Engram on 2026-09-06*
