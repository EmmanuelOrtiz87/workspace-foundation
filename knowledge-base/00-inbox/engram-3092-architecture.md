---
created: 2026-08-25 00:43:57
tags: [engram, architecture]
engram_id: 3092
type: architecture
---

# Docs authority cleanup

**What**: Updated active documentation to define Nexus as the operational authority for tenant-scoped feedback and token aggregates, tool JSONL rollouts as raw usage authority, and `.session/session-current.json` as lifecycle marker authority.
**Why**: Remove confirmed stale JSON path guidance safely without deleting historical or compatibility files.
**Where**: `.opencode/skills/dashboard/references/{architecture,common-tasks}.md`, `QUICK-START.md`, `docs/dashboard/DASHBOARD.md`, `docs/sdd/v6.7-knowledge-layer-sdd.md`, `docs/stack-manual-full.md`, `rules/NORMATIVAS-{ARCHITECTURE,CODE-QUALITY,OPS-DEVOPS,WORKFLOW}.md`.
**Learned**: `.runtime/metrics/feedback.json`, `.session/feedback/*.json`, `.session/.active-session.json`, and `.session/token-usage.json` must be described as historical/compatibility or derived paths, not active authorities. Content validation and a focused local Markdown link check passed; repository-wide Prettier already reports unrelated/pre-existing issues in some touched large docs.

---
*Imported from Engram on 2026-09-06*
