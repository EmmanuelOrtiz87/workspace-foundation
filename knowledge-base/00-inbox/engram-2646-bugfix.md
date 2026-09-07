---
created: 2026-08-08 05:38:22
tags: [engram, bugfix]
engram_id: 2646
type: bugfix
---

# Auditoría stack: codegraph daemon restaurado + embeddings regeneradas + 88/89 PASS

**What**: Auditoría de salud del stack: se restauró el daemon codegraph MCP (estaba caído, watchtower mostraba 86 PASS/1 FAIL), se regeneraron las skill-embeddings stale (48.1h → 0h, 419 skills/1115 términos vía `npx tsx src/skills/skill-embedder.ts`) y se arregló el cache dir de web-crawler (creado `.session/response-cache/firecrawl` + regenerado snapshot `.runtime/web-crawler-health.json` vía `src/web-crawler-init.ts`). Estado final: 88 PASS / 1 WARN / 0 FAIL / 89 total.

**Why**: El usuario pidió verificar que todo esté integrado, homologado, funcional, conectado, optimizado, activo, automático y documentado — la auditoría real destapó 1 FAIL y 2 WARN.

**Where**: src/codegraph-mcp-server-start.ts (daemon canónico, lanzado con `cmd /c start /b npx tsx ...` log %TEMP%\cgd-v2.log, PID 42344), src/skills/skill-embedder.ts (regeneración embeddings), src/web-crawler-init.ts (snapshot health), .runtime/web-crawler-health.json.

**Learned**: (1) `codegraph serve --mcp` es MCP stdio, NO expone puerto HTTP — el check del puerto 3000 es proxy del estado del proceso; el watchtower usa pidAlive como señal principal. (2) `codegraph` instalado globalmente es shim .ps1 → `Start-Process` directo falla ("%1 no es una aplicación Win32 válida"); usar `cmd /c start /b npx tsx <script>`. (3) `Start-Process` con `-RedirectStandardOutput` a un log bloqueado por otro proceso lanza "El proceso no tiene acceso al archivo" — usar nombre de log nuevo. (4) El check de skill-embeddings freshness (>48h = WARN action rebuild) NO lo regenera el watchtower rebuild — hay que ejecutar `src/skills/skill-embedder.ts` manualmente. (5) El check de web-crawler cache dir lee `.runtime/web-crawler-health.json` (snapshot), no el filesystem — regenerar con `src/web-crawler-init.ts`. (6) FIRECRAWL_API_KEY es el único WARN restante: requiere clave real del usuario (servicio externo pago, free tier 500 créditos/mes); el stack queda en estado `unconfigured` funcional.

---
*Imported from Engram on 2026-09-06*
