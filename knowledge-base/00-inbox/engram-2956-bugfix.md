---
created: 2026-08-22 13:32:38
tags: [engram, bugfix]
engram_id: 2956
type: bugfix
---

# pnpm frozen-lockfile falso positivo con node_modules poblado

**What**: ERR_PNPM_OUTDATED_LOCKFILE en CI (14 jobs) mientras local pasaba. Causa doble: (1) pnpm-workspace.yaml tenía bloque `resolutions:` duplicando `overrides:` — pnpm v11 aplica resolutions también a deps directas, así el specifier efectivo de js-yaml era >=4.3.1 pero el lockfile grabó ^5.2.3; (2) local `pnpm install --frozen-lockfile` pasaba como FALSO POSITIVO porque con node_modules poblado pnpm cortocircuita la validación.
**Why**: El bloque resolutions era legacy de f7d27692; pnpm v11 cambió semántica. La validación real solo ocurre en install limpio.
**Where**: pnpm-workspace.yaml (bloque resolutions eliminado), pnpm-lock.yaml (specifier importer js-yaml regenerado a '>=4.3.1'). Fix en commit 8e31f089.
**Learned**: NUNCA confiar en frozen-lockfile local con node_modules presente — validar SIEMPRE en worktree limpio (`git worktree add $env:TEMP\wt HEAD && cd wt && pnpm install --frozen-lockfile`). No duplicar overrides en resolutions: pnpm v11 las aplica a deps directas y desincroniza specifiers del lockfile.

---
*Imported from Engram on 2026-09-06*
