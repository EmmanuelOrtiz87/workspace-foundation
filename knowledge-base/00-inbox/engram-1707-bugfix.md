---
created: 2026-07-17 00:04:19
tags: [engram, bugfix]
engram_id: 1707
type: bugfix
---

# Integration test port fix

**What**: Fixed integration tests to dynamically read WS_PORT env var instead of hardcoding port 8080
**Why**: Tests failed with ECONNREFUSED because WS server was on port 8090 but tests always tried 8080
**Where**: tests/integration/api-health.test.js — lines 4-5
**Learned**: Both WS_PORT and VITE_DEV_PORT env vars are now checked as fallbacks. Tests can also be overridden via API_BASE_URL and WS_URL for full flexibility.

---
*Imported from Engram on 2026-09-06*
