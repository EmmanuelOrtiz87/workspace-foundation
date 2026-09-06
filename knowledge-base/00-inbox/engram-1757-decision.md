---
created: 2026-07-18 05:44:31
tags: [engram, decision]
engram_id: 1757
type: decision
---

# MANDATO: Notificar backlog cuando corresponda

**What**: Mandato del usuario — NO avanzar con los 3 backlog items (Multi-Model Orchestrator, Autonomous Decision Framework, Predictive Analytics Engine) hasta que se cumplan sus condiciones de activación. El agente DEBE notificar/recomendar proactivamente al usuario cuando sea el momento de retomarlos.

**Why**: El usuario quiere que el stack de 7 etapas madure primero antes de agregar más capas.

**Conditions to notify**:
1. **Multi-Model Orchestrator**: Notificar cuando convergence score >80/100 por 7+ días consecutivos
2. **Autonomous Decision Framework**: Notificar cuando convergence score >80/100 por 14+ días consecutivos
3. **Predictive Analytics Engine**: Notificar cuando hayan ≥14 días de datos históricos en .session/ + convergence score estable >70/100

**How to notify**: Al inicio de una sesión, revisar estos contadores. Si se cumple alguna condición, mencionarlo al usuario como recomendación con el formato: "Recordatorio: [nombre del backlog] está listo para considerar — [condición cumplida]"

**Files to monitor**: .session/convergence/ (reports diarios), .session/audit/logs/ (datos históricos), .telemetry/spans/ (datos de tracing)

**Backlog items**:
- id:1754 — Multi-Model Orchestrator
- id:1755 — Autonomous Decision Framework
- id:1756 — Predictive Analytics Engine

---
*Imported from Engram on 2026-09-06*
