---
created: 2026-08-31 21:10:50
tags: [engram, architecture]
engram_id: 3547
type: architecture
---

# Repo restructurado: apps local-first con git propio, develop=main, público sin apps

**What**: Restructuración del repo completada — modelo local-first de apps: (1) apps des-trackeadas del stack repo (267 archivos, gitignore apps/), con repo git PROPIO en apps/ (baseline 7fcce64e) para versionado local; (2) develop homologada a main (local + origin en 09ecd09e, backup tag develop-backup-20260831 del head viejo — su contenido ya estaba en main vía squash #169); (3) sync público ejecutado (sync-to-public.ts, develop+main) + apps/ ELIMINADAS del árbol del público (168 archivos, commit f52c6e30) — el sync script puebla pero no limpia viejos, la limpieza fue manual; (4) CI ajustado: Dashboard Tests job removido, dashboard-auto-refresh.yml eliminado.
**Why**: El usuario pidió: repo = motor del stack (public-safe), apps como productos local-first que NO suben al repo, main y develop homologadas, y sync del repo público.
**Where**: .gitignore, apps/.git (repo propio), .github/workflows/reusable-test.yml, develop/main/public remotes
**Learned**: (1) El sync-to-public.ts PUEBLA pero no LIMPIA el target — archivos viejos persisten; tras cambiar la estructura hay que limpiar el público manualmente (o mejorar el script para mirror-cleanup). (2) develop tenía 2 commits 'únicos' que ya estaban en main vía squash #169 — verificar contenido (git diff de archivos clave) antes de asumir divergencia real. (3) git tag SIN -m abre Vim (swap files viejos lo complican) — usar siempre git tag -m. (4) El historial del público aún contiene apps en commits viejos — borrado total requeriría filter-repo (decisión pendiente del usuario).

---
*Imported from Engram on 2026-09-06*
