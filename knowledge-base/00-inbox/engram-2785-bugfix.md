---
created: 2026-08-13 04:27:39
tags: [engram, bugfix]
engram_id: 2785
type: bugfix
---

# Fixed 219s autostart hang (npx.cmd wrapper) + dedupe cache + OpenChamber integration

**What**: Fix definitivo del cuelgue de 219s en session-autostart:detached + dedupe de procesos + integración OpenChamber completa
**Why**: El usuario reportó que todos los scripts se demoraban muchísimo (219s) cuando antes tomaban segundos — diagnóstico de rendimiento urgente
**Where**: src/session-autostart-detached.ts, src/core/session-autostart.ts, package.json, src/integrations/openchamber-bridge.ts, src/core/cache-hook-system.ts, config/output-compression.json
**Learned**:
1. **Causa raíz del cuelgue**: `npm run` → `npx.cmd` (wrapper batch de Windows) espera EOF de TODOS los procesos del árbol, ignorando `child.unref()`. El pipeline en sí siempre terminó en ~40s. Fix: `node --import tsx` directo → 0.41s.
2. **Dedupe ineficiente**: mi primer intento hacía 1 llamada PowerShell por lazy step (~1s c/u) = 75s extra. Fix: UNA consulta PowerShell cacheada que captura todos los scripts activos → pipeline síncrono 101s → 28.5s.
3. **MAX_LAZY_CONCURRENCY** 5→2 suaviza picos de CPU sin perder throughput.
4. **Falsos positivos case-insensitive**: en Windows `src/Core/x.ts` resuelve a `src/core/x.ts` — el escaneo de refs debe usar lowercase para no marcar refs válidas como obsoletas.
5. La sesión de opencode autónoma creó integración OpenChamber (bridge + cache SQLite + compression lite 85% corregido de 109.8% inflado) — todo verificado typecheck/lint/watchtower 89/89.
6. Commits: 1fc0cc51 (wrapper), bbd26033 (dedupe), f02efb65 (417 refs obsoletas), 677e0b24 (OpenChamber), 33e100c5 (reporte)

---
*Imported from Engram on 2026-09-06*
