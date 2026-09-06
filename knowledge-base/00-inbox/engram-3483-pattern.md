---
created: 2026-08-31 15:00:02
tags: [engram, pattern]
engram_id: 3483
type: pattern
---

# Clases daemon por-app (cms/prompts) + CC en AGENTS.md — regla DAEMON_CLASSES

**What**: Clases daemon por-app en DAEMON_CLASSES (src/core/process-hygiene.ts): cms-api, cms-vite, prompts-api, prompts-vite (pidfiles app-*.pid del CC, respawn 'client', recycleAged false) + vite-server estrechado a /web-dashboard[\/]node_modules[\/]vite[\/]bin[\/]vite\.js/ (antes matcheaba CUALQUIER vite y flaggeaba los vites de otras apps como "duplicados" del dashboard). CC registrado en AGENTS.md con sección propia (## command-center). Commit cc855794 en origin/main.
**Why**: Con 5 apps teniendo cada una su vite (5173-5176), el match genérico del reaper producía falsos duplicados con keeper flip-flop entre corridas → watchtower FAIL.
**Where**: src/core/process-hygiene.ts, AGENTS.md
**Learned**: (1) REGLA DEL STACK: cada app nueva con procesos propios DEBE registrar sus clases en DAEMON_CLASSES con match por path específico — los matches genéricos rompen la detección de duplicados cuando el stack crece. (2) El orden importa: first match wins — clases específicas antes que genéricas. (3) respawn 'client' + recycleAged false para apps gestionadas por el usuario desde el CC (el reaper no debe reciclarlas). (4) Los push pueden ser rechazados por carreras con sesiones paralelas pero el commit aterrizar igual — siempre git fetch y verificar antes de reintentar. (5) Watchtower 113/113 PASS 0 WARN 0 FAIL con las 5 apps operables desde el CC.

---
*Imported from Engram on 2026-09-06*
