---
created: 2026-08-01 06:25:22
tags: [engram, bugfix]
engram_id: 2441
type: bugfix
---

# Timeout del autostart: causa raíz en Windows (daemons heredan pipe)

**What**: El timeout artificial de `npx tsx src/session-autostart.ts` en Windows fue diagnosticado y fixeado. El pipeline SÍ completaba todo el trabajo (`[READY]`, 30/30 steps, 66 lazy, 0 fallos) y `process.exit(0)` mata el proceso principal, pero los lazy steps daemon (ej. `ci-rollback-engine.ts` con `setInterval` health-check en línea 95) nunca terminan y, spawnados con `shell:true` en Windows (cadena `cmd.exe → npx.cmd → node`), heredan los handles del pipe de stdout del shell llamador → el shell espera EOF de un pipe que nunca se cierra → timeout.
**Why**: El stack usaba `shell:true` para lazy steps (requerido para npx.cmd en Windows) sin desacoplar los daemons del pipe del padre.
**Where**: src/Core/session-autostart.ts — fix: `process.exit(0)` al final de main() + `detached: true` en el spawn de startLazyStep.
**Learned**: Test de control: script trivial npx tsx + process.exit(0) retorna en 0.8s → el wrapper npx/tsx NO es el problema; es específico de daemons que heredan el pipe. En Windows, `detached:true` + `stdio:'ignore'` es lo correcto para lazy daemons.

---
*Imported from Engram on 2026-09-06*
