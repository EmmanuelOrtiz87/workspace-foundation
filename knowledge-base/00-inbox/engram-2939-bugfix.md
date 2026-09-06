---
created: 2026-08-21 03:30:41
tags: [engram, bugfix]
engram_id: 2939
type: bugfix
---

# CI público: entrypoints de tests

**What**: Sincronicé `src/test-runner-optimized.ts` y `src/mcp/fetch-server-native.ts` al repositorio público.
**Why**: El workflow público fallaba con MODULE_NOT_FOUND en tests y MCP self-test, después de resolver los módulos de runtime anteriores.
**Where**: src/sync-to-public.ts; privado main/develop a4296bb4; público main e1206d5.
**Learned**: Los fallos CI siguen siendo de contenido incompleto de la distribución curada, no de créditos; cada helper publicado debe llevar sus entrypoints transitivos o el workflow público debe tener una suite reducida explícita.

---
*Imported from Engram on 2026-09-06*
