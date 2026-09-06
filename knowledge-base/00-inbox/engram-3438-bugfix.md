---
created: 2026-08-31 03:14:40
tags: [engram, bugfix]
engram_id: 3438
type: bugfix
---

# Delivery regression fixture and overlap validation

**What**: Añadida una regresión real para `syncPathsFromSource` con repositorio Git fixture temporal: verifica que cambios source→target se materializan en worktree y el source queda intacto. `loadIntent` ahora rechaza paths solapados entre commit groups. `syncPathsFromSource` preserva el patch completo para evitar corrupción por trim.
**Why**: Cerrar el riesgo operativo principal del delivery y evitar commits atómicos ambiguos o pérdida de cambios.
**Where**: `tests/unit/delivery-git-adapter.test.ts`, `src/delivery/git-adapter.ts`, `src/delivery/cli.ts`.
**Learned**: Un test útil necesita dos SHAs y un worktree real; el output de `git diff --binary` no debe recortarse antes de `git apply`.

---
*Imported from Engram on 2026-09-06*
