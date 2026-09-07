---
created: 2026-08-24 13:44:58
tags: [engram, architecture]
engram_id: 3014
type: architecture
---

# Validated supported plugins and MCP capabilities end-to-end

**What**: Auditoría y saneamiento integral de herramientas/plugins completado. Plugin registry quedó con 1 plugin válido/habilitado (`example-hello`), hook `session-start` probado 1/1; eliminado manifiesto huérfano `example-hello-world` que apuntaba a `hello-world.ps1` inexistente. Fetch MCP self-test pasó (2 resultados), skill MCP tools/list pasó (5 tools). Política MCP ya canónica y dashboard muestra lifecycle/management/verification/stateReason.
**Why**: El usuario pidió que todas las herramientas y plugins soportados fueran operables, conectados, reales y estables, con definiciones y normativas coherentes.
**Where**: plugins/example-hello-world/plugin.json (eliminado), plugins/example-hello/, config/mcp-lifecycle-policy.json, config/mcp-lifecycle-policy.schema.json, rules/NORMATIVA-MCP-LIFECYCLE.md, apps/web-dashboard/server/mesh-api.ts, apps/web-dashboard/src/components/MultiRepoView.tsx
**Learned**: `plugin:hooks` requiere evento explícito (`session-start`). `mcp:test` cubre skill-server, mientras `mcp:fetch:test` cubre fetch; no existe todavía un handshake agregado para MCP host-managed. `/api/health` confirma dashboard MCP=ok/5 pero no prueba todos los servidores declarados en OpenCode/ZCode. El dashboard mesh correctamente muestra stopped/stale-pid para stdio host-managed, no error. Hooks, typecheck, lint, dashboard build/tests y config tests quedaron verdes. Artefactos automáticos de runtime permanecen sin commitear y no deben incluirse.

---
*Imported from Engram on 2026-09-06*
