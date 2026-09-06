---
created: 2026-08-30 05:23:23
tags: [engram, decision]
engram_id: 3412
type: decision
---

# Stack state: integration branch 81 commits ahead of main

**What**: The `integration/gv-stack-normalization` branch is 81 commits AHEAD of `origin/main` (only 3 behind). It contains substantial unmerged work: F2.2 (file reorganization into domains), F2.5 (module splits), Fase 6 (watchtower, profiles, cache, pre-push gate), content-os (ADR-0021 native CMS), and the new `src/delivery/` orchestrator (ADR-0022, commit 82d42b21).
**Why**: This is a large integration branch accumulating work that has not yet been promoted to main. The delivery module is NET-NEW (created in 82d42b21), NOT a regression — there was no prior delivery orchestrator that got lost.
**Where**: git branch `integration/gv-stack-normalization`; main at 4466062e (PR #170 Vite/Vitest/sharp).
**Learned**: The delivery module (ADR-0022) is a new capability to consolidate review/gates/PR/merge/release into one authority. It was created because the existing gates (lefthook, prepush-gate, static-gates, security scan) were disconnected — no single required check in the ruleset. This is additive, not a loss of functionality.

---
*Imported from Engram on 2026-09-06*
