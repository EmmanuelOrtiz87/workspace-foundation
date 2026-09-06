---
created: 2026-08-25 04:59:56
tags: [engram, bugfix]
engram_id: 3113
type: bugfix
---

# session-current.json mystery resolved - orphaned processes were cause

**What**: Resuelto el misterio del borrado intermitente de `.session/session-current.json`. Causa raíz: NO existe deleter en el código normal — los deletes históricos fueron daño colateral de procesos huérfanos semi-matados (pipelines concurrentes con lifecycles superpuestos creados por kills de debugging). El escritor periódico (~30s) es el plugin opencode (path update-if-exists, campos totalInputTokens/totalOutputTokens/totalTokens/cost confirmados por evolución de contenido del archivo carnado).

**Why**: El archivo desaparecía minutos tras crearse; se investigó con probe forense v2 (fs.watch + snapshot de procesos) y estrategia de carnado manual. 11 falsos sospechosos eliminados en total.

**Where**: scripts/debug/session-file-probe.ts (probe forense reutilizable), src/session-cleanup-start.ts (defensa aplicada), tsconfig.json (include scripts/debug).

**Learned**: Ecosistema completo documentado: autostart crea archivo con merge → phase-0 session-manager lo sobrescribe (formato completo timezone+timeZone) → plugin opencode actualiza tokens por turno (update-if-exists) → close-orchestrator SOLO toca .active-session.json. Defensa quirúrgica: removeStaleSessions ahora hace `if (f === 'session-current.json') continue;` — protege contra clock-skew y sweeps accidentales. El probe sobrevive en scripts/debug/ como herramienta de diagnóstico; requería agregar "scripts/debug/**/*.ts" al include de tsconfig.json para pasar lint.

---
*Imported from Engram on 2026-09-06*
