---
created: 2026-08-31 03:09:41
tags: [engram, architecture]
engram_id: 3434
type: architecture
---

# Delivery materializes source changes safely

**What**: Extendí delivery para materializar en el worktree creado desde `origin/<target>` los cambios allowlisted de la rama fuente (`currentSha`) mediante un parche `git diff --binary target source` + `git apply --index`, antes de cada commit group. El checkout operador sigue sin mutarse y push usa el worktree aislado.
**Why**: Corregir la brecha restante: crear un worktree desde target sin transferir cambios de la rama fuente dejaba delivery sin contenido para commitear.
**Where**: `src/delivery/git-adapter.ts` (`syncPathsFromSource`), `src/delivery/cli.ts`.
**Learned**: El flujo requiere source SHA distinto de target SHA; grupos superpuestos deberían rechazarse en una iteración futura. Verificado con typecheck, lint, profiles:check, diff-check y E2E release/cache.

---
*Imported from Engram on 2026-09-06*
