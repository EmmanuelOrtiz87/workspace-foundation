---
created: 2026-09-01 05:33:39
tags: [engram, decision]
engram_id: 3569
type: decision
---

# apps/archify commiteada en repo git de apps/ (5d1d9ec1)

**What**: Commitee la app archify en el repo git propio de apps/ (git independiente, rama master) como commit `5d1d9ec1` — "feat(archify): app nativa de diagramas de sistemas interactivos — motor Archify absorbido".

**Why**: Las apps del stack viven en `apps/` con su propio repo git (des-trackeadas del repo principal). Consistencia con el modelo local-first establecido.

**Where**: apps/ (repo master). 88 archivos commiteados: engine (69) + server + src + README + .gitignore.

**Learned**:
- Creé `.gitignore` global en apps/ (`node_modules/`, `dist/`, `*.log`) — las demás apps trackeaban node_modules completos (pesado, ej web-dashboard 35482 archivos); archify es más limpio: solo código fuente + engine (0 node_modules/dist en el commit)
- El repo apps/ está en rama `master` con baseline 7fcce64e, c5c4337d, 293dfd75
- El command-center para funcionar con el nuevo registro requiere reiniciarse (usa APPS_REGISTRY en memoria del proceso); tras `cc stop` + `cc start` ya lista archify
- La app quedó corriendo: api (PID), vite (5179), status running, gestionada por command-center
- .gitignore de apps/ no existía antes — lo creé; node_modules de apps existentes ya estaban trackeados (histórico)

---
*Imported from Engram on 2026-09-06*
