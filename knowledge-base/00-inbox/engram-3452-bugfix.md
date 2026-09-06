---
created: 2026-08-31 03:56:44
tags: [engram, bugfix]
engram_id: 3452
type: bugfix
---

# Circuit breaker test isolation fixes

**What**: Made circuit-breaker-v2 resolve GV_CIRCUIT_BREAKER_STATE_FILE on every state load/save, made the process-hygiene websocket pidfile fixture portable, and restored the circuit-breaker test's environment variable with guaranteed temp-directory cleanup.
**Why**: Fix remaining run 33354971673 races and cross-platform fixture mismatch.
**Where**: src/resilience/circuit-breaker-v2.ts, tests/unit/process-hygiene.test.ts, tests/unit/circuit-breaker-v2.test.ts
**Learned**: The targeted circuit-breaker/process-hygiene tests pass; full test and coverage commands remain blocked by unrelated pre-existing failures (anti-loop EPERM during full test; session-lifecycle MCP skill server build failure during coverage), so amend/push was intentionally not performed.

---
*Imported from Engram on 2026-09-06*
