---
created: 2026-08-08 04:36:57
tags: [engram, architecture]
engram_id: 2642
type: architecture
---

# Flujo CDP reproducible con servidor nativo --no-store + scripts cjs

**What**: Flujo CDP de verificación de presentaciones ahora 100% reproducible con herramientas nativas del stack: (1) flag `--no-store` añadido a `src/cli/serve-presentations.ts` (Cache-Control: no-store, must-revalidate — evita caché de modales i18n en recargas); (2) `cdp-verify-page.cjs` absorbido como script del skill presentations-maintenance (verificación genérica 3 idiomas EN/ES/PT); (3) `cdp-verify-final.cjs` (index.html completo, 6 checks). Commits 41490551 + cbca4b2d.

**Why**: El usuario pidió operar con todas las herramientas y absorber conocimiento nativo; la verificación CDP dependía de serve.js y cdp-verify-page.js en temp gv-probe.

**Where**: src/cli/serve-presentations.ts (flag --no-store); .opencode/skills/presentations-maintenance/scripts/cdp-verify-page.cjs (nuevo), cdp-verify-final.cjs (renombrado desde .js); SKILL.md (gotcha #11 + comandos rápidos actualizados); references/common-tasks.md (flujo CDP reproducible).

**Learned**: (1) GOTCHA ESM: el repo tiene `"type": "module"` en package.json → cualquier `.js` dentro del repo se trata como ES module y `require()` falla con "ReferenceError: require is not defined". Scripts node con require('ws') deben llamarse `.cjs` dentro del repo (fuera, en temp, pueden ser .js). (2) El flag --no-store es esencial para verificación CDP porque el modal i18n cacheado muestra texto viejo en recargas. (3) Verificación 3 idiomas confirmada: health.html EN "Dashboard WS server" / ES "Servidor WS del Dashboard" / PT "Servidor WS do Dashboard". (4) Start-Process con ArgumentList separado no pasa bien flags con = en Windows; usar --flag=valor o verificar puerto real. (5) typecheck global tiene 2 errores pre-existentes en archivos untracked (src/animations/presets.ts, src/humanizer-cli.ts) que no son míos — no bloquear por ellos.

---
*Imported from Engram on 2026-09-06*
