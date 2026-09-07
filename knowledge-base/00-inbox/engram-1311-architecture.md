---
created: 2026-06-03 11:46:45
tags: [engram, architecture]
engram_id: 1311
type: architecture
---

# Phase 1 automation completada — v2.31.0 preview

**What**: Phase 1 automation implemented: Secretlint pre-commit, Pester CodeCoverage CI, Prettier CI + lefthook, Branch strategy docs
**Why**: Automate quality gates and document branching conventions
**Where**: package.json (secretlint devDeps + script), .lefthook.yml (secretlint + format-check hooks), .github/workflows/coverage.yml (pester-coverage job), .github/workflows/format-check.yml (pnpm migration), .prettierignore (pnpm-lock.yaml), docs/BRANCH-STRATEGY.md
**Learned**: Secretlint v9 no soporta `-f compact`; hooks deben pasar {staged_files} directamente sin glob para evitar escanear archivos gitignored; robocopy mucho más rápido que Get-ChildItem -Recurse para 21K+ archivos; pre-commit hooks bloquean el commit si secretlint encuentra tokens reales en archivos no gitignored

---
*Imported from Engram on 2026-09-06*
