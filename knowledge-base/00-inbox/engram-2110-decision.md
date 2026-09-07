---
created: 2026-07-27 21:04:45
tags: [engram, decision]
engram_id: 2110
type: decision
---

# Clarificación: CLAUDE.md vs configuración transversal del stack

**What**: El usuario hace una observación crucial sobre la arquitectura del stack - CLAUDE.md es específico de Claude Code, pero el sistema de optimización de tokens debe ser TRANSVERSAL y funcionar en CUALQUIER agente/interfaz (OpenCode, Cline, Cursor, etc.)

**Why**: La configuración actual tiene un acoplamiento implícito con Claude Code (CLAUDE.md, .cursorrules, etc.) pero el stack debe ser agnóstico de la herramienta y auto-orquestado

**Where**:
- CLAUDE.md es leído por Claude Code como entry point
- config/orchestrator.json tiene la configuración canónica transversal
- El sistema de optimización debe funcionar vía orquestador, no depender de que el agente lea CLAUDE.md

**Learned**:
- El orquestador debe ser la fuente de verdad, no los archivos de perfil de herramientas específicas
- Las normativas deben estar en rules/ y ser aplicadas por el orquestador
- La configuración de compresión debe activarse automáticamente sin depender del agente
- Necesitamos un mecanismo que garantice que la optimización SIEMPRE se aplique, independientemente de quién ejecute el stack

**Decision**: Migrar la lógica de CLAUDE.md a un sistema auto-ejecutable orquestado por token-optimization-orchestrator.ts que funcione transversalmente

---
*Imported from Engram on 2026-09-06*
