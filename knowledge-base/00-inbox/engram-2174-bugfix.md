---
created: 2026-07-28 13:38:52
tags: [engram, bugfix]
engram_id: 2174
type: bugfix
---

# Fix timeout-config.ts root detection - VERIFICADO

**What**: Corregido el problema de ROOT detection en timeout-config.ts que causaba warning al ejecutar desde subdirectorios
**Why**: El código usaba process.cwd() como ROOT, pero cuando el dashboard ejecutaba desde apps/web-dashboard/, buscaba el config en el path equivocado
**Where**: src/core/timeout-config.ts
**Cambio**: Reemplazado `const ROOT = resolve(process.cwd())` con función `findRepoRoot()` que busca config/timeout-config.json subiendo directorios
**Verificación**: ✅ Ejecutado desde apps/web-dashboard/ - carga correctamente sin warnings
**Impacto**: Elimina warning falso positivo, mantiene fallback por si no se encuentra config

---
*Imported from Engram on 2026-09-06*
