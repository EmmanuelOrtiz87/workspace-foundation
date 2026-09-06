---
created: 2026-08-29 05:41:13
tags: [engram, architecture]
engram_id: 3226
type: architecture
---

# N8 pre-push gate compuesto — Fase 6 completa

**What**: N8 (pre-push gate compuesto) completado — Fase 6 del plan (N1-N9) queda COMPLETA.
**Why**: Reducir fricción del pre-push (12 checks secuenciales → 1 gate paralelo con caché).
**Where**: src/git/prepush-gate.ts (nuevo), .lefthook.yml (pre-push → gate), package.json (prepush:gate/prepush:gate:force), src/orchestration/adaptive-router.ts (fix lint). Commit 27652850.
**Learned**: (1) El gate corre 12 checks en pool de concurrencia 4 — cold ~85s, warm 0.23s (meta <60s/<5s). (2) Hash de árbol = sha256(HEAD + git status --porcelain + package.json + pnpm-lock.yaml) — captura staged/unstaged/untracked + cambios de dependencias. (3) Solo se cachean runs VERDES; los fallos siempre re-ejecutan. (4) En ESM no usar require() — importar spawnSync al top. (5) El lint del repo es estricto (--max-warnings 0) — variables declaradas sin usar rompen el gate.

---
*Imported from Engram on 2026-09-06*
