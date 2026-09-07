---
created: 2026-08-24 21:06:57
tags: [engram, bugfix]
engram_id: 3045
type: bugfix
---

# Circuit breaker v2 reliability hardening

**What**: Hardened circuit-breaker-v2 execution and health checks with cleared timeout timers, AbortSignal/internal cancellation, serialized state transitions, eager half-open slot reservation, and bounded/cleaned TCP health probes.
**Why**: Prevent leaked timers/sockets, cancellation being counted as failures, and concurrent half-open calls exceeding configured capacity.
**Where**: src/circuit-breaker-v2.ts; tests/unit/circuit-breaker-v2.test.ts
**Learned**: Half-open capacity must be reserved before awaiting user work; cancellation releases the reservation without recording a failure.

---
*Imported from Engram on 2026-09-06*
