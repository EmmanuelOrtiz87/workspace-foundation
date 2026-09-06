---
created: 2026-08-23 21:02:17
tags: [engram, bugfix]
engram_id: 2979
type: bugfix
---

# Puente telemetría-Nexus restaura métricas del dashboard

**What**: Puente Telemetría→Nexus que restauró las métricas del dashboard a datos reales: telemetry-ingest.ts ingesta incremental de .telemetry/spans/*.jsonl (44 archivos, 907 spans → 548 únicos) hacia la tabla traces vía TraceRepo con offsets por archivo y clamp de clock-skew (endTime<startTime → running); websocket-server ingesta al arrancar + cada 60s y persiste transiciones de alertas vía EventRepo.insertAlert; real-data.ts con cadena de fallback para tokens.used: consolidated → token-usage.json → Nexus token_usage.
**Why**: /api/traces y tokens.used en cero: la tabla traces estaba vacía (TraceRepo sin usar), los .state.json podados por session-cleanup (>8h) y con turns vacíos, token-usage.json borrado por flushCaches al inicio de sesión, y el daemon token-ingest muerto tras restarts. La pantalla TracingDashboard/Alerts mostraba error/vacío.
**Where**: apps/web-dashboard/server/telemetry-ingest.ts (nuevo), apps/web-dashboard/server/websocket-server.ts, apps/web-dashboard/server/real-data.ts
**Learned**: (1) En módulos ESM del dashboard NO usar __dirname ni require() — crash en loop del watchdog; patrón nativo: fileURLToPath(import.meta.url). (2) Cadena de dependencia de tokens: metrics.tokens.used ← consolidated.json ← MetricsWriter ← context-log .state.json (siempre en ceros porque nadie actualiza turns en vivo) — el fallback a Nexus token_usage rompe esa fragilidad. (3) Los endpoints /api/traces y /api/alerts devuelven shape directo {traces,stats}/{alerts} SIN wrapper {data} — verificar shape real antes de diagnosticar. (4) PowerShell $null -lt 0 = True: propiedades faltantes parecen "negativas" en sondas. (5) tracing-instrument genera endTimeUnixNano inválidos en spans kind=2 (skew) — investigar como deuda.

---
*Imported from Engram on 2026-09-06*
