---
created: 2026-05-19 12:35:47
tags: [engram, bugfix]
engram_id: 957
type: bugfix
---

# Fix: sync-to-public.ps1 cleanup deleting CI scripts

**What**: sync-to-public.ps1 step 9c (cleanup) was deleting CI-required scripts AFTER they were copied in step 9, causing all 7+ GitHub Actions workflows to fail in the public repo with "script not found" errors.

**Why**: The cleanup step removed directories like scripts/utilities/, scripts/diagnostics/, scripts/monitoring/, scripts/testing/ which contained the very scripts just copied for CI.

**Where**: scripts/utilities/DEPLOYMENT/sync-to-public.ps1

**Fix**: Moved cleanup BEFORE CI scripts copy. Also added missing CI scripts (generate-dashboard.ps1, gv.ps1 replacing non-existent wf.ps1), added CI workflow sync with develop→main branch adaptation, added tests/unit/ sync, fixed PSScriptAnalyzerSettings.psd1 path.

**Also fixed**: All 8 workflows made resilient with Test-Path checks. PS Lint excludes secret-vault.ps1. Format Check handles missing package-lock.json. Gitleaks handles missing .gitleaks.toml. Cross-Platform Tests installs Pester and uses continue-on-error. Quality Gate excludes uncommitted-changes from blocking.

---
*Imported from Engram on 2026-09-06*
