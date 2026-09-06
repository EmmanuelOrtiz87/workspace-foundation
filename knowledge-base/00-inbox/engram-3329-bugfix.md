---
created: 2026-08-29 21:03:46
tags: [engram, bugfix]
engram_id: 3329
type: bugfix
---

# Deterministic secret scanner test isolation

**What**: Separated `tests/unit/secret-scanner.test.ts` into its own runner suite and passed the remaining direct unit test files explicitly, preventing shared process state from affecting the secret scanner while retaining parallel execution for unrelated suites. Awaited HTTP server shutdown and added exit code, signal, and child spawn-error diagnostics.
**Why**: Full `npm test` had intermittently reported 518/519 while the focused secret scanner suite passed 31/31; shared in-process unit execution allowed cwd/env/process cleanup interactions.
**Where**: `src/review/test-runner-optimized.ts`, `tests/unit/secret-scanner.test.ts`
**Learned**: Secret scanner temp paths were already unique and the URL test used an ephemeral port; the risky boundary was the shared Node test process, not a fixed port or shared temp directory. Verified six runner suites pass three consecutive times after isolation.

---
*Imported from Engram on 2026-09-06*
