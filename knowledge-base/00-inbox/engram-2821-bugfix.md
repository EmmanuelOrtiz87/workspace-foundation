---
created: 2026-08-14 04:31:54
tags: [engram, bugfix]
engram_id: 2821
type: bugfix
---

# KB manager: templates perdían contenido del usuario

**What**: Fix del knowledge-base-manager.ts: el contenido del usuario se perdía al crear notas con template (solo se reemplazaban tags y título, el cuerpo quedaba vacío)
**Why**: Al documentar las capacidades de Fase 1/2 en la KB, la nota ADR se creó con el cuerpo vacío porque el template decision.md no tenía placeholder para el contenido
**Where**: src/knowledge-base-manager.ts (createNote, línea ~221), knowledge-base/06-templates/decision.md
**Learned**: El fix fue agregar `.replace(/\{\{content\}\}/g, content || '')` en createNote() y el placeholder `{{content}}` en la sección Summary del template. Verificado: create-note ahora inserta el contenido correctamente.

---
*Imported from Engram on 2026-09-06*
