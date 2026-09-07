---
created: 2026-08-14 05:13:26
tags: [engram, bugfix]
engram_id: 2827
type: bugfix
---

# Fix tracing OTLP: getTraces ignoraba .telemetry/traces

**What**: Corregido el gap crítico del dashboard de tracing: getTraces() ignoraba los archivos .telemetry/traces/*.jsonl (spans OTLP reales del tracing-instrument)
**Why**: La health reportaba traceFiles: 35 pero /api/traces devolvía 0 traces/0 spans — el waterfall de tracing nunca mostró datos reales. getTraces() solo leía la DB (tabla traces) y el context-log (.session/context-log/*/.state.json)
**Where**: apps/web-dashboard/server/real-data.ts (getTraces, commit 45675d07)
**Learned**: El fix agregó un tercer fallback que parsea spans OTLP: startTimeUnixNano→ms (dividir por 1e6), status.code (STATUS_CODE_OK→completed, STATUS_CODE_ERROR→error), attributes[] (array de {key, value:{stringValue}}). Filtros críticos: (1) skip spans con startTime<=0 o endTime<startTime (inflaban avgDuration a 107M ms), (2) skip session-start (725 de 765 spans son vida de sesión de días, no latencia de operaciones), (3) excluir outliers >1h del promedio, (4) cap 200 spans más recientes. Resultado: 27 traces reales de operaciones (cloud-AWS, cloud-Azure, final, test, verify), avgDuration 8ms. Los spans OTLP del tracing-instrument se escriben con startTimeUnixNano==endTimeUnixNano (duración 0) en la mayoría de operaciones.

---
*Imported from Engram on 2026-09-06*
