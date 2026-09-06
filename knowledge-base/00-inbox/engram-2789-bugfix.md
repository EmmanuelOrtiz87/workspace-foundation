---
created: 2026-08-13 04:41:17
tags: [engram, bugfix]
engram_id: 2789
type: bugfix
---

# ⚠️ CRÍTICO DUPLICADOS DETECTADOS Y LIMPIADOS - Cache corregido

**What**: Se detectaron y eliminaron procesos duplicados manualmente

**Detección**:
- codegraph-mcp-server-start.ts: 3 instancias → 1
- core/timeout-monitor.ts: 3 instancias → 1
- multitenant/ci-rollback-engine.ts: 3 instancias → 1
- token-ingest.ts: 3 instancias → 1

**Total**: 17 procesos → 9 procesos → 4 procesos (limpio)

**Problema**: El mecanismo DEDUPE existe pero NO está funcionando correctamente en algunos casos

**Ubicación del código DEDUPE**:
- src/core/session-autostart.ts líneas 340-343
- src/core/session-autostart.ts línea 140 (lock file)

**Acción inmediata**: Limpiados 8 procesos duplicados manualmente

**Recomendación**: Investigar por qué DEDUPE no detectó estos duplicados

---
*Imported from Engram on 2026-09-06*
