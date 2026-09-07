---
created: 2026-08-24 21:38:53
tags: [engram, pattern]
engram_id: 3058
type: pattern
---

# Dashboard security E2E harness

**What**: Added an isolated dashboard E2E test that spawns the real server with a production token and random port, covering HTTP session login/logout/protected route behavior and WebSocket handshake rejection/acceptance.
**Why**: Existing dashboard tests were auth unit tests plus an external-port smoke suite; no deterministic auth or WS security E2E existed.
**Where**: tests/e2e/dashboard-security.test.ts
**Learned**: Tenant authorization remains an explicit TODO because the server accepts arbitrary tenantId query values and has no identity-to-tenant policy/contract; do not invent authorization semantics in tests.

---
*Imported from Engram on 2026-09-06*
