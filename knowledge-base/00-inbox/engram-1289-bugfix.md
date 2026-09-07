---
created: 2026-06-02 15:03:16
tags: [engram, bugfix]
engram_id: 1289
type: bugfix
---

# Engram RAG query script fixed and working

**What**: Fixed `Get-Sim` function in engram-rag-query.ps1 — replaced bare `DF` (treated as command name) with `$DF.PSObject.Properties` enumeration for magnitude computation
**Why**: `DF` without `$` in PowerShell function body is treated as an unquoted command invocation, not a variable reference, causing "DF is not recognized" errors
**Where**: scripts/utilities/ENGRAM-RAG/engram-rag-query.ps1 — Get-Sim function
**Learned**: PSCustomObject property enumeration should use `$obj.PSObject.Properties` rather than `$obj | Get-Member -MemberType NoteProperty` for performance and correctness. Query runs in 11.2s for 1,288 docs × 7,314 terms. Console encoding mangles non-ASCII chars on display (affects display only).

---
*Imported from Engram on 2026-09-06*
