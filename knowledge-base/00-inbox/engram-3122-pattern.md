---
created: 2026-08-25 12:51:15
tags: [engram, pattern]
engram_id: 3122
type: pattern
---

# SessionOrchestrator FSM and pre-push gates added

**What**: Dos optimizaciones del plan completadas. (1) Lefthook pre-push ampliado con content-validate (~3s) y ci-static-gates (~35s) — falla rápido local antes que CI; hooks re-sincronizados con npx lefthook install. (2) SessionOrchestrator state machine nativo (src/core/session-orchestrator.ts): FSM explícita idle→bootstrapping→active→cleaning→closing→closed con transiciones validadas, estado persistido en .runtime/session-orchestrator-state.json (historial 50 transiciones), delega a entry points existentes sin reescribirlos (bootstrap=autostart-detached vía runNpxTsx, startup=session-manager --quiet sync, close=session-close-orchestrator sync). CLI: --status/--bootstrap/--startup/--close/--reset.

**Why**: Optimizaciones propuestas del plan para "llevar a otro nivel" tras cerrar P1 al 100%.

**Where**: .lefthook.yml, src/core/session-orchestrator.ts (nuevo)

**Learned**: Verificado end-to-end: bootstrap idle→bootstrapping→active (detached), startup active→cleaning→active exit=0, transición inválida idle→closing correctamente rechazada con mensaje de allowed transitions. GOTCHA TS: runNpxTsxSync retorna status number|null → usar `?? 1`; closeSession/startupCleanup son síncronas (no await). El diseño delegador evita reescritura riesgosa de scripts battle-tested y añade modelado explícito + observabilidad del ciclo de vida.

---
*Imported from Engram on 2026-09-06*
