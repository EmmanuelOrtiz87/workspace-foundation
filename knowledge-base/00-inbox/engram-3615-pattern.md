---
created: 2026-09-02 12:02:44
tags: [engram, pattern]
engram_id: 3615
type: pattern
---

# Migración v2 Premium: gv-analytics + content-cms (etapa 2)

**What**: Migración v2 Premium de gv-analytics y content-cms (etapa 2). gv-analytics ya estaba 100% v2 (sesión previa: root override en styles.css + logo oficial + favicon). content-cms: favicon logo-icon.svg + theme-color #0F1115 en index.html; hardcodes v1 en styles.css (preview gradient #1a2035ee→#151921ee/#090c11ee, rgba(42,45,58)→rgba(37,43,56), rgba(13,17,23)→rgba(9,12,17), badges status a v2) y PALETTE de contentos.tsx a acentos v2.
**Why**: Plan docs/design/06-migration-plan-v2-premium.md etapa 2, decisión docs/brand/BRAND-DECISION-2026-09-01.md.
**Where**: apps/content-cms/index.html, apps/content-cms/src/styles.css, apps/content-cms/src/contentos.tsx, packages/gv-design-system/dist/tokens.css.
**Learned**: (1) assets/gv-design-system.css compartido YA tiene valores v2 (actualizado en etapa previa) — content-cms hereda v2 vía @import sin override local. (2) packages/ y apps/ están git-ignored (repos decoupled). (3) packages/gv-design-system/dist/tokens.css era un artefacto stale v3.0.0 con `--gv-$schema` que rompía lightningcss minify (Delim('$')) — el build de gv-analytics fallaba; fix = copiar src/tokens/tokens.css (curado v2) a dist; etapa 3 debe regenerar dist oficialmente. (4) vistas SPA sin rutas: capturas secundarias via playwright-cli (click refs + screenshot --filename), vistas home via chrome --headless=new --screenshot.

---
*Imported from Engram on 2026-09-06*
