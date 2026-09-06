# academy-multi-course — NOTES (issues conocidos, decisiones en vivo)

## Issue 1: glosario de gentle-vanguard usa patrón viejo

**Detectado**: 2026-09-06 (después de crear `data/courses/ia-fundamentos/glossary.js` con el patrón por curso).

**Detalle**:
- `data/courses/gentle-vanguard/glossary.js` (movido en PR 1) define `window.GV_GLOSSARY = [...]` (array plano).
- `data/courses/ia-fundamentos/glossary.js` (nuevo) define `window.GV_GLOSSARY['ia-fundamentos'] = [...]` (sub-objeto por curso).

**Riesgo**: cuando PR 2 cargue ambos cursos, el `window.GV_GLOSSARY` global va a tener una mezcla inconsistente (gentle-vanguard en el root, ia-fundamentos en sub-objeto). El shell va a confundirse al buscar el glosario del curso activo.

**Resolución esperada en PR 2 (T2.5 o T2.7)**: actualizar `data/courses/gentle-vanguard/glossary.js` para que use el patrón nuevo:

```js
// Antes:
window.GV_GLOSSARY = [
  { term: '...', cat: '...', def: '...' },
  // ...
];

// Después:
window.GV_GLOSSARY = window.GV_GLOSSARY || {};
window.GV_GLOSSARY['gentle-vanguard'] = [
  { term: '...', cat: '...', def: '...' },
  // ...
];
```

**Acción del worker de PR 2**: leer este notes file, hacer el cambio de patrón en `data/courses/gentle-vanguard/glossary.js` antes de implementar la búsqueda scoped.

**Acción mía (padre)**: avisar al worker PR 2 que lea este file en su briefing. Incluir este fix como T-NEW entre T2.5 y T2.7.

---

## Issue 2: `data/courses.js` ya tiene el curso nuevo (ia-fundamentos)

**Detalle**: actualicé el registry para incluir `ia-fundamentos`. Esto NO está commiteado todavía.

**Riesgo**: el worker de PR 2 puede no saber que el curso existe. Si quiere incluirlo en su commit, debe saber que ya está creado.

**Acción del worker de PR 2**: revisar `data/courses/ia-fundamentos/` antes de mergear. Si los archivos están bien, el shell los va a leer automáticamente cuando se seleccione el curso desde el selector. Si falta algo, agregarlo.

**Acción mía (padre)**: en el próximo briefing al worker, confirmar que el curso nuevo ya existe y no necesita ser creado.

---

## Estado actual del proyecto (2026-09-06 20:18 ART)

| Componente                              | Estado         |
| --------------------------------------- | -------------- |
| PR 1 (estructura + migración)           | ✅ Commiteado (`1b50a8a6`) |
| PR 1 auto-review                        | ✅ Inline (27/27 PASS) |
| PR 2 (refactor app.js)                  | ⏳ Worker corriendo (background) |
| PR 3 contenido (ia-fundamentos seed)    | ✅ Estructura + 3 lecciones completas + 7 stubs en working tree (NO commiteado) |
| Reviewer formal de PR 1                 | ❌ Bloqueado por Token Plan limit (sub-agent verifier no disponible) |

## Próximos pasos

1. Esperar a que el worker de PR 2 termine.
2. Auto-review inline de PR 2 (mismo patrón).
3. Decidir si el commit de PR 2 incluye el curso `ia-fundamentos` o se hace aparte.
4. Commit final + smoke test full.
5. ARCHIVE del SDD (Phase 9).
