---
created: 2026-08-08 04:08:00
tags: [engram, architecture]
engram_id: 2638
type: architecture
---

# Skill nativo presentations-maintenance + validador TS

**What**: Absorbido el conocimiento de mantenimiento de presentaciones (antes en temp gv-probe) como skill nativo del stack: `.opencode/skills/presentations-maintenance/` con SKILL.md (9 gotchas), references/common-tasks.md, references/troubleshooting.md y scripts/ (insert-tips.ps1, dedupe-i18n.ps1, homologate-matrix.ps1, cdp-verify-final.js, tips-new.json, tips-fm.json). Además migrado validate.js → `src/cli/validate-presentations.ts` (TS nativo, 0 deps, checks info-triggers/lightbox/modales) registrado como `npm run presentations:validate`.

**Why**: El usuario pidió explícitamente absorber conocimiento adquirido en el stack para que sea nativo y reutilizable ("creemos lo necesario en base al stack").

**Where**: .opencode/skills/presentations-maintenance/{SKILL.md,references/,scripts/}; src/cli/validate-presentations.ts; package.json (script presentations:validate).

**Learned**: (1) El gotcha `$var:` en PowerShell aplica a variables con `:` — `$Block: {` rompe parser, hay que usar `${Block}: {`. Ocurrió en mi propio dedupe-i18n.ps1. (2) Probar SIEMPRE los scripts en dry-run antes de dar por buenos — la prueba detectó 2 bugs reales. (3) El validador estructural (regex) no necesita happy-dom; happy-dom ni estaba instalado. (4) Estado sano i18n.js: 208 claves/bloque, 0 duplicados; insert-tips idempotente por bloque (comprobación global rompe la inserción multi-idioma). (5) Commit 5d90aa5d con hooks OK (json-lint, opencode-validation, secretlint, trufflehog).

---
*Imported from Engram on 2026-09-06*
