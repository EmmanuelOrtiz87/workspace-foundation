---
created: 2026-08-31 16:22:51
tags: [engram, pattern]
engram_id: 3496
type: pattern
---

# Content OS shared GV styling

**What**: Refactoricé el styling de Content OS a clases compartidas GV, eliminando constantes de colores y el helper btn() del componente.
**Why**: Alinear Content OS con el sistema CSS común del CMS sin modificar lógica ni otras apps.
**Where**: apps/content-cms/src/contentos.tsx, apps/content-cms/src/styles.css
**Learned**: Las clases gv-btn cubren primary/ghost/success/danger/accent; gv-status-badge cubre estados de slots; los colores de plataforma permanecen como datos de PALETTE y los inline restantes son layout/dinámica de previews.

---
*Imported from Engram on 2026-09-06*
