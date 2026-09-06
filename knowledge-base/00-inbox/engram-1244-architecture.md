---
created: 2026-05-31 02:49:46
tags: [engram, architecture]
engram_id: 1244
type: architecture
---

# Dashboard i18n completado — sin hardcode

**What**: Dashboard v2 fully i18n-ready — every label, button, modal, tooltip, chart title, placeholder, card, refs section, and trace section now uses `t('key')` lookup with EN/ES/PT support. All values derived from real data (git, sessions, health). Missing functions renderTurnsTable() and renderMechanismTimeline() recreated.

**Why**: User required "todo estable y homologado" — no hardcoded labels or values, complete i18n coverage across all dashboard sections, and full functional parity.

**Where**: reports/dashboard-v2/app.js (758 lines), reports/dashboard-v2/i18n.js (translations for modal/trace/refs/cards/history/chartTitles keys), reports/dashboard-v2/index.html (data-i18n on filters/charts/poll/search/loading)

**Learned**: applyTranslations() needed INPUT placeholder support (el.tagName check). renderTurnsTable() and renderMechanismTimeline() were lost during file truncation and had to be recreated from scratch using API data structures. metricInfo.js content kept in English as source of truth with labels translated via i18n.

---
*Imported from Engram on 2026-09-06*
