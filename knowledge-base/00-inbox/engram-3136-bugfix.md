---
created: 2026-08-25 13:35:45
tags: [engram, bugfix]
engram_id: 3136
type: bugfix
---

# Normalización de tokens spacing CSS

**What**: Normalicé segmentos decimales de tokens de spacing (`0.5` → `0-5`) en los serializadores CSS y SCSS.
**Why**: Vite/esbuild reportaba `css-syntax-error` para custom properties como `--space-0.5`.
**Where**: src/design/design-tokens.ts, tests/unit/design-tokens.test.ts, apps/web-dashboard/src/styles/generated-tokens.css
**Learned**: El CLI `src/design/design-system-cli.ts` delega la serialización a `tokensToCSS`; no era necesario cambiar el CLI. La normalización solo reemplaza puntos entre dígitos, preservando consumidores de nombres enteros.

---
*Imported from Engram on 2026-09-06*
