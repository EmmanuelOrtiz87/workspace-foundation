---
created: 2026-08-29 21:22:47
tags: [engram, bugfix]
engram_id: 3336
type: bugfix
---

# Cierre de gaps PS1 activos

**What**: Corregí referencias runtime obsoletas de PS1 a rutas TS, eliminé hooks sin equivalencia del registro, corregí workflows y desactivé la escritura de perfiles PowerShell en setup.
**Why**: Cerrar los gaps activos reportados por audit-ps1-refs sin tocar historial, protected enc ni archives, manteniendo TS-only/CMD-first.
**Where**: src/orchestration/profiles-build.ts, src/ops/setup-complete.ts, src/orchestration/sia-orchestrator.ts, src/tools/audit-ps1-refs.ts, src/tools/auto-ps1-fixer*.ts, scripts/utilities/CONFIG/session-autostart.config.json, scripts/utilities/workflow/WORKFLOW-ORCHESTRATION/hook-registry.json, .github/workflows/sync-public.yml, .github/workflows/reusable-release.yml.
**Learned**: La auditoría debía normalizar rutas relativas en Windows para excluir inventarios de migración. Resultado final: 0 referencias funcionales a PS1 inexistentes; 22 referencias legacy/inventory conservadas como datos de mantenimiento. SIA ahora solo acepta y genera targets .ts.

---
*Imported from Engram on 2026-09-06*
