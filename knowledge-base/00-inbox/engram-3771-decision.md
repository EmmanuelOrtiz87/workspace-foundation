---
created: 2026-09-07 05:57:06
tags: [engram, decision]
engram_id: 3771
type: decision
---

# Academy Nivel 3 (ia-avanzado) completo — 49 lecciones, validador 100% PASS

**What**: Curso ia-avanzado (Nivel 3) completado en apps/academy-web: 8 tracks, 49 lecciones (mlops-llms 7, fine-tuning-avanzado 6, multimodalidad 6, real-time-ai 6, safety-alignment 6, knowledge-graphs 6, ai-governance 6, ai-research 6), glossary.js (43 términos, formato {term,cat,def}) e i18n.js (window.GV_COURSE_I18N['ia-avanzado'] con es/en/pt y keys = 8 track IDs). Registrado en data/courses.js. Validador multi-course 100% PASS con los 4 cursos (gentle-vanguard 103, ia-fundamentos 96, ia-intermedio 69, ia-avanzado 49 = 317 lecciones totales).
**Why**: El usuario pidió avanzar al Nivel 3 tras completar Niveles 1-2. course.json ya declaraba los 8 content files + glossary + i18n, solo faltaba escribir los archivos.
**Where**: apps/academy-web/data/courses/ia-avanzado/ (content-ai-governance.js, content-ai-research.js, glossary.js, i18n.js nuevos; content-multimodalidad.js con lección voice-cloning-avanzada; headers corregidos en mlops-llms y multimodalidad)
**Learned**: 1) GOTCHA: comillas dobles sin escapar dentro de strings "md" rompen el JS (error 'Unexpected identifier'): usar comillas simples dentro del md. 2) Diagramas usados (6): rag-architecture, voice-cloning-flow, function-calling, ia-stack-completo, ia-research-loop, ai-models-landscape — todos existen en app.js DIAGRAMS. 3) El validador mide glossary como ARRAY (.length) e i18n con 3 locales + keys = track IDs exactos. 4) /apps/ está en .gitignore → contenido solo en working tree.

---
*Imported from Engram on 2026-09-08*
