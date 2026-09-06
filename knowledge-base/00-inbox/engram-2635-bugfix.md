---
created: 2026-08-08 03:57:52
tags: [engram, bugfix]
engram_id: 2635
type: bugfix
---

# Home screen: info-triggers, Layer 4 icon fix, loop legend, lightbox centering

**What**: Mejoras completas a la pantalla de inicio (docs/presentations/index.html + 2 SVGs + gv.js/gv.css/i18n.js):
1. Info-triggers "i" en 6 secciones (63 en total: Autonomous 2, Data 9+caption Nexus, Executive 12, Feature Matrix 38, Skills 9, Metrics 2) con `data-i18n-title="tip_*"` + fallback `title`.
2. Fix icono Layer 4: `bi-brain` NO existe en bootstrap-icons 1.11.3 (verificado en el CDN) → reemplazado por `bi-book` (semánticamente correcto para Memory & Knowledge).
3. Fix solapamiento SVG: rects del L4 tenían height=28 (los demás 24) → el texto descriptivo (y=332) chocaba con los mini-rects (y=334). Corregido a height=24, y=304/320.
4. Leyenda de colores en executive-loop.svg (6 fases + centro SAFE + guard rails), viewBox 800×500 → 800×540 para dar espacio.
5. Lightbox centrado: dos bugs — (a) `.gv-lightbox-img` tenía max-width:100% → doble escalado navegador+JS; (b) `open()` con imagen cacheada: `img.complete` true pero `naturalWidth` 0 → caía al fallback (scale=1,tx=0,ty=0) → imagen en esquina. Fix: quitar max-width + usar `img.decode().then(afterLoad)`.

**Why**: El usuario pidió: Layer 4 sin icono + texto superpuesto, info-triggers con detalle en las secciones, leyenda de colores en el loop, y centrado de imagen en el lightbox.

**Where**: docs/presentations/index.html, docs/presentations/diagrams/architecture-layers.svg, docs/presentations/diagrams/executive-loop.svg, docs/presentations/assets/js/gv.js, docs/presentations/assets/css/gv.css, docs/presentations/assets/js/i18n.js

**Learned**:
- GOTCHA i18n.js: `translate()` hace `el.textContent = merged[key]` — REEMPLAZA hijos. Por eso en tds con data-i18n el trigger debe ser `<td><span data-i18n="key">texto</span><span class="info-trigger">i</span></td>` (span hermano, no hijo del td traducido).
- GOTCHA script de inserción PS: el check de idempotencia global detectaba claves insertadas en OTRO idioma → al insertar en `en`, `es`/`pt-BR` se omitían. Fix: comprobación POR BLOQUE (regex del bloque del idioma). Aún así quedaron 35 duplicados en `en` → script dedupe-en.ps1 los eliminó.
- GOTCHA PowerShell: `$var:` en strings de interpolación rompe → usar `${var}:` (ya conocido, pero volvió a ocurrir con $lang: y $firstKey:).
- PATRÓN: para ediciones masivas idempotentes de HTML/i18n, script PS con anclas únicas + comprobación por sección + [System.IO.File]::WriteAllText con BOM UTF-8.
- VERIFICACIÓN: cdp-verify-final.js en gv-probe verifica en Chrome real (CDP 9225 + serve.js 8899): icono, conteo de triggers por sección, modal traducido en en/es/pt-BR, y centrado del lightbox (compara tx/ty/scale con el valor matemáticamente esperado).
- STATE: 208 claves por bloque de idioma en i18n.js, 0 duplicados. Commit 18082a35.

---
*Imported from Engram on 2026-09-06*
