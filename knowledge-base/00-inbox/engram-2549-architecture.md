---
created: 2026-08-05 18:19:44
tags: [engram, architecture]
engram_id: 2549
type: architecture
---

# Model Router v2 con Override y Fallback Automático

**What**: Implementado sistema de selección inteligente de modelos con 5 niveles de prioridad y fallback automático.

**Why**: Se requirió:
1. Permitir override explícito por tarea
2. Respetar bindings de agente en model-router.json
3. Heredar modelo de sesión principal
4. Fallback automático si un modelo falla
5. Notificar usuario cuando hay cambios

**Where**:
- `src/model-router-enhanced.ts` - Core de selección con 5 prioridades
- `src/subagent-router.ts` - API de alto nivel con createSmartTask()
- `config/model-router.json` - Bindings por agente y failover chain
- `docs/guides/SUBAGENT-MODEL-INHERITANCE.md` - Documentación completa

**Priority Chain**:
1. User Override ← { userModel: 'claude-3-5' }
2. Agent Binding ← config/model-router.json
3. Session Inheritance ← desde sesión principal
4. Global Fallback ← opencode/deepseek-v4-flash-free
5. Universal Fallback ← explore/general agents

**User Facing API**:
- createSubagentTask('sdd-apply', desc, prompt, { userModel: 'X' })
- ModelSelector.useModel('X').forTask('sdd-apply', ...)
- ModelSelector.available() - lista modelos healthy

**Fallback Chain**:
chosen model → opencode → ollama → dify → lm-studio2 → explore → general

**Notifications**:
- Cuando userOverride ≠ binding
- Cuando modelo elegido no disponible
- Cuando cae a universal fallback

**Configuración**:
- opencode.json: bindings por agente
- model-router.json: bindings + failover chain
- Prompt injecta: SELECTED_MODEL, SOURCE, IS_FALLBACK

---
*Imported from Engram on 2026-09-06*
