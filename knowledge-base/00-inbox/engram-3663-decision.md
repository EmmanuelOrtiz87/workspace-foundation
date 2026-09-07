---
created: 2026-09-04 01:48:57
tags: [engram, decision]
engram_id: 3663
type: decision
---

# Auditoría optimizaciones nativas GV Analytics (cache/DB/tokens)

**What**: Auditoría de optimizaciones nativas de GV Analytics: tiene SQLite (reports, metrics, llm_cache), cache de respuestas LLM por hash, métricas por request, vault AES-256-GCM. Gaps: tokens capturados pero descartados (llm.ts nunca lee llmResult.usage), cache sin TTL ni prune, métricas sin UI (/api/metrics solo backend), y las 3 DB apuntan a la Nexus DB compartida del stack con resolución frágil por cwd (reports.ts/metrics.ts usan process.cwd()/../..), o sea la app NO es standalone en runtime aunque sí en packaging.

**Why**: El usuario preguntó si la app incorpora nativamente ahorro de tokens, cache, DB y optimizaciones del stack, y si debería tener sus cosas propias.

**Where**: apps/gv-analytics/server/reports.ts, metrics.ts, llm.ts (líneas 32-34, 100-147), llm-client.ts (usage líneas 211-237, 292-315), vault.ts, index.ts (recordMetric línea 381 sin metadata).

**Learned**: Propuesta: DB propia app-local resuelta desde file location + GVA_DB_PATH con migración one-time desde Nexus; tabla token ledger + widget Operación en UI; TTL 7 días + prune al boot; budget diario soft por env. Pendiente decisión del usuario.

---
*Imported from Engram on 2026-09-06*
