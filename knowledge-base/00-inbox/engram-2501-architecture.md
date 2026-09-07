---
created: 2026-08-04 11:27:39
tags: [engram, architecture]
engram_id: 2501
type: architecture
---

# Diagnóstico telemetría de tokens del stack

**What**: Auditoría completa de la infraestructura de telemetría de tokens en Gentle-Vanguard.
**Why**: El usuario quiere medir/notificar tokens consumidos al inicio, cierre, y a demanda, segmentado por input/output/chat, consistente con el dashboard.
**Where**: src/token-tracker.ts, src/token-usage-auto.ts, src/token-metrics-store.ts, src/token-budget-guard.ts, src/session-metrics-tracker.ts, src/session-close-orchestrator.ts, apps/web-dashboard/server/{real-data.ts,websocket-server.ts,database/repositories/SkillRepo.ts}, .runtime/gentle-vanguard.db (tabla token_usage).
**Learned**:
- 4 mecanismos de medición existen (tracker, usage-auto, metrics-store, budget-guard). Persistencia en Nexus SQLite token_usage (prompt/completion/total generado/cost/model/timestamp) + metric_snapshots + events + traces. Dashboard ya expone tokens.used/limit/cost/byModel y sección token_usage.
- BUG: session-close-orchestrator fase 2.4 llama `token-metrics-store --action close` pero ese script SOLO soporta init/record/query/aggregate/dashboard → siempre SKIP. El resumen de tokens al cierre NO se persiste.
- GAPS: (1) bug de cierre, (2) no hay banner de inicio con tokens usados+restantes, (3) no hay resumen de cierre segmentado, (4) no hay comando simple a demanda pre/post compactación, (5) registro por mensaje en Nexus no está garantizado (depende del hook post-tool-use-log).
- El stack YA usa token pressure para auto-regularse (adaptive profiles, summarize-wipe, token-optimization-orchestrator, auto-norm-learner, cost-efficiency-scorer).
- Presupuesto diario configurado: 60K tokens, soft 70%, hard 90% (config/token-budget-guard.json).

---
*Imported from Engram on 2026-09-06*
