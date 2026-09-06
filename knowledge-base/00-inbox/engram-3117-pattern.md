---
created: 2026-08-25 10:16:38
tags: [engram, pattern]
engram_id: 3117
type: pattern
---

# Unified OTel pipeline orchestrating spans ingest and metrics writer

**What**: Creado pipeline OTel unificado en apps/web-dashboard/server/otel-pipeline.ts que orquesta ambos motores de telemetría detrás de un ciclo de vida único. Clase OtelPipeline con start(ingestIntervalMs=60000)/stop()/ingestOnce()/getStats(); singleton vía getOtelPipeline(). Cableado en websocket-server.ts: reemplaza instanciación directa de MetricsWriter, bloques inline del ingest (startup + setInterval 60s), y maneja shutdown graceful de ambos ciclos. Export Prometheus enriquecido con 4 métricas nuevas de auto-observabilidad: otel_pipeline_running, otel_spans_ingested_total, otel_ingest_errors, otel_last_ingest_age_seconds.

**Why**: El plan P1 pedía centralizar telemetry-ingest.ts + MetricsWriter → un pipeline OTel con export Prometheus.

**Where**: apps/web-dashboard/server/otel-pipeline.ts (nuevo), apps/web-dashboard/server/websocket-server.ts (cableado + prometheusMetrics enriquecido)

**Learned**: El endpoint /metrics y /api/metrics/prometheus YA existían (línea ~1265 websocket-server) con formato exposition correcto text/plain version=0.0.4 — solo eran básicos (7 gauges). El pipeline unifica: spans (.telemetry/spans/*.jsonl → Nexus traces, incremental por byte-offsets) + métricas (MetricsWriter → metric_snapshots cada 30s). Stats expuestas: running, spansIngestedTotal, lastIngest, lastIngestAt, ingestErrors. Verificado: dashboard build 23.16s verde, root typecheck+lint verdes. calculateBurnRate() ya existe en websocket-server (~373-407) como base para SLO alerts por tenant.

---
*Imported from Engram on 2026-09-06*
