---
created: 2026-08-29 17:05:04
tags: [engram, pattern]
engram_id: 3271
type: pattern
---

# Homologación visual de presentations

**What**: Alineé la familia visual de docs/presentations con los tokens del UI Standard/Analytics, incorporé logo GV local y favicon dinámico, estados focus visibles, fondo grid y fallbacks tipográficos locales; retiré referencias a Google Fonts.
**Why**: Homologación visual quirúrgica sin romper contenido/i18n y con operación offline-first.
**Where**: docs/presentations/assets/css/gv.css, docs/presentations/assets/js/gv.js, docs/presentations/assets/logo.svg, heads de HTML de docs/presentations.
**Learned**: Las páginas CMS excluidas no usan i18n de presentación; el validador debe omitir solo las comprobaciones sec_*/c_* para ellas, manteniendo checks estructurales y de assets.

---
*Imported from Engram on 2026-09-06*
