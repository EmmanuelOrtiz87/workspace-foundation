---
created: 2026-07-18 05:44:19
tags: [engram, decision]
engram_id: 1754
type: decision
---

# BACKLOG: Multi-Model Orchestrator (futuro)

**What**: Backlog — Multi-Model Orchestrator. Router inteligente entre múltiples LLMs externos (GPT-4, Claude, Gemini, locales) según costo, latencia, tipo de tarea. Extiende el model-router.json y adaptive-router actual.

**Why**: Optimizar costos de API y elegir el mejor modelo por tarea automáticamente.

**Condition to activate**: Cuando el convergence score supere 80/100 estable por al menos 7 días consecutivos, o cuando el costo mensual de API justifique la optimización.

**Dependencies**: model-router.json, cost-tracker, token-budget-guard, adaptive-router

**Priority**: Media — más impacto inmediato pero no crítico hoy

---
*Imported from Engram on 2026-09-06*
