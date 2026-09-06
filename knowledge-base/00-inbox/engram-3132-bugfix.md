---
created: 2026-08-25 13:32:02
tags: [engram, bugfix]
engram_id: 3132
type: bugfix
---

# Correcciones de cache y delegación

**What**: Corregí la escritura SQLite del response cache para detectar tenant_id, resolver el tenant de despliegue con fallback seguro y conservar compatibilidad con esquemas antiguos; preservé el prompt/contexto originales al almacenar resultados del orquestador; hice que las plantillas de agentes fallen cerrado con exitCode 1 y sin mensaje de éxito.
**Why**: Evitar fallos de esquema/aislamiento, asegurar que miss→store→hit use la misma clave y no reportar éxito de lógica no implementada.
**Where**: src/response-cache.ts, src/tokens/token-optimization-orchestrator.ts, src/agent-delegator.ts, tests/unit/token-optimization-cache.test.ts
**Learned**: El esquema tenant-aware usa clave primaria compuesta (key, tenant_id), mientras que esquemas legacy no tienen tenant_id; la prueba focalizada debe usar prompt suficientemente largo para que el criterio de hit del pipeline tenga savings positivos.

---
*Imported from Engram on 2026-09-06*
