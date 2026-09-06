---
created: 2026-08-31 02:15:26
tags: [engram, bugfix]
engram_id: 3417
type: bugfix
---

# i18n-check apuntaba al archivo equivocado

**What**: `apps/web-dashboard/scripts/i18n-check.mjs` buscaba las keys `'ui.*'` definidas en `src/hooks/useLocale.ts` — pero ese archivo es solo un hook de 35 líneas que importa `UI_STRINGS` de `../i18n/ui-strings` (0 definiciones de keys). Las 1341 keys reales viven en `src/i18n/ui-strings.ts`. Por eso reportaba 418 keys usadas como "missing" (todas las usadas, porque el set de definidas estaba vacío).
**Why**: El job Dashboard Tests fallaba con "418 key(s) used but NOT defined" — parecía un problema masivo de i18n pero era un bug del script de verificación.
**Where**: apps/web-dashboard/scripts/i18n-check.mjs (path corregido a src/i18n/ui-strings.ts)
**Learned**: Cuando un gate reporta "todo falta", sospechar primero del script de verificación, no de los datos. Verificado: i18n:check OK — 418 keys usadas en 75 archivos, todas definidas.

---
*Imported from Engram on 2026-09-06*
