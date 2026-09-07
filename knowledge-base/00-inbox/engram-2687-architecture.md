---
created: 2026-08-09 04:32:21
tags: [engram, architecture]
engram_id: 2687
type: architecture
---

# Routing adaptativo M10 + route-and-delegate operativo

**What**: Materializado y operativo el routing adaptativo (M10): tabla con 9 dominios aprendidos del historial real + 10 overrides de alta prioridad + seed de 20 dominios cold-start, y creado route-and-delegate.ts como entrada unificada (cualquier petición → recommend() → delegate() → artifact).
**Why**: El routing-table.json estaba vacío (0 domains, 0 overrides) y recommend-agent caía en static-fallback con confianza 0.3; meta del usuario es operar con todas las herramientas de forma autónoma.
**Where**: src/adaptive-router.ts (parsing dual skill-usage, delegaciones derivadas de skill-usage, upgrade dominio por delegación, seed SEED_DOMAINS/SEED_OVERRIDES, advisory flags), src/recommend-agent.ts (overrides matchean tarea completa + ~20 keywords negocio en matchDomain), src/route-and-delegate.ts (nuevo), src/agents/domain-agent-core.ts + legal-agent.ts (advisory flag), config/adaptive-router.json (minDataPoints 3→1), config/session-autostart.config.json (step lazy adaptive-router-build #108).
**Learned**: (1) collectSkillUsage esperaba objetos {skillName,useCount} pero los agentes de dominio escriben arrays de registros {agent,domain,flags} — parsing dual necesario. (2) Overrides deben matchearse contra la TAREA completa, no contra el dominio derivado, o "gdpr compliance audit" (que matchea audit→governance) nunca llega al override gdpr→legal. (3) Flags críticos de diseño (legal "escalate to counsel") distorsionan el scoring como fallos — añadir advisory:true + heurística de mensaje que contenga "advisory". (4) minDataPoints 3 bloquea cold start con pocas delegaciones reales.

---
*Imported from Engram on 2026-09-06*
