---
created: 2026-08-23 22:28:17
tags: [engram, bugfix]
engram_id: 2980
type: bugfix
---

# Paneles dashboard conectados a datos reales Nexus

**What**: Conexión de todos los paneles vacíos del dashboard a datos reales de Nexus: SLO live-compute (4 checks desde traces/alerts), /api/agent/sessions con merge de tabla sessions (50 reales), Swarm Workers derivados de token_transactions por agente, Routing Rules con fallback a subagent-mapping.json (29 dominios, hitCounts reales), /api/validations HTTP + seed fetch en panel, MetricsWriter con fallback token_usage y eliminado bug tokens-como-latencia, ventana sana de latencia ≤10min en TraceRepo/telemetry-ingest.
**Why**: 7 secciones del dashboard sin datos (SLO, Session Activity, Swarm Workers, SQLite Stack Tables, Validaciones, Metrics History, Sessions=0) pese a que el stack genera los datos — tuberías desconectadas o leyendo fuentes muertas.
**Where**: apps/web-dashboard/server/{websocket-server.ts, real-data.ts, telemetry-ingest.ts, database/metrics-writer.ts, database/repositories/TraceRepo.ts}, apps/web-dashboard/src/components/ValidationPanel.tsx
**Learned**: (1) Tabla token_usage usa prompt_tokens/completion_tokens — NO input_tokens/output_tokens (esos están en token_transactions); un catch silencioso ocultaba el fallo y el valor venía del fallback de archivo. (2) Clock-skew produce duraciones negativas Y positivas gigantes (1.6B ms) — clamp bidireccional en ingesta + filtro en queries. (3) metrics-writer tenía fallback que usaba totalTokens como milisegundos de latencia. (4) routing_rules table vacía: la config real de ruteo vive en config/subagent-mapping.json (29 dominios con triggers/primary_subagent). (5) Verificar schema real con PRAGMA table_info antes de escribir SQL contra Nexus.

---
*Imported from Engram on 2026-09-06*
