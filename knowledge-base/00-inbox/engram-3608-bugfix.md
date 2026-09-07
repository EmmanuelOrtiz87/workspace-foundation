---
created: 2026-09-02 04:31:51
tags: [engram, bugfix]
engram_id: 3608
type: bugfix
---

# Marca v2.0 verificada + limpieza apps diseño + lint a 0

**What**: Sesión de consolidación del stack: verificada la nueva visual de marca v2.0 en presentations, eliminadas apps de diseño obsoletas, corregidos 31 errores de lint, arreglado schema desactualizado.
**Why**: El usuario pidió dejar todo completo/correcto/estable/optimizado y validar la marca oficial con la visual de la nueva UI.
**Where**: docs/presentations/ (24 HTML, gv.css, logo.svg), apps/gv-design-studio + apps/gv-design-system-catalog (ELIMINADAS), AGENTS.md, package.json, tsconfig.json, 9 archivos src/ de lint, config/token-budget-guard.schema.json.
**Learned**: (1) El modelo no lee imágenes → verificación de marca con Playwright programático (DOM: logo 32px, wordmark, bg #121212, 0 console errors) en 6 páginas. (2) scripts/apps/**/*.ts no estaba en tsconfig.json → eslint producía 12 "Parsing error" por type-aware parsing sin proyecto; fix = añadirlo al include (typecheck sigue PASS). (3) warnings tipo 'assigned but never used' con prefijo _ NO se eximen por defecto (solo argsIgnorePattern) → eliminar la asignación. (4) token-budget-guard.schema.json estaba obsoleto: el código soporta enforcement.mode='adaptive' con adaptiveModes pero el schema solo permitía [soft,hard,disabled] → actualizado a incluir 'adaptive'+adaptiveModes → watchtower configs de ISSUES→OK. (5) Design Hub (apps/design-hub, puerto 8095) reemplaza y unifica gv-design-system-catalog + gv-design-studio (confirmado por su README). Resultado final: typecheck EXIT=0, lint EXIT=0, watchtower PASS 111|WARN 2|FAIL 0.

---
*Imported from Engram on 2026-09-06*
