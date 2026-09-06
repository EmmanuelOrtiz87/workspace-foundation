---
created: 2026-08-04 19:16:44
tags: [engram, decision]
engram_id: 2530
type: decision
---

# Sistema Steps Completo - Estación de Validación Universal

## Sistema de Steps Adaptativos - Estado Completo

### ✅ IMPLEMENTADO

1. **baseline en opencode.json**
   - Orchestrator: 24 steps
   - 20 subagentes: 20-52 steps cada uno
   - Todos los agentes configurados

2. **Sistema Automático (auto-step-recovery.ts)**
   - detectStepExhaustion(): Detección de patrones
   - bumpSteps(): Incremento +20 (máx 80)
   - reassignWithMoreSteps(): Reasignación
   - wrapAgentCall(): Wrapper para llamadas
   - Log de recovery en .session/step-recovery.log

3. **Herramienta Manual (adaptive-steps.ts)**
   --estimate: Estima steps necesarios
   --apply: Aplica a agente específico
   --auto: Estima + aplica
   --resume: Recupera agente agotado
   --status: Ver estado de todos

### 🔄 VALIDACIÓN DE HERRAMIENTAS EN CURSO

**Herramientas encontradas con referencias antiguas:**
- .cursor/config.json: ✅ Actualizado (pre-process-input.ts, adaptiveSteps)
- .cline/config.json: Pendiente verificar
- .opencode/config.json: Central (ya tiene steps)
- .windsurf: Pendiente verificar
- .claude/settings.json: Pendiente verificar

### PRÓXIMO PASO

Verificar todas las herramientas externas y actualizarlas para incluir:
1. Referencias correctas a TS (no PS1/CMD)
2. Configuración de adaptiveSteps
3. Integración con sistema central

### ESTADO ACTUAL

Dashboard: 85/85 PERFECT
Steps de agentes: TODOS configurados
Sistema auto-recovery: IMPLEMENTADO
Integración universal: EN PROGRESO (Cursor actualizado, restantes pendientes)

---
*Imported from Engram on 2026-09-06*
