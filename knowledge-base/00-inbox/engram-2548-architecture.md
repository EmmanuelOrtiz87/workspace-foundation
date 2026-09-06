---
created: 2026-08-05 18:11:32
tags: [engram, architecture]
engram_id: 2548
type: architecture
---

# Sistema de Herencia de Modelos para Subagentes

**What**: Implementado sistema de herencia de modelo para subagentes que permite que todos los subagentes usen el mismo modelo que la sesión principal.

**Why**: Los subagentes estaban usando modelos hardcodeados (`opencode/deepseek-v4-flash-free`) que podían no estar disponibles o ser diferentes al modelo que el usuario estaba usando en la sesión principal (e.g., kimi-2-5).

**Where**: Nuevos archivos creados:
- `src/subagent-model-inheritance.ts` - Módulo core de herencia de modelos
- `src/subagent-model-inheritance-cli.ts` - CLI para gestionar configuración
- `src/subagent-router.ts` - Router inteligente para delegación de tareas
- `.runtime/model-inheritance.json` - Configuración persistente por sesión
- `.opencode/agents/orchestrator.md` - Actualizado con protocolo de herencia

**Learned**:
- OpenCode no permite modificar dinámicamente el modelo en runtime via API
- La solución es inyectar el modelo en el prompt de delegación
- Los subagentes pueden parsear el modelo del prompt y usarlo
- Se mantiene un fallback a `opencode/deepseek-v4-flash-free` si el modelo heredado falla
- ES modules requieren imports dinámicos, por eso se separó el CLI a un archivo aparte

---
*Imported from Engram on 2026-09-06*
