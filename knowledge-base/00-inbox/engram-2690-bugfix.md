---
created: 2026-08-09 04:44:12
tags: [engram, bugfix]
engram_id: 2690
type: bugfix
---

# Falsos positivos routing por keywords cortas (word-boundary fix)

**What**: Fix de falsos positivos en recommend-agent: matchDomain usaba includes() simple, así que keywords cortas matcheaban subcadenas ('pr' en "product"/"prepare"/"improve" → gitflow-agent incorrecto; 'doc' en "docker" → doc-agent incorrecto).
**Why**: El routing recomendaba agentes incorrectos para tareas de negocio comunes (blog post → gitflow en vez de mkt).
**Where**: src/recommend-agent.ts — nueva función taskHasKeyword() con word-boundary (keywords ≤3 chars solo como palabra completa \bpr\b; largas substring O palabra completa); keywords ampliadas: pr→pull/merge, doc→document/docs/readme, +docker/blog/churn/investor/costs/debug/performance/roadmap. Matching de overrides también usa taskHasKeyword.
**Learned**: Verificado con barrido de 16 tareas: blog→mkt-agent, churn→finance-agent, investor→finance-agent, docker→ops-agent, pull request→gitflow-agent. Regla: cualquier keyword ≤3 chars en routing debe usar word-boundary o genera falsos positivos.

---
*Imported from Engram on 2026-09-06*
