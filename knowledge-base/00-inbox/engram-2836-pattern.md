---
created: 2026-08-15 01:26:40
tags: [engram, pattern]
engram_id: 2836
type: pattern
---

# 3 presentaciones nuevas (commands, glossary, study) + index

**What**: Creé 3 páginas HTML nuevas en docs/presentations/ (commands.html con 266 npm scripts en 12 categorías + buscador JS en vivo, glossary.html con 280 términos A-Z y estudio filtrable, study-material.html con 42 conceptos en 7 dominios y ejercicios) + actualicé index.html (3 nav links, 3 book-cards PAGE 11-13, sección sec_optimization de optimización de consumo). Creé assets/js/i18n-extra.js con merge sobre __GV_CONTENT.
**Why**: El libro de presentaciones solo tenía 11 páginas principales y faltaban catálogo de comandos, glosario y material de estudio.
**Where**: docs/presentations/{commands,glossary,study-material,index}.html, docs/presentations/assets/js/i18n-extra.js, temp C:\Users\emman\AppData\Local\Temp\opencode\gv-pres\ (generadores gen-commands.mjs, gen-glossary.mjs).
**Learned**: (1) i18n-extra.js debe cargarse SIEMPRE entre i18n-content.js e i18n.js en cada página. (2) validate-presentations.ts (sin --main) valida TODOS los html y 9 apps CMS (contract-viewer, image-studio, marketing, md-viewer, product-doc-gentle, resources-index, social-post, v4-features, video-studio) FALLAN por diseño (excluidas con --main); no es un error nuevo. (3) El validador no comprueba que las claves existan en el diccionario, solo atributos. (4) Generación programática vía template + replaceAll garantiza tags balanceados (26 section=26 en glossary). (5) El hero <p> no debe llevar data-i18n si contiene <strong> (textContent lo reemplaza).

---
*Imported from Engram on 2026-09-06*
