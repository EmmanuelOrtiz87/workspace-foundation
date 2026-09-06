---
created: 2026-08-29 21:04:32
tags: [engram, bugfix]
engram_id: 3331
type: bugfix
---

# Migración TS-only y corrección VBS

**What**: Se corrigió el launcher VBS de Watchtower y se completó la migración de scripts/test activos de PowerShell a TypeScript/CMD-first.
**Why**: El VBS tenía quoting inválido y provocaba error Microsoft VBScript 800A0401; PowerShell generaba incompatibilidades y coste operativo.
**Where**: `src/infrastructure/bootstrap.ts`, `src/ops/watchtower-autoheal-autostart.ts`, `src/content-operations/export-kit.ts`, `src/web/witr-installer.ts`, `src/cli/presentations-maintenance.ts`, `src/cli/setup-branch-protection.ts`, `src/cli/fix-kilocode-bedrock.ts`, tests y workflows.
**Learned**: El VBS válido usa `wscript` oculto y `node.exe --import tsx`, sin PowerShell. No quedan `.ps1` físicos activos en el repositorio; los históricos `.archive` y `.ps1.enc` quedan fuera del runtime y documentados. `phase-integration`, smoke tests y scripts smoke fueron migrados a TS. Tests raíz ahora 6 suites PASS, typecheck/lint/workflow lint/presentaciones 24/24 PASS.

---
*Imported from Engram on 2026-09-06*
