---
created: 2026-09-02 11:39:29
tags: [engram, bugfix]
engram_id: 3611
type: bugfix
---

# Presentations corregido a marca canónica v2 Premium (#0F1115/Space Grotesk)

**What**: Corrección de la marca canónica en docs/presentations: aplicada la paleta/fuente OFICIAL v2 Premium (bg #0F1115, display Space Grotesk) según docs/brand/BRAND-DECISION-2026-09-01.md, reemplazando la paleta incorrecta del design-system alpha (bg #121212, Orbitron).
**Why**: El usuario notó que presentations "no veía el nuevo diseño". Diagnóstico: el stack tenía DOS definiciones de marca oficiales que NO coincidían — docs/brand (v2 Premium #0F1115/Space Grotesk, decidida hoy) vs design-system alpha ADR-0026 (#121212/Orbitron). La decisión oficial del día (BRAND-DECISION) manda.
**Where**: docs/presentations/assets/css/gv.css (tokens bg/surface/text/glass + --display + wordmark hero), docs/presentations/STACK-FACTS-BRIEF.md.
**Learned**: (1) BRAND-DECISION-2026-09-01.md es la fuente canónica de marca del stack: v2 Premium (bg #0F1115, purple #a78bfa, cyan #22d3ee, display Space Grotesk, glass refinado, outExpo-lite). (2) El logo oficial v2.1 = monograma v1 + gradiente #A78BFA→#22D3EE (assets/logo.svg). (3) La variante design-system alpha ADR-0026 (#121212/Orbitron) queda DEPRECADA como histórico. (4) Verificación Playwright: bodyBg ahora rgb(15,17,21) y heroFont/wordmarkFont = "Space Grotesk" en 6 páginas, 0 console errors. (5) GOTCHA: azúcar—los tokens de surface oklch también derivaban del #121212, hay que actualizarlos junto con los hex.
**Cambio**: Corregidos --gv-bg #0F1115, --gv-bg-deep #090C11, --gv-surface #1a1f2a, --gv-surface-raised #252b38, --gv-text #e8eef4, --gv-muted #c4cdd8, --gv-cyan-deep #0891b2, glass/glow refinados, añadida --display='Space Grotesk', wordmark y hero h1 → Space Grotesk. Resultado: 0 residuos de #121212/Orbitron en presentations, 6 páginas verificadas con la paleta oficial.

---
*Imported from Engram on 2026-09-06*
