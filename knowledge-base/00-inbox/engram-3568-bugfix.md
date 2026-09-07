---
created: 2026-09-01 05:07:51
tags: [engram, bugfix]
engram_id: 3568
type: bugfix
---

# apps/archify — formato JSON IR del motor Archify (schema/layout) y fix de render

**What**: Corregí el bug crítico de render en apps/archify: el JSON IR starter era inválido para el motor, lo que impedía que el visor (iframe) se renderizara. La app quedó funcionando end-to-end (UI → API → motor → artifact → iframe).

**Why**: La app mostraba placeholder vacío porque el render fallaba silenciosamente (validación de schema y layout estrictos del motor Archify).

**Where**: apps/archify/src/App.tsx (STARTER_IR y DeltaView), RESUELTO.

**Learned** (formato JSON IR del motor Archify v2.16.0):
- `schema_version` es NÚMERO entero (1 o 2), no string.
- Los valores de `type` por componente son SOLO: frontend, backend, database, cloud, security, messagebus, external.
- architecture: cada component REQUIERE `pos: [x, y]` (layout libre, NO automático); usa `label`+`type` (no title/kind). connections variant: default|emphasis|security|dashed.
- workflow: requiere `lanes` (array {label}) + cada node con `col`+`lane`.
- sequence: `messages[].y` debe ser >= 160; variant: default|return.
- dataflow: requiere `stages` (array SOLO {label}, sin id); nodes usan stage/row.
- lifecycle: requiere `lanes` (array) + cada state con `col`; state type: start|active|waiting|decision|success|failure|neutral|external.
- El layout de architecture es MUY estricto (constraints de cruce de edges, solape de labels) — un layout manual ingenuo falla con 422. Para delta es MÁS ROBUSTO usar los ejemplos reales del motor (checkout-platform.base/head) que ya validé (html 99900, receipt OK).
- Debug frontend con `--dump-dom` en Chrome headless: el iframe con srcdoc aparece solo cuando el render completa; DOM >700KB indica artifact presente.
- Workflow de debug: validar schema (`/api/validate`) → render (`/api/render`) → capturar 422 → aislar formato correcto por tipo iterativamente.

---
*Imported from Engram on 2026-09-06*
