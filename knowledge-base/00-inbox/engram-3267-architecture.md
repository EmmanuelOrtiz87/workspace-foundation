---
created: 2026-08-29 16:40:32
tags: [engram, architecture]
engram_id: 3267
type: architecture
---

# Content CMS MVP standalone

**What**: Implementé una app React+TypeScript+Vite standalone en apps/content-cms para listar, crear, editar, previsualizar, importar/exportar JSON y manejar draft/published.
**Why**: Entregar el MVP funcional independiente del CMS sin backend, MCP ni publicación remota.
**Where**: apps/content-cms/*, package.json, pnpm-workspace.yaml, pnpm-lock.yaml
**Learned**: La persistencia está encapsulada en src/storage.ts usando localStorage con fallback en memoria; la validación de runtime descarta imports inválidos y limita URLs a http/https; los tokens se reutilizan mediante import CSS desde web-dashboard sin duplicarlos. Gates del app pasan: typecheck, lint, test, prettier y build.

---
*Imported from Engram on 2026-09-06*
