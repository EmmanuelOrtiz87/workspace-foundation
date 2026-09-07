---
created: 2026-05-26 02:48:27
tags: [engram, bugfix]
engram_id: 1143
type: bugfix
---

# Homologate regex fix - skip code blocks for link detection

**What**: Fixed `homologate-workspace.ps1` regex to strip fenced code blocks before scanning markdown links. Also fixed `[bool](Get-Command pwsh...)` pattern that trigged false positive.
**Why**: The regex `\[([^\]]+)\]\(([^)#][^)]*)\)` matched PowerShell `[bool](Get-Command pwsh ...)` as a markdown link, producing false broken-link report.
**Where**: `scripts/validation/homologate-workspace.ps1:274` — added `[regex]::Replace(content, '(?ms)^```[\s\S]*?^```\s*$', '')` before link matching.
**Learned**: Always strip code blocks before link scanning in markdown. The `[type](expr)` pattern in PowerShell (cast syntax) is indistinguishable from markdown links without block awareness.

---
*Imported from Engram on 2026-09-06*
