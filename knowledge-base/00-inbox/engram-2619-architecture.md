---
created: 2026-08-07 13:29:12
tags: [engram, architecture]
engram_id: 2619
type: architecture
---

# Trazabilidad completa de tokens: transacciones, sesiones, agentes, costos y ahorros en Nexus

**What**: Sistema de trazabilidad completa de tokens construido y validado: costo/ahorro/reducción por transacción, sesión e iteración (orquestador + subagentes), agnóstico a la herramienta.

**Why**: El usuario pidió (1) tracking real de tokens (no fake/stale), (2) agnóstico a herramientas (no depender de plugins), (3) trazabilidad granular de costos/ahorros/reducción por cada transacción, sesión e iteración del stack (orquestador y subagentes).

**Where**: src/token-ingest.ts, src/token-usage-reader.ts, config/token-budget-guard.json, config/token-budget-guard.schema.json, config/model-router.json, config/session-autostart.config.json (lazy step token-ingest-init), package.json (token:ingest, token:trace)

**Learned**:
- opencode guarda tokens REALES en ~/.local/share/opencode/opencode.db: tabla `session` (tokens_input/output/reasoning/cache_read/write, cost, model, parent_id) y tabla `message` (data JSON con tokens por mensaje).
- La sesión de hoy consumió ~1.5M tokens (el stack mostraba 0 antes). Histórico: 658M en 241 sesiones.
- opencode 1.17.18 usa PLUGINS no hooks; el hook viejo post-tool-use-log nunca corría → el stack mostraba stale de mayo.
- Nexus ahora tiene: token_usage (por sesión, 241 filas), token_transactions (por mensaje, ~15.2K filas, con agent orquestador/subagente vía parent_id), token_savings (cache reads, ~9.2K).
- Orquestador: 13.202 txns / 631M in / 4.86M out. Subagentes: 2.026 txns / 27.3M in / 1.23M out.
- Budgets unificados: daily 5M, perSession 3M (fuente única token-budget-guard.json; schema perSession max 5M).
- Commands: token:ingest (--once), token:trace (--report), token:status. Lazy step token-ingest-init (--watch 30) en autostart.
- Commits: 24c925f8 (trazabilidad), f3df9ffc (budgets), cebf423e (daemon ingest), 8df1a357/205520e9 (plugin opencode), 256eb4e4/46fa5cb7/606ebdfa (serie cierre/daemons).
- Cache savings es la métrica de ahorro REAL medible (cache reads). La compresión del stack (prompt/output/structural) estima ahorros adicionales no conectados aún.

---
*Imported from Engram on 2026-09-06*
