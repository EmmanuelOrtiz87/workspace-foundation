---
created: 2026-06-10 12:54:33
tags: [engram, bugfix]
engram_id: 1381
type: bugfix
---

# Fixed LLM catch-block corruption in .ps1 files

**What**: Fixed 16 .ps1 files corrupted with LLM-generated catch-block pattern. The corruption inserted `catch { Write-Debug "Exception caught:` followed by the entire script content as an unterminated string with embedded `"` characters, breaking PowerShell parsing.

**Why**: An LLM (likely Claude/Cline) generated error handling for these scripts but produced malformed catch blocks with unbounded string literals.

**Where**: Multiple scripts under scripts/utilities/telemetry/TELEMETRY-METRICS/, scripts/utilities/workflow/WORKFLOW-ORCHESTRATION/, scripts/utilities/agents/, scripts/monitoring/, scripts/utilities/token/, scripts/utilities/setup/INSTALL/, scripts/utilities/reporting/DIGEST/, scripts/utilities/performance/PERFORMANCE-OPTIMIZATION/

**Learned**: The corruption was deep in git history (all recent commits), so git-restore alone wasn't sufficient. Fix required regex to strip the corrupt catch body while preserving the `catch { }` structure. The regex pattern: `catch\s*\{[^}]*Write-Debug\s+["']Exception caught:.*?\}` replacing with `catch { }` — but had to be applied iteratively since the unterminated string broke single-pass regex.

---
*Imported from Engram on 2026-09-06*
