---
created: 2026-08-17 05:29:29
tags: [engram, architecture]
engram_id: 2869
type: architecture
---

# Chaos Engineering Engine nativo TS

**What**: Implementado motor de Chaos Engineering nativo en TS con 3 experimentos controlados y seguros (config-corruption, session-manifest-corruption, dashboard-ws-kill).
**Why**: El roadmap marcaba "No chaos testing (resilience under failure)" como gap; la normativa NORMATIVAS-CHAOS-ENGINEERING.md era teórica sin implementación.
**Where**: src/chaos-engineering.ts (runExperiment, runAll, saveResults, loadResults, formatResults, CLI list/run/run-all/report), tests/unit/chaos-engineering.test.ts (10 tests), package.json (chaos:list/run/run-all/report), .session/chaos/results.json.
**Learned**: session-autostart.ts lanza daemons lazy que nunca terminan — spawnSync bloqueante cuelga; usar verificación determinista JSON.parse en vez de lanzar el pipeline. El experimento dashboard-ws-kill se salta si el WS no corre (precondición). Los experimentos siempre restauran estado con try/finally (backup .chaos-bak). Commit: afe4e331.

---
*Imported from Engram on 2026-09-06*
