---
created: 2026-08-31 04:32:11
tags: [engram, decision]
engram_id: 3460
type: decision
---

# PR #172 merged, root synced to main

**What**: PR #172 fusionado a main (merge commit 67fe87a9) con bypass admin; PR #171 cerrado como supersedido. Checkout raíz reseteado de integration/gv-stack-normalization (94 commits redundantes) a origin/main, preservando archivos sucios locales (tokens, coverage, opencode.json, model-health-registry, provenance). Watchtower: 102 PASS / 2 WARN / 0 FAIL.
**Why**: El trabajo de 94 commits locales ya estaba integrado vía squash en PR #172; la rama local quedó redundante y le faltaban los fixes finales de CI (circuit-breaker, process-hygiene, witr).
**Where**: C:\Workspace_local\gentle-vanguard (rama integration/gv-stack-normalization ahora == origin/main 67fe87a9). PRs #171 (CLOSED) y #172 (MERGED).
**Learned**: El directorio residual C:\Workspace_local\gentle-vanguard-pr171-squash quedó como carpeta vacía bloqueada por un proceso transitorio (no identificable vía Win32_Process); no afecta funcionalidad. El stash preexistente stash@{0} se conservó intacto.

---
*Imported from Engram on 2026-09-06*
