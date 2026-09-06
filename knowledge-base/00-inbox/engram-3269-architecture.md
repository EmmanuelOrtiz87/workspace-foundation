---
created: 2026-08-29 16:41:22
tags: [engram, architecture]
engram_id: 3269
type: architecture
---

# Primera ejecución del alcance unificado

**What**: Se aplicó la primera tranche del plan: se eliminaron apps `doc-gentle` y `discord-bot`, se quitó `product-doc-gentle.html`, se normalizó documentación activa para tratar la arquitectura optimizada como parte nativa del stack y se creó el MVP standalone `apps/content-cms`.
**Why**: El usuario pidió un stack unificado sin versiones/fases visibles, apps soportadas completas e independientes y un CMS nativo demostrable.
**Where**: `apps/content-cms`, `pnpm-workspace.yaml`, `package.json`, documentación activa, `apps/academy-web/data/content-arquitectura.js`, workflows `.github/workflows`, `config/mcp-*`, `.github/dependabot.yml`.
**Learned**: CMS MVP funciona con React/Vite, draft/published local, preview seguro, import/export JSON, localStorage encapsulado y tests; aún no tiene backend, auth, historial, assets ni publicación remota. Hardening CI aplicado: permisos menores, sin `secrets: inherit`, actions fijadas, dependency review, Dependabot, instaladores fijados y MCP con versiones verificables donde existen. Persisten bloqueos: revocar secretos reales de GitHub/Telegram, paquetes MCP opcionales sin versión verificable, checksums Syft/Grype, homologación visual completa y validación global de formato.

---
*Imported from Engram on 2026-09-06*
