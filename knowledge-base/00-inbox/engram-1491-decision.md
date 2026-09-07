---
created: 2026-07-08 03:42:32
tags: [engram, decision]
engram_id: 1491
type: decision
---

# Skills and subagents gap analysis for autonomy

**What**: Analyzed the stack for autonomy gaps. Identified 3 missing skills (maintenance, knowledge-base) and 2 missing subagents (maintenance-agent, knowledge-agent). Stack has 11 agents (orchestrator + 10 subagents) with auto-delegation routing, 3 skills (dashboard, live-traceability, validate-stack), 70+ session autostart pipeline steps. Auto-maintenance exists: weekly CI cron (scheduled.yml), engram-auto-compact, maintenance-watchtower autoheal, ML incremental embeddings. Gaps: no automated checkpoint pruning, no graphify cleanup, no event store archival. Recommended: create maintenance skill + maintenance-auto-prune pipeline step, create knowledge-base skill for vault access.

**Why**: The stack needs to be self-managing and autonomous. Without these additions, pruning and maintenance remain manual operations that can accumulate technical debt.

**Where**: opencode.json (agent definitions), .opencode/skills/ (skill definitions), config/session-autostart.config.json (pipeline steps), config/auto-delegation.json (routing mappings)

---
*Imported from Engram on 2026-09-06*
