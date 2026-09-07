---
created: 2026-09-06 22:32:33
tags: [engram, architecture]
engram_id: 3741
type: architecture
---

# Auto-heal de rutas de scripts en pipeline

**What**: Nuevo módulo `src/core/script-path-heal.ts` (puro, unit-testable) que implementa auto-heal de rutas de scripts en configs del pipeline: `indexScriptPaths` (basename→ruta relativa bajo src/, depth 8, separadores `/`), `resolveScriptPath` (fallback por basename), `healStepScriptPaths` (parchea in-memory + persiste corrección en config con backup `.bak` + reporta no-resolubles a `.runtime/autostart-missing-scripts.json`). `src/core/session-autostart.ts` lo consume vía wrapper delgado (cache del índice + audit event `config.autoheal`).
**Why**: Las migraciones TS movieron scripts a carpetas de dominio (src/knowledge/, src/ops/) pero los configs quedaron con rutas top-level `src/<name>.ts` rotas → 3 WARNs en cada arranque + pasos lazy nunca ejecutados (knowledge-base-init, engram-auto-reindex, engram-auto-update). Objetivo del usuario: arranque sin warnings/gaps y auto-mejora del stack.
**Where**: src/core/script-path-heal.ts (nuevo), src/core/session-autostart.ts (refactor: import healScriptPathsCore/resolveScriptPathCore/indexScriptPaths), config/session-autostart.config.json (3 rutas corregidas a src/knowledge/), docs/product/ROADMAP.md + docs/status/STACK-STATUS-REPORT.md + src/knowledge/engram-auto-update.ts (docs de ruta).
**Learned**: El heal es idempotente y durable: al persistir la corrección en el config, la siguiente sesión no re-llama al heal (evita "WARN de auto-mejora" repetido). Watchtower ahora monitorea el report con `checkMissingScripts` (componente configs). Tests unitarios en tests/unit/script-path-heal.test.ts (11 casos, sandbox fs temporal).

---
*Imported from Engram on 2026-09-07*
