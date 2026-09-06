---
created: 2026-08-29 17:35:53
tags: [engram, bugfix]
engram_id: 3292
type: bugfix
---

# Deterministic invalid WebSocket token E2E

**What**: Changed the invalid-token dashboard WebSocket E2E assertion to wait for the HTTP `unexpected-response` and require status 401.
**Why**: The server rejects invalid handshake authentication before upgrade; waiting for `close`/`error` with a timeout raced the client state and could pass or fail nondeterministically.
**Where**: tests/e2e/dashboard-auth-flow.test.ts; server behavior confirmed in apps/web-dashboard/server/websocket-server.ts.
**Learned**: The server writes `401 Unauthorized`, `Connection: close`, then destroys the socket. Authentication remains strict and no server change is needed.

---
*Imported from Engram on 2026-09-06*
