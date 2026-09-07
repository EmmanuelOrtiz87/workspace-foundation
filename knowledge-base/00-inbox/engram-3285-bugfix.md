---
created: 2026-08-29 17:30:16
tags: [engram, bugfix]
engram_id: 3285
type: bugfix
---

# Dashboard auth E2E startup and session fix

**What**: Fixed `tests/e2e/dashboard-auth-flow.test.ts` startup diagnostics and authentication fixtures.
**Why**: The E2E server exited before `[WS] Server on port` because production tenant `test-tenant-auth` was not registered; the test discarded stderr, hiding the root cause. The runtime also intentionally rejects query-string tokens and authenticates WebSockets with session cookies.
**Where**: `tests/e2e/dashboard-auth-flow.test.ts`
**Learned**: Use registered `gentle-vanguard`, capture stdout/stderr in startup failures, log in over HTTP to obtain the session cookie, assert query-token rejection, and send the cookie in the WebSocket handshake; do not weaken runtime authentication.

---
*Imported from Engram on 2026-09-06*
