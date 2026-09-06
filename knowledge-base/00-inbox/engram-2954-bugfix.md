---
created: 2026-08-22 03:04:25
tags: [engram, bugfix]
engram_id: 2954
type: bugfix
---

# UX: windowsHide en todos los spawns (18 módulos)

**What**: Eliminados los flashes de ventanas CMD visibles en Windows: 18 módulos con ~30 llamadas spawn/spawnSync/execFile sin `windowsHide: true` fueron parcheadas (commit d54a409f). Verificado: 0 spawn sites sin windowsHide en src/, tsc --noEmit limpio.
**Why**: El usuario reportó "ráfaga de cmd" al arrancar procesos del stack — los delegadores cloud disparaban npx tsx tracing/audit visible en cada delegación, chaos-engineering hacía taskkill visible, etc. El core (run-command.ts, session-autostart.ts, launchers dashboard) ya estaba blindado; los módulos periféricos no.
**Where**: src/agents/sdd-apply.ts, sdd-verify.ts, src/content-operations/cli.ts, src/aws-delegator.ts, src/azure-delegator.ts, src/chaos-engineering.ts, src/coverage-runner.ts, src/engram-judgment-mutation-test.ts, src/engram-session-bridge.ts (string generado node -e), src/installer-bootstrap.ts, src/installer-doctor.ts, src/model-fallback-orchestrator.ts, src/module-maturity.ts, src/performance-analyzer.ts, src/test-runner-optimized.ts, src/token-spike-guard.ts, src/universal-task-wrapper.ts, src/video-agent.ts
**Learned**: Regla del stack: TODA llamada child_process debe incluir windowsHide:true (y detached+unref+stdio:'ignore' para daemons). Para auditar regresiones: escanear archivos con spawn/exec que NO contengan 'windowsHide'. apps/web-dashboard/server quedó verificado limpio.

---
*Imported from Engram on 2026-09-06*
