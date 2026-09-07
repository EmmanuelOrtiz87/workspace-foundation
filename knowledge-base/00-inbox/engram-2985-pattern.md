---
created: 2026-08-24 01:44:14
tags: [engram, pattern]
engram_id: 2985
type: pattern
---

# AgentChat i18n + StackCapabilities freshness badge

**What**: (1) AgentChat.tsx fully wired to useT() — all visible literals translated via new ui.* keys (agent_chat, send, clear, type_message, no_messages, connected/disconnected, session states, suggested actions as labelKey map, panel titles). (2) StackCapabilitiesPanel.tsx got a data-freshness badge next to the title: <60min green "Live", <24h amber "{n}h ago", ≥24h red "{n}d ago" using ui.live/ui.hours_ago/ui.days_ago.
**Why**: Delegated task — i18n completeness for AgentChat and staleness visibility for stack capabilities data.
**Where**: apps/web-dashboard/src/components/AgentChat.tsx, apps/web-dashboard/src/components/StackCapabilitiesPanel.tsx, apps/web-dashboard/src/hooks/useLocale.ts (UI_STRINGS × en/es/pt-BR).
**Learned**: tt() has NO interpolation support — placeholders like {n}/{agent} must be replaced at call site (.replace('{n}', String(x))). Suggested-action labels moved from `label` field to `labelKey` so module-level constants stay locale-agnostic. AGENTS role names left untranslated because mention filtering matches on the English names. Verified: npx tsc --noEmit clean + npm run build exit 0.

---
*Imported from Engram on 2026-09-06*
