---
created: 2026-08-04 14:45:37
tags: [engram, architecture]
engram_id: 2507
type: architecture
---

# Adaptive steps auto-scaling bridge

**What**: Created `src/adaptive-steps.ts` — auto-scales the `steps` budget for orchestrator and subagents based on task complexity, so agents never block on insufficient step limits. Also created `src/recommend-agent.ts` — the bridge that lets the orchestrator consult the adaptive routing table for automatic agent reassignment.
**Why**: Subagents kept exhausting their step budget during exploration before making edits. Root cause was `steps: 6` in all agent configs — far too low for explore+edit+verify workflows.
**Where**: src/adaptive-steps.ts, src/recommend-agent.ts, opencode.json, .opencode/agents/*.md, config/session-autostart.config.json (step `adaptive-steps`, index after adaptive-router, 104 steps total), package.json (steps:status, steps:estimate, recommend:agent).
**Learned**: Steps must be integers (Math.round). The `--auto` mode estimates from complexity signals (files/refactor/explore/test/config/doc keywords + file-count heuristic) and writes to both opencode.json and .opencode/agents/*.md. `--resume <agent> --task_id <id>` bumps limit +20 for reactive re-dispatch. Baseline steps: sdd-apply=40, sdd-explore/design/verify=30, sia=35, orchestrator=24, business agents=20.

---
*Imported from Engram on 2026-09-06*
