---
created: 2026-08-26 10:35:25
tags: [engram, decision]
engram_id: 3168
type: decision
---

# GV Academy web: SPA local 7 tracks, 65 lecciones, glosario 115 términos

**What**: Gentle-Vanguard Academy web creada en apps/academy-web (commits b0d2995f, aa7ee11d; main+develop): SPA vanilla local-first estilo academy.claude.com/es — sin build/CDN/servidor (file:// doble-click), 7 tracks × 65 lecciones + glosario 115 términos + buscador global + filtros. Contenido derivado por 4 agentes paralelos de fuentes reales (AGENTS, manual, GLOSSARY, normativas, guides, pricing/GTM) sin cifras inventadas; renderer markdown-subset propio; branding oficial 14-BRAND-SYSTEM.
**Why**: El usuario pidió una web tipo Claude Academy con TODO el contenido del stack (técnico+negocio+labs+glosario), local, sin login ni dependencias externas.
**Where**: apps/academy-web/{index.html,style.css,app.js,data/*.js,assets/}, README.md con instrucciones
**Learned**: file:// exige contenido embebido JS (fetch falla cross-origin); QA DOM por evaluate_script más fiable que screenshots para estructura; sesión paralela sigue activa (su commit a9ef23b4 = loopback sin login en código; git lock temporal requirió reintento). Actualizar data/content-*.js junto al stack.

---
*Imported from Engram on 2026-09-06*
