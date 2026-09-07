---
created: 2026-08-29 05:31:29
tags: [engram, architecture]
engram_id: 3225
type: architecture
---

# N6 cache telemetry + N5 profiles single-source (Fase 6)

**What**: N5 (profiles multi-tool fuente única) y N6 (cache con telemetría) completados.
**Why**: Plan Fase 6 — eliminar drift de tool-profiles duplicados y dar observabilidad al hit-rate del cache.
**Where**: N5: config/tool-profiles/profiles.yaml + src/orchestration/profiles-build.ts + npm profiles:build/check + job CI profiles-sync (commit 74cf9dde). N6: MigrationRunner 017_cache_telemetry, response-cache.ts (recordCacheTelemetry/getCacheTelemetry/isCacheHitRateBelow/sqliteTouch/sqliteEvictLru), dashboard-alerts cache_miss_rate habilitada, tests/unit/response-cache-telemetry.test.ts (commit ed33b55c).
**Learned**: (1) datetime('now') de SQLite tiene granularidad de SEGUNDO — para tests LRU hay que dormir ANTES del touch, no después. (2) El formato ISO 'T...Z' de los buckets ordena lexicográficamente DESPUÉS que el formato espacio 'YYYY-MM-DD HH:MM:SS' de datetime('now') — usar ISO explícito en tests de ordenamiento. (3) npx tsx -e falla silenciosamente con imports; usar script de archivo con ruta absoluta. (4) El guard CLI correcto es pathToFileURL(process.argv[1]).href, no el patrón file://${process.argv[1]}.

---
*Imported from Engram on 2026-09-06*
