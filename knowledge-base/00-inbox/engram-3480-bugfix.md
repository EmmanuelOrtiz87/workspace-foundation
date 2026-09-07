---
created: 2026-08-31 14:30:23
tags: [engram, bugfix]
engram_id: 3480
type: bugfix
---

# CC completo: stop funcional (legacy+port-owner+watchdogs), apps/ + README, smoke aislado

**What**: Command Center 100% operativo y cerrado: (1) stop() arreglado — cadena pidfile propio → legacy pidfiles → port-owner fallback (Get-NetTCPConnection), y watchdogs del dashboard (ws/vite) se matan PRIMERO para evitar resurrección; verificado en vivo con analytics/dashboard stop+start. (2) CC reubicado a apps/command-center/ con README.md completo (sesiones paralelas commitearon el move + fixes). (3) CC_PID_FILE env override en server.ts para que tests/smoke usen pidfile aislado y nunca pisen el de producción. (4) Smoke test resiliente: presence check de las 4 core apps en vez de deep-equal (sesiones paralelas siguen agregando apps — ya hay 5ta: prompts/Prompt Studio en 5176). (5) gv cc stop con fallback por puerto cuando el pidfile se pierde.
**Why**: El botón Detener no hacía nada (stop solo mataba procesos con pidfile propio; los arrancados por otros launchers se saltaban) y el dashboard se resucitaba por sus watchdogs. Además el smoke test corrompía el pidfile de producción.
**Where**: apps/command-center/server.ts, apps/command-center/README.md, src/cli/gv.ts, tests/smoke/command-center-smoke.mjs, src/core/process-hygiene.ts
**Learned**: (1) stop() de un gestor de procesos DEBE cubrir: pidfiles propios + legacy + port-owner fallback, y matar watchdogs antes que servers. (2) Tests que spawn-een servers NUNCA deben tocar pidfiles/puertos de producción — usar env overrides (CC_PID_FILE, CC_PORT). (3) Los asserts de smoke sobre registros dinámicos deben ser presence-checks, no deep-equal. (4) Las sesiones paralelas commitean rápido — verificar git log/diff antes de asumir qué está pendiente. (5) El pidfile puede tardar >5s en aparecer tras cc start (cold start tsx) — no asumir fallo prematuramente.

---
*Imported from Engram on 2026-09-06*
