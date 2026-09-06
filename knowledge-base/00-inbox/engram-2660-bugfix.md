---
created: 2026-08-08 17:44:45
tags: [engram, bugfix]
engram_id: 2660
type: bugfix
---

# CRITICAL: Final model resolution attempt before hard reset

**SITUACIÓN CRÍTICA:**
- Subagentes continúan fallando con "Model not found: inherit-from-session/."
- Múltiples intentos de reconfiguración fallidos
- Sistema bloqueado - no se puede avanzar

**ANÁLISIS DE CULPA:**
1. Opencode/arcaico genera "inherit-from-session" como fallback interno
2. Cache de modelos no reconoce provider personalizado (littellmott-nuevo)
3. Jerarquía de configs (proyecto vs global) crea conflictos
4. Script fix-models.ts tiene bug en herencia de variantes

**HERENCIA ROTA:**
- Orchestrator no pasa modelo a subagentes correctamente
- Valor "inherit-from-session" se propaga como string literal
- Sistema no implementa Model Inheritance Protocol reales

**SOLUCIÓN FINAL REQUERIDA:**
1. Cerrar COMPLETAMENTE opencode/arcaico (todos los procesos)
2. Limpiar caché: ~/.cache/opencode/*
3. Restaurar configs desde backup o recrearlos
4. Reiniciar con modelo reconocido: moonshotai/kimi-k2.5
5. Verificar task() funciona antes de continuar

**ESTADO GUARDADO:**
- Todos los 8 skills creados manualmente en .opencode/skills/
- Smart Model Router implementado (no activo)
- Health Registry creado (config/model-health-registry.json)
- 20 subagentes configurados en opencode.json (no surten efecto)

**PRÓXIMO PASO:**
Hard reset del IDE - única opción restante

---
*Imported from Engram on 2026-09-06*
