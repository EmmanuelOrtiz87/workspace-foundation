---
created: 2026-08-31 04:14:00
tags: [engram, bugfix]
engram_id: 3456
type: bugfix
---

# Half-open circuit breaker concurrency fix

**What**: Updated circuit-breaker-v2 half-open accounting and strengthened the concurrent-capacity test with an immediate fallback timeout; delivery gate now blocks on scanner evidence/vulnerabilities but degrades only for an explicit no-toolchain/no-SBOM result.
**Why**: The second half-open call must not wait for the first operation, and degraded CI evidence must not hide vulnerability findings.
**Where**: src/resilience/circuit-breaker-v2.ts, tests/unit/circuit-breaker-v2.test.ts, src/delivery/gate.ts, src/delivery/types.ts
**Learned**: Half-open capacity must track in-flight reservations and release on completion; a non-blocking gate failure needs explicit degraded classification or it can be reported as PASS incorrectly. Checks passed and amended commit ea247770 was force-pushed with lease; unrelated pre-existing dirty files remain uncommitted.

---
*Imported from Engram on 2026-09-06*
