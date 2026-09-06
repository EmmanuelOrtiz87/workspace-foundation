---
created: 2026-09-04 01:53:51
tags: [engram, decision]
engram_id: 3664
type: decision
---

# GV Analytics autonomía total: DB propia, ledger tokens, OpsPanel

**What**: Implementada autonomía total de GV Analytics: nueva `server/db.ts` con SQLite app-local (`apps/gv-analytics/.runtime/gv-analytics.db`, WAL, resolución desde file location + overrides GVA_DB_PATH/GVA_RUNTIME_DIR) y migración one-time de tablas `gv_analytics_*` desde la Nexus DB; nueva tabla ledger `gv_analytics_token_usage` que `enrichWithLLM` puebla en el path del cliente LLM (provider/model/tokens/duration); TTL de cache (GVA_CACHE_TTL_DAYS, default 7, evicción en lectura + prune en escritura); `getOpsSummary()` extiende `/api/metrics` con tokens+cache+budget (GVA_DAILY_TOKEN_BUDGET, 0=ilimitado); nuevo `OpsPanel` en vista Operación (requests, hit-rate cache, tokens, latencia p50/p95, barra de budget) con i18n ops.* en en/es/pt.

**Why**: La app era standalone en packaging pero escribía en la Nexus DB compartida con paths frágiles por cwd, descartaba los tokens (solo console.log) y tenía cache sin expiración y métricas sin UI.

**Where**: server/db.ts (nuevo), server/reports.ts, server/metrics.ts, server/llm.ts, server/index.ts, src/App.tsx (OpsPanel), src/i18n.tsx (ops.* ×3).

**Learned**: Verificado en vivo: migración copió historial (805 requests, 59 analyze, agent:5/heuristic:51) a la DB local; `/api/metrics` devuelve tokens/cache/budget; ledger cuenta desde ahora (calls:0 histórico es correcto). Servidor reiniciado PID 7816. Typecheck ✅ build ✅. Tablas legacy en Nexus quedan intactas (solo lectura en migración).

---
*Imported from Engram on 2026-09-06*
