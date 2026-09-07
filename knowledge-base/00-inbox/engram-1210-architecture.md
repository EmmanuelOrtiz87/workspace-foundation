---
created: 2026-05-29 04:40:42
tags: [engram, architecture]
engram_id: 1210
type: architecture
---

# Session Summary Reference System

**What**: Implemented Session Summary Reference System at scripts/utilities/SESSION/session-reference-system.ps1 with 4 modes: index (scans .session/context-log/ + .local/session-artifacts/), query (search by keyword), guide (generates NEXT_SESSION_GUIDE.md), status (shows stats). Creates cross-references between sessions within 48h gap. Index saved to .session/session-reference-index.json.

**Why**: Previous session summaries were isolated files with no cross-referencing. This system links related sessions and provides continuity context via NEXT_SESSION_GUIDE.md for the next session.

**Where**: scripts/utilities/SESSION/session-reference-system.ps1, .session/session-reference-index.json, NEXT_SESSION_GUIDE.md

**Learned**: PowerShell here-strings with double-quote subexpressions containing quotes themselves need careful escaping. Removed inner quotes around $repoRoot in subexpressions to fix parsing.

---
*Imported from Engram on 2026-09-06*
