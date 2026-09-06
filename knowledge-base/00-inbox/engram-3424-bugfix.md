---
created: 2026-08-31 02:49:44
tags: [engram, bugfix]
engram_id: 3424
type: bugfix
---

# Delivery worktree isolation and CI gate fixes

**What**: Corregí el flujo del delivery orchestrator para crear el worktree aislado antes de cualquier mutación Git y ejecutar stage/commit/currentSha/push usando su cwd; permití la transición reviewed→staged y aseguré la creación de directorios intermedios para nombres de rama con `/`. Corregí el test E2E para apuntar a `src/sdd/check-sdd-gate.ts` y normalicé el newline final del informe CI.
**Why**: La auditoría detectó que delivery modificaba/commiteaba el checkout raíz y que CI fallaba por una ruta obsoleta del SDD gate y MD047.
**Where**: `src/delivery/cli.ts`, `src/delivery/state-machine.ts`, `src/delivery/git-adapter.ts`, `tests/e2e/release-workflow.test.ts`, `docs/sessions/2026-08-30-ci-green-pr171.md`.
**Learned**: Los nombres de rama `delivery/<id>-<target>` requieren `mkdir(dirname(worktreePath))`; el delivery todavía merece una prueba de regresión específica y una revisión del modelo de transferencia de cambios desde la rama fuente al worktree basado en target SHA.

---
*Imported from Engram on 2026-09-06*
