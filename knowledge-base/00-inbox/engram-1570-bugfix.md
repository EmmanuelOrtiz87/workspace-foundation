---
created: 2026-07-12 05:34:46
tags: [engram, bugfix]
engram_id: 1570
type: bugfix
---

# Repaired corrupted PS1 cascading duplications

**What**: Fixed cascading duplication corruption in skill-recommender.ps1 (2331→155 lines), digest-generator.ps1 (15573→183 lines), token-usage-notifier.ps1 splatting bug, invoke-document-analysis.ps1 mandatory param issue, and deprecated gv.ps1

**Why**: PowerShell catch blocks with `Write-Debug "Exception caught: <#` or `param(` embedded the entire file as an unreleased string literal, causing fractal duplication (82 copies of param blocks). The token-usage-notifier used `@args_` splatting which broke ValidateSet on the target script. invoke-document-analysis.ps1 had mandatory DocumentPath but was called without args from session-autostart.

**Where**: skill-recommender.ps1, digest-generator.ps1, token-usage-notifier.ps1, invoke-document-analysis.ps1, gv.ps1

**Learned**: PowerShell string literals can span multiple lines — `catch { Write-Debug "Exception caught: <#` starts a string that never closes, swallowing everything until the next `"`. This creates cascading duplication. Always use `Write-Debug "Exception caught: $_"` in catch blocks. Splatting `@args` with string arrays can cause ValidateSet mismatches — use direct invocation instead. Files with 7000+ lines and 840+ PS1 refs should be deprecated, not repaired.

---
*Imported from Engram on 2026-09-06*
