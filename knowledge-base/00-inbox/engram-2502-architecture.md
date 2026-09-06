---
created: 2026-08-04 12:20:53
tags: [engram, architecture]
engram_id: 2502
type: architecture
---

# Telemetría de tokens completa implementada

**What**: Implementación completa de telemetría de tokens end-to-end: banner de inicio, resumen de cierre segmentado, comando a demanda, registro por mensaje garantizado en Nexus, y fix del bug de cierre.
**Why**: El usuario pidió poder medir y notificar tokens consumidos al inicio/cierre/a demanda del stack, segmentado por input/output/total, consistente con el dashboard.
**Where**: src/token-session-banner.ts (NUEVO), src/token-status.ts (NUEVO), src/message-token-logger.ts (NUEVO), src/token-metrics-store.ts (acción 'close' añadida + fix anti-contaminación), src/session-close-orchestrator.ts (panel SESSION TOKEN SUMMARY en fase 2.4), src/token-usage-auto.ts (import directo de recordMessage), package.json (token:status, token:status:json, token:banner), config/session-autostart.config.json (step token-session-banner tras token-notification-init).
**Learned**:
- Fix anti-contaminación: la acción 'close' solo escribe session-current.json si el session-id coincide con la sesión actual. Verificado: cerrar sesión histórica ya no contamina la actual.
- spawnSync('npx.cmd') sin shell:true NO ejecuta el script en Windows — la solución robusta es import directo de la función (export recordMessage).
- BUG corregido en token-status.ts: queryNexus no pasaba parámetros a db.prepare().get(), por lo que la consulta de sesión con '?' fallaba silenciosamente y mostraba 0. Se añadió params: unknown[] = [].
- Las pruebas de token-usage-auto insertaron datos de prueba en token_usage/events de la sesión (test-message, tool:bash, tool:edit) — considerar limpiar.
- El banner/status/close ahora son consistentes: los tres leen de Nexus (token_usage) como fuente de verdad.
- typecheck/lint: los errores reportados son PREEXISTENTES en src/profiler/*, smoke-tests.ts, ast-import-parser.ts, session-close-validator.ts — no en mis archivos nuevos.

---
*Imported from Engram on 2026-09-06*
