---
created: 2026-08-01 06:25:30
tags: [engram, pattern]
engram_id: 2442
type: pattern
---

# Lanzador detached nativo del autostart (session-autostart-detached.ts)

**What**: Nuevo lanzador nativo `src/session-autostart-detached.ts` + script npm `session:autostart:detached` que spawna el pipeline del autostart con `detached:true` + `windowsHide:true` + `unref()` + `node --import tsx` directo. Retorna en ~0.8-1.2s (exit 0) y el pipeline corre completo en background (66/66 lazy steps confirmados).
**Why**: Operar el stack sin bloquear al llamador (CI, hooks, shells de agentes) — el autostart síncrono colgaba el shell por los daemons heredando el pipe en Windows.
**Where**: src/session-autostart-detached.ts (nuevo), package.json (script `session:autostart:detached`), commit c7a56c16.
**Learned**: BUG PENDIENTE: `.runtime/autostart-detached.log` queda vacío y `fs.openSync` dio `EBUSY: resource busy or locked` (una instancia previa retiene el fd). Fix recomendado: matar procesos detached colgados + usar log con timestamp (`autostart-detached-<ISO>.log`) para inmunidad a EBUSY. El logger del stack (`src/utils/logger.ts`) solo escribe a console.log, no persiste.

---
*Imported from Engram on 2026-09-06*
