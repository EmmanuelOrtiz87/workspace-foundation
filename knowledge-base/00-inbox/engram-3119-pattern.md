---
created: 2026-08-25 10:43:03
tags: [engram, pattern]
engram_id: 3119
type: pattern
---

# Watchtower config schema validation check integrated

**What**: Integrada la validación de schemas del config-loader al watchtower como check adicional. checkConfigs() en src/core/maintenance-watchtower.ts ahora valida dinámicamente todo config/*.json con .schema.json hermano (8 configs actualmente) vía import dinámico de loadConfigFile; reporta FAIL con detalle de violaciones o PASS agregado 'schema validation (N schemas)'.

**Why**: Pendiente menor acumulado de sesiones anteriores — dar al watchtower visibilidad de drift de configuración.

**Where**: src/core/maintenance-watchtower.ts (checkConfigs extendido)

**Learned**: Watchtower verificado end-to-end: 94/97 PASS, schema validation (8 schemas): PASS. Los 3 findings restantes son dashboard-ws FAIL/WARNs esperados (dashboard detenido intencionalmente tras smoke test). Estructura de checks: funciones checkXxx listadas en runAllChecks() (línea ~1817), paralelizadas con Promise.allSettled; addResult(component, check, status, detail, source). PLAN P1 CERRADO AL 100%: config-loader ✅, cache LRU ✅, circuit-breaker v2 ✅, pipeline OTel ✅, SLO por tenant ✅, watchtower schema-check ✅.

---
*Imported from Engram on 2026-09-06*
