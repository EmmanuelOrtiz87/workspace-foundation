---
created: 2026-08-28 04:28:20
tags: [engram, decision]
engram_id: 3203
type: decision
---

# gv-analytics checkpoint 2: Nexus + export + MCP profundo + re-tema GV

**What**: Checkpoint 2 de gv-analytics (app independiente Atlassian). Implementado y verificado: (1) persistencia de reportes en Nexus, tabla `gv_analytics_reports` en `.runtime/gentle-vanguard.db` + endpoints `GET /api/reports` y `GET /api/reports/:id`; (2) exportacion MD/HTML/DOCX/PDF via `GET /api/reports/:id/export?format=` (PDF con Chrome/Edge headless --print-to-pdf windowsHide, probado 102KB real); (3) MCP `gv-analytics-atlassian` v0.2.0 con 6 tools (jira_issue, confluence_page, bitbucket_pr con diff, search Jira+Confluence); analyzeInput ahora trae issues vinculados y docs Confluence que mencionan el ticket; (4) UI con menu export + panel historial; (5) re-tema completo a marca GV/Academy (cyan #22d3ee, violeta #a78bfa, bg #0a0e17, gradiente 135deg). Build verde + smoke test end-to-end OK.
**Why**: Pedidos del usuario: exportacion PDF/DOCX, historial para continuidad entre sesiones/agentes, lectura profunda Jira/Confluence/Bitbucket, y que la app use los mismos colores/fuente/estructura que Academy.
**Where**: apps/gv-analytics/server/{reports,export,atlassian,mcp,index}.ts, apps/gv-analytics/src/{App.tsx,styles.css}, docs/analytics/PROGRESS.md
**Learned**: Servidor viejo de sesion anterior puede quedar ocupando el puerto 4754 (matarlo con netstat+taskkill antes de testear). MCP SDK y zod venian por hoisting de pnpm sin estar declarados — ahora estan en package.json del app. docx v9: TextRun no acepta options como 2do argumento posicional.

---
*Imported from Engram on 2026-09-06*
