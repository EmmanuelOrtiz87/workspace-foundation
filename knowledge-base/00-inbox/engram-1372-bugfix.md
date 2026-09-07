---
created: 2026-06-09 03:38:41
tags: [engram, bugfix]
engram_id: 1372
type: bugfix
---

# Repaired event-bus.ps1 and export-metrics.ps1 template corruption

**What**: Repaired two massively corrupted PowerShell scripts by collapsing template-generated code duplication.

**Why**: Both files had the same template corruption as team-mode.ps1 — $_ in catch blocks was expanded by a template engine, injecting param blocks and creating 60-120x file content duplication.

**Where**:
- scripts/utilities/workflow/WORKFLOW-ORCHESTRATION/event-bus.ps1: 84,423→486 lines, 880→0 parse errors
- scripts/utilities/telemetry/TELEMETRY-METRICS/export-metrics.ps1: 32,163→184 lines, 2004→0 parse errors

**Learned**: The corruption had TWO levels: (1) $_ in catch blocks expanded to param(..) within the first copy itself, (2) the corrupted first copy was then duplicated 60-120x by a loop. Total ~116K lines of corruption removed across 5 repaired scripts. 51 scripts still exceed the new 500-line BLOCKING limit — many likely have similar corruption (top entries: context-analyzer.ps1 41K, executive-dashboard.ps1 27K, update-tools.ps1 23K).

---
*Imported from Engram on 2026-09-06*
