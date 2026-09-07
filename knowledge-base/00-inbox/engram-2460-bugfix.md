---
created: 2026-08-01 16:08:25
tags: [engram, bugfix]
engram_id: 2460
type: bugfix
---

# Fixed stale .ps1 dashboard references in docs (PS1→TS migration)

**What**: Documentación del stack corregida tras la migración PS1→TS del dashboard. AGENTS.md, .opencode/skills/dashboard/SKILL.md + 3 references (troubleshooting, architecture, key-concepts), README.md, docs/operations/PRODUCTION-RUNBOOK.md y docs/guides/OPERATION-GUIDE.md apuntaban a scripts .ps1 inexistentes.
**Why**: La migración TS ya ocurrió (src/dashboard-common.ts, dashboard-ws-autostart.ts, dashboard-start.ts, dashboard-stop.ts) pero la documentación quedó con rutas obsoletas, lo que causaba fallos al seguir los comandos documentados (watchtower detectó dashboard-ws FAIL porque nadie podía reiniciarlo con la ruta documentada).
**Where**: AGENTS.md, .opencode/skills/dashboard/{SKILL.md, references/*.md}, README.md, docs/operations/PRODUCTION-RUNBOOK.md, docs/guides/OPERATION-GUIDE.md
**Learned**: (1) La migración PS1→TS ya se documenta en config/ps1-ts-migration.json y .archive/scripts/ps1-legacy/. (2) Las referencias restantes .ps1 en .archive/, docs/GAPS-BACKLOG.md y LESSONS-LEARNED son históricas/intencionales — no tocar. (3) Dashboard WS se reinicia con `npx tsx src/dashboard-ws-autostart.ts`; el pipeline ya lo cubre como step lazy dashboard-ws-start.

---
*Imported from Engram on 2026-09-06*
