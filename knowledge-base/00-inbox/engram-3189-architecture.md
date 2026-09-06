---
created: 2026-08-27 18:27:51
tags: [engram, architecture]
engram_id: 3189
type: architecture
---

# Unified Guardrail Orchestrator for autonomous resilience

**What**: Implemented a unified Guardrail Orchestrator (`src/guardrail-orchestrator.ts`) — a single entry point where the orchestrator (or any agent) asks "what should I do about this failure?" and gets a coherent decision + learning loop. Integrated into agent delegation via `delegateWithGuardrail()` in `src/agent-delegator.ts`.

**Why**: The user wanted the stack to be autonomous and resilient — able to detect failures, take corrective action, and continue without human intervention, learning from each incident. The stack had many powerful but DISPERSED guardrails (correction-rules-engine, resilience-handler, auto-escalation, anti-loop, safety-guardrails, self-mutation-guard, prompt-injection-guard, workload/token guards, circuit-breaker-v2, self-healing-db, session-close-guardian) but NO unified entry point.

**Where**:
- `src/guardrail-orchestrator.ts` — core framework: `classifyFailure()` (10 categories), `decideAction()` (6 actions), `evaluateFailure()` (primary API), `recordIncident()`, `resolveIncident()`, `getCategoryStats()`. State in `.session/guardrails/incidents.jsonl`.
- `src/agent-delegator.ts` — `delegateWithGuardrail()` wraps `delegateWithAntiLoop()`.
- `tests/unit/guardrail-orchestrator.test.ts` — 17 tests.

**Learned**:
- 10 failure categories: config, network, model, db, git, security, resource, reasoning, quality, unknown. Each maps to an action: retry, correct, escalate, isolate, continue, block.
- The orchestrator REUSES existing guardrails (delegates to them) instead of duplicating them.
- Learning loop: every incident is logged, `resolveIncident()` closes the loop after recovery, `getCategoryStats()` exposes resolve rate per category.
- State dir derived dynamically from process.cwd() (not module-load-time) for testability via chdir to temp dirs.
- Security and reasoning failures surface to user; network/model/git retry; config/db/quality correct; resource isolate; unknown continue.
- Documentation updated across 5 key docs: README, stack-manual-full, presentation-slides, STACK-DOCUMENTATION, academy-web.

---
*Imported from Engram on 2026-09-06*
