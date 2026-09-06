---
created: 2026-08-31 04:05:18
tags: [engram, bugfix]
engram_id: 3454
type: bugfix
---

# Portable MCP skill server E2E assertion

**What**: Cambié la aserción de `tests/e2e/session-lifecycle.test.ts` para comprobar `scripts/mcp/skill-server.ts` en vez de depender de `dist/scripts/mcp/skill-server.js`.
**Why**: El runner de coverage/tests no garantiza artefactos dist ni postinstall, pero debe verificar que el MCP skill server esté disponible.
**Where**: `tests/e2e/session-lifecycle.test.ts`; commit amendado y pushado en `bugfix/171-commitlint-history`.
**Learned**: `pnpm coverage`, `pnpm test -- cloud-connectors`, typecheck y lint pasaron. El check global de Prettier solo reportó archivos preexistentes modificados (`config/model-health-registry.json`, `opencode.json`); el test corregido pasa `pnpm prettier --check` y el pre-push gate 12/12 pasó.

---
*Imported from Engram on 2026-09-06*
