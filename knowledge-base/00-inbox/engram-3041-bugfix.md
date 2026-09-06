---
created: 2026-08-24 20:58:13
tags: [engram, bugfix]
engram_id: 3041
type: bugfix
---

# Dashboard WebSocket resource hardening

**What**: Added bounded JSON body reading for key dashboard POST routes, WebSocket maxPayload and explicit message-size rejection, safe send backpressure handling, and HTTP server timeout defaults.
**Why**: Reduce memory/connection exhaustion risk without changing authentication, tenancy, or route behavior.
**Where**: apps/web-dashboard/server/websocket-server.ts
**Learned**: Existing dashboard tests are frontend-only; server hardening was verified through root typecheck and dashboard build rather than dedicated server tests.

---
*Imported from Engram on 2026-09-06*
