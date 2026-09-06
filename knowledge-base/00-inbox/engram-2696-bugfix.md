---
created: 2026-08-09 05:05:07
tags: [engram, bugfix]
engram_id: 2696
type: bugfix
---

# Orden de keywords: negocio primero que ingeniería en matchDomain

**What**: Reordenamiento de keywords en matchDomain() de recommend-agent.ts. Los pairs de dominios de negocio ahora van PRIMERO (keywords específicas) y los de ingeniería genérica después (review, analy, test, etc.). Antes 'review' ganaba a 'contract' (→code-review en vez de legal), 'analy' ganaba a 'metric' (→requirements en vez de business-telemetry), 'test' ganaba a 'score' (→testing en vez de sia). También: debug/bug/performance movidos antes de 'test' para que "debug the failing test" → code-apply. Keywords nuevas añadidas: social media, advertis, seo, brand (mkt); deal, lead generation (sales); pricing, expense (finance); liability, regulation (legal); interview, candidate, onboarding (hr); kpi, conversion, business intelligence (bus-tele); rebase, pr, git (gitflow); refine (sia).

**Why**: 3 falsos negativos de routing identificados en verificación multi-dominio: "review this contract" → sdd-verify, "analyze conversion metrics" → sdd-explore, "score the quality" → sdd-verify.

**Where**: src/recommend-agent.ts — matchDomain() pairs array (~L95-170)

**Learned**: ORDEN CRÍTICO en matching por keywords: las específicas de negocio deben evaluarse antes que los verbos genéricos de ingeniería. PERO cuidado con keywords de negocio demasiado genéricas: 'dashboard' robaba tareas de código ("implement a new feature for the dashboard" → business-telemetry) — se quitó y se sustituyó por 'business intelligence' (frase de 2 palabras, menos colisión). Verificado: 7/7 tareas mixtas (negocio + ingeniería) mapean correctamente.

---
*Imported from Engram on 2026-09-06*
