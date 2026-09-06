---
created: 2026-08-22 03:04:58
tags: [engram, decision]
engram_id: 2955
type: decision
---

# Sesión 2026-08-22: ghost runs resueltos, sync público OK, 5 fallos reales en cola

**What**: Estado final de la sesión 2026-08-22: (1) Ghost runs CI RESUELTOS — Push Checks corre los 24 jobs de los 5 reusables; quedan 5 fallos de EJECUCIÓN real por atender: test/Integration Tests, lint/Markdown Lint, lint/Format Check, security/Container Scan SBOM (gate --fail-on high by-design), security/Dependency Scan (exit-code:1 en HIGH,CRITICAL by-design). (2) Sync público ejecutado vía src/sync-to-public.ts (develop+main) — workaround funcional mientras el PAT del workflow siga expirado. Commits clave: d54a409f (windowsHide UX), 1dd335b3/e97d9c79/bc52070a (bisect), be3543bd (fix raíz citando nombre de step).
**Why**: Cierre del frente ghost-runs y documentación de la nueva cola de trabajo real que surfaceó al correr por primera vez los workflows.
**Where**: .github/workflows/*, reports/delegation-validation-report.md no tocado; sync público en C:\Workspace_local\gentle-vanguard-public
**Learned**: Los fallos de ejecución son hallazgos legítimos nuevos (los workflows nunca habían corrido). Pendiente usuario: regenerar PAT (scopes repo+workflow) para el workflow Sync Public Repository, y habilitar facturación GitHub Actions para desbloquear release v3.8.2. Mejora pendiente del stack: integrar parse js-yaml estricto en workflow-lint.ts para detectar la clase ": " en escalares planos.

---
*Imported from Engram on 2026-09-06*
