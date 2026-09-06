---
created: 2026-08-29 06:33:40
tags: [engram, pattern]
engram_id: 3229
type: pattern
---

# F2.5 split useLocale.ts into i18n/ modules

**What**: Split `apps/web-dashboard/src/hooks/useLocale.ts` (1956 lines, ~95% i18n data) into `src/i18n/metric-catalog.ts` (517 lines: Locale type, MetricInfo, TRANSLATIONS, LOCALE_NAMES, LOCALE_FLAGS) and `src/i18n/ui-strings.ts` (1413 lines: UI_STRINGS). useLocale.ts is now 35 lines of pure hook logic with re-exports.
**Why**: F2.5 mechanical refactor — zero behavior change, no importer changes (~37 components still import `../hooks/useLocale`).
**Where**: apps/web-dashboard/src/hooks/useLocale.ts, apps/web-dashboard/src/i18n/{metric-catalog,ui-strings}.ts
**Learned**: (1) Re-export pattern: `export type { Locale } from '../i18n/metric-catalog'` + `export { LOCALE_NAMES, LOCALE_FLAGS } from ...` keeps the full export surface (Locale, MetricInfo, LOCALE_NAMES, LOCALE_FLAGS, getUIString, getMetricInfo, LocaleContext, useLocale, t, useT). (2) ui-strings.ts needs `import type { Locale } from './metric-catalog'` for the Record type. (3) The original file was NOT prettier-clean: two UI_STRINGS lines exceeded printWidth 100 (es line 109 chars, pt-BR line 111 chars); prettier --write reflows them (string values unchanged). (4) Verified verbatim via git HEAD slice comparison + semantic deep-compare of evaluated object literals (vm.runInNewContext) + tsx dynamic import with pathToFileURL (Windows needs file:// URLs). (5) A CONCURRENT process was modifying apps/web-dashboard/server/real-data.ts into a barrel (same F2.5 family) during this task — timestamps showed it landed at 03:32:31, after my extraction; left untouched.

---
*Imported from Engram on 2026-09-06*
