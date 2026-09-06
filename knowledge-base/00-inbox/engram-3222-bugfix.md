---
created: 2026-08-29 04:19:06
tags: [engram, bugfix]
engram_id: 3222
type: bugfix
---

# F2.2 regresión de path en session-autostart-detached.ts

**What**: El launcher detached del pipeline de sesión (`src/session/session-autostart-detached.ts`) tenía una regresión de path-computation tras el move F2.2: `ROOT = path.resolve(import.meta.dirname, '..')` — al estar el archivo en `src/session/`, ROOT apuntaba a `src/` en vez de la raíz del repo. El child spawn apuntaba a `src/src/session/session-autostart.ts` (no existe) y fallaba silenciosamente (stdio:'ignore' + detached:true) — el pipeline nunca corría y los daemons (dashboard-ws, codegraph) nunca arrancaban. Fix: `ROOT = path.resolve(import.meta.dirname, '..', '..')`. Verificado: pipeline corre con --force, watchtower 102 PASS / 0 FAIL. Commit 927ccac9.
**Why**: F2.2 movió archivos de src/ raíz a subdirectorios de dominio; cualquier `resolve(import.meta.dirname, '..')` que asumía estar en src/ ahora apunta a src/ en vez de la raíz del repo.
**Where**: src/session/session-autostart-detached.ts
**Learned**: Tras cada move de archivo en F2.2 hay que auditar path-computation (`resolve(import.meta.dirname, '..')` → `'..','..'`). El fallo del launcher detached es SILENCIOSO (stdio ignore) — el síntoma es "no se crea log nuevo en .runtime/autostart-detached-*.log". El pipeline deduplica con lock (Recent session bootstrap is active) — usar `--force` para bypass. El bash tool mata el árbol de procesos al terminar cada tool call → daemons solo sobreviven vía pipeline detached (FILE descriptor, no pipe).

---
*Imported from Engram on 2026-09-06*
