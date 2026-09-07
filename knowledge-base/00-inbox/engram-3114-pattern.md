---
created: 2026-08-25 05:08:28
tags: [engram, pattern]
engram_id: 3114
type: pattern
---

# Unified config-loader with schema validation and mtime cache

**What**: Creado config-loader único nativo en src/core/config-loader.ts — reemplaza los ~17 loadConfig() dispersos. Features: cache mtime-based (daemons detectan ediciones), deep merge de defaults, validador JSON Schema subset propio (type/required/properties/enum/pattern/min/max/additionalProperties, incluye formato sloppy "a b c" de required), auto-detección de <name>.schema.json, nunca lanza por archivos faltantes. CLI: npx tsx src/core/config-loader.ts --validate-all [--json] → 8/8 configs con schema validan limpio. Primer consumidor migrado: token-budget-guard.ts (Priority 1 usa loader unificado, fallback legacy orchestrator.json preservado).

**Why**: El plan P1 pedía centralizar config/*.json (136 archivos) moviendo validaciones dispersas a un loader único.

**Where**: src/core/config-loader.ts (nuevo), src/tokens/token-budget-guard.ts (migrado), docs/plans/NEXT-SESSION-PLAN-2026-08-25.md

**Learned**: API observable: loadConfigFile<T>(name, options), invalidateConfig(name?), getConfigStats() (hits/misses/hitRate). Adopción incremental recomendada — no big-bang: código nuevo usa el loader, consumidores existentes migran oportunísticamente. Candidato natural: integrar --validate-all al watchtower como check adicional o a static-gates.ts. Backlog child tables también verificados ese día: writes validan itemBelongsToTenant antes de insertar; reads filtran vía JOIN bi.tenant_id — patrón FK-scoping válido sin cambios necesarios.

---
*Imported from Engram on 2026-09-06*
