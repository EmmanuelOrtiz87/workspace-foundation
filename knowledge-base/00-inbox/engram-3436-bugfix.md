---
created: 2026-08-31 03:14:00
tags: [engram, bugfix]
engram_id: 3436
type: bugfix
---

# Delivery worktree sync regression

**What**: Añadí una prueba real de Node para verificar que syncPathsFromSource aplica cambios source→worktree target sin mutar el checkout fuente; hice sourceCwd opcional y preservé el output completo del diff para evitar parches corruptos por trim.
**Why**: Cubrir la regresión de materialización aislada del delivery/worktree en un fixture Git temporal de Windows.
**Where**: src/delivery/git-adapter.ts, src/delivery/cli.ts, tests/unit/delivery-git-adapter.test.ts
**Learned**: Los worktrees temporales deben crearse fuera del checkout fixture para que no aparezcan como untracked; Windows puede normalizar finales de línea a CRLF. También se bloquean paths solapados entre commit groups.

---
*Imported from Engram on 2026-09-06*
