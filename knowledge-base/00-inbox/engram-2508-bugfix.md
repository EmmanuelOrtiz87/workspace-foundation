---
created: 2026-08-04 14:45:40
tags: [engram, bugfix]
engram_id: 2508
type: bugfix
---

# Root cause: subagent step limit was 6

**What**: Diagnosed why subagents exhausted steps without completing work. ALL subagents had `steps: 6` (only 6 tool calls per invocation) in both opencode.json and .opencode/agents/*.md. The orchestrator had `steps: 12`.
**Why**: Delegated large tasks (20+ references) to agents with a 6-step budget. An agent that must explore (3-8 reads) + edit (10-20 edits) + verify (typecheck) needs 30-50 steps. With 6, it died during exploration.
**Where**: opencode.json, .opencode/agents/*.md (all 20 agent files).
**Learned**: This was NOT a prompt or cache issue — it was an overly aggressive config limit. Fixed by raising steps per role: sdd-apply=40, sdd-explore/design/verify=30, sia=35, orchestrator=24, doc/ops/gov/premortem/maintenance/gitflow/self-diag=30, session/knowledge=25, business agents=20. The adaptive-steps.ts tool now automates this scaling.

---
*Imported from Engram on 2026-09-06*
