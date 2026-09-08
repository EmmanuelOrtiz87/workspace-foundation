---
created: 2026-09-07 05:25:18
tags: [engram, bugfix]
engram_id: 3770
type: bugfix
---

# Academy multi-course: completados tracks ia-fundamentos e ia-intermedio (100% PASS)

**What**: Completé el trabajo pendiente de los cursos de la academia (`apps/academy-web/data/courses/`). El validador `node scripts/validate-multi-course.mjs` pasó de 4 FAILs a 100% PASS en los 3 cursos (gentle-vanguard 103 lec, ia-fundamentos 96 lec, ia-intermedio 69 lec).

**Why**: El usuario pidió completar lo faltante de los tracks de ia-fundamentos (Nivel 1) e ia-intermedio (Nivel 2) que un sub-agente había dejado a medias.

**Where**:
- `ia-fundamentos/content-multimedia.js`: +2 lecciones (edicion-imagen-profesional, produccion-multimedia-end-to-end) → 9 lec
- `ia-fundamentos/content-asistentes.js`: +2 lecciones (custom-gpts-en-profundidad, claude-projects-y-gemini-gems) → 9 lec
- `ia-intermedio/content-function-calling-tools.js`: +3 lecciones (parallel-calls-y-multi-tool, errores-retries-y-fallbacks, testing-y-observabilidad-de-tools) → 7 lec
- `ia-intermedio/content-proyectos-reales.js`: +1 lección (monitoreo-y-optimizacion) → 6 lec
- `ia-intermedio/content-agentes-frameworks.js`: +diagrama mcp-architecture + header 7→8
- `ia-intermedio/glossary.js`: REWRITE objeto {term: def} → array [{term, cat, def}] (66 términos, 7 categorías)
- `ia-intermedio/i18n.js`: REWRITE window.GV_I18N → window.GV_COURSE_I18N + keys genéricas → track IDs (3 locales)

**Learned**:
1. El sub-agente usó los diagramas pero con typo sistemático `:::diagram X::>` (con `>` en vez de `:::`). Corregir 4 typos: multimedia (voice-cloning-flow, 2 ocurrencias → usar replaceAll), creacion-contenido (content-pipeline), agentes-frameworks (agentic-loop-cycle), fine-tuning (llm-training-lifecycle).
2. El validador exige: glossary = array de {term, cat, def} (NO objeto), i18n = window.GV_COURSE_I18N[courseId] con keys = track IDs exactos de tracks.js en 3 locales (es/en/pt).
3. Formato de lección: id/title/minutes(10-16)/type:"curso"/md con \n literales; push final window.GV_CONTENT['<curso>'].lessons.push(...window.GV_CONTENT['<track>'].lessons).
4. Verificación sintaxis: node -e "new Function(require('fs').readFileSync('ruta','utf8'))" con rutas / (las \ rompen escaping).
5. Los diagramas válidos se definen en app.js (DIAGRAMS) — NO inventar nombres.

---
*Imported from Engram on 2026-09-08*
