---
created: 2026-08-09 05:04:59
tags: [engram, bugfix]
engram_id: 2695
type: bugfix
---

# Cold-start multi-dominio: STATIC_MAP con 8 dominios de negocio

**What**: Cold-start multi-dominio corregido en recommend-agent.ts. El STATIC_MAP solo tenía dominios de ingeniería (code-review, code-apply, requirements, architecture, testing, docs, ops, security, governance, session, general); cualquier tarea de negocio resolvía el dominio correcto pero caía a STATIC_MAP.general → sdd-apply (sin implementación nativa TS → delegación fallaba "Exit code: 1"). Se añadieron 8 dominios de negocio al cold-start map con sus agentes nativos: marketing→mkt-agent, sales→sales-agent, finance→finance-agent, legal→legal-agent, hr→hr-agent, business-telemetry→bus-tele-agent, gitflow→gitflow-agent, sia→sia-agent.

**Why**: route-and-delegate recomendaba sdd-apply para tareas de negocio (falso negativo): "social media campaign" → sdd-apply en vez de mkt-agent.

**Where**: src/recommend-agent.ts — STATIC_MAP (~L203)

**Learned**: El cold-start map es el fallback que se usa cuando la routing table aprendida no tiene entrada; sin dominios de negocio ahí, todos los agentes nativos de dominio eran inalcanzables en frío. Verificado: finance/hr/gitflow/sales/marketing mapean y delegan con éxito (artifacts persistidos).

---
*Imported from Engram on 2026-09-06*
