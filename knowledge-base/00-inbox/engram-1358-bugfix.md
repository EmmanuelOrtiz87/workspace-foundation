---
created: 2026-06-08 01:37:45
tags: [engram, bugfix]
engram_id: 1358
type: bugfix
---

# Replaced corrupted dashboard-render.ps1

**What**: Replaced corrupted 7K-line dashboard-render.ps1 (repetitive CSS-in-catch-blocks) with clean ~130-line functional script

**Why**: Original file had severe content corruption with CSS embedded in catch blocks and repetitive copies of param/function blocks

**Where**: scripts/metrics/dashboard-render.ps1

**Learned**: Script reads git.json, sessions.json, token.json, cost.json from .runtime/metrics/; avoids crashes with graceful "No data" handling; uses $_.Exception.Message per requirement

---
*Imported from Engram on 2026-09-06*
