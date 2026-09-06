---
created: 2026-08-27 17:44:27
tags: [engram, architecture]
engram_id: 3187
type: architecture
---

# Anti-loop guardrail to prevent infinite agent retry loops

**What**: Implemented an anti-loop guardrail (`src/anti-loop-guard.ts`) that detects when an agent/subagent retries the SAME strategy against the SAME goal and fails repeatedly, preventing infinite loops with no resolution. Integrated into agent delegation via `delegateWithAntiLoop()` in `src/agent-delegator.ts`.

**Why**: The user experienced an infinite loop where the agent kept retrying an impossible npm override (image-size to 2.0.3 which doesn't exist) without changing strategy or escalating. The stack had post-hoc reflection (self-reflection-loop.ts) and component-failure escalation (auto-escalation.ts) but NO real-time guardrail for reasoning loops.

**Where**:
- `src/anti-loop-guard.ts` — core guardrail: `registerAttempt(goal, strategy, outcome)`, `detectLoop(goal)`, `getLoopStatus()`, `clearGoal()`. Persists to `.session/anti-loop/state.json`.
- `src/agent-delegator.ts` — `delegateWithAntiLoop()` wraps `delegate()`, checks `detectLoop()` before delegating and blocks with a clear verdict.
- `tests/unit/anti-loop-guard.test.ts` — 11 tests.

**Learned**:
- Escalation thresholds: 3 same-strategy failures → `change_strategy` (force different approach); 5+ → `escalate` (stop and surface options to user). A `success` outcome resets the counter.
- Strategy key = agent + task, so retrying the same task on the same agent counts as the same strategy.
- The guardrail reads `process.cwd()` dynamically per call (not module-load-time constants) so it's testable via chdir to temp dirs.
- This is the pattern to use for any future "agent stuck in loop" scenario: register attempts, detect repetition, force strategy change or escalate.

---
*Imported from Engram on 2026-09-06*
