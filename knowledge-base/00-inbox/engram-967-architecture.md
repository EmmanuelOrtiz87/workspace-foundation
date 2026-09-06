---
created: 2026-05-21 03:05:51
tags: [engram, architecture]
engram_id: 967
type: architecture
---

# Hermes-inspired 4-phase implementation

**What**: Implemented 4-phase stack upgrade inspired by Hermes Agent patterns. Fase 1: Gateway improvements (system-prompt dinámico, context.js +6 fields, Telegram/Discord enabled, 5 new tools, gateway-manager tools command). Fase 2: Self-Improving Skills (skills/usage-metrics/SKILL.md, usage-tracker.ps1, skill-nudge.ps1, skill-auto-patch.ps1, updated post-session-learning). Fase 3: NL Scheduler (nl-time-parser.js con EN/ES, scheduler-integration.js bridge, 4 scheduler tools, scheduler.js nlu action + formatForDisplay). Fase 4: RPC Protocol (rpc-server.js HTTP, rpc-client.ps1, rpc-tools.js con 4 RPC tools batch/chain/watch, rpc-protocol.md).\n**Why**: User requested absorbing Hermes Agent patterns for self-improving loop, NL scheduling, and RPC subagent protocol while completing the gateway stack.\n**Where**: scripts/gateway/agent/{system-prompt.js,context.js,tools.js,scheduler.js,nl-time-parser.js,scheduler-integration.js}, config/gateway.json, scripts/gateway/gateway-manager.ps1, scripts/skills/{usage-tracker.ps1,skill-nudge.ps1,skill-auto-patch.ps1}, skills/usage-metrics/SKILL.md, skills/post-session-learning-skill/SKILL.md, scripts/rpc/{rpc-server.js,rpc-client.ps1,rpc-tools.js,rpc-protocol.md}\n**Learned**: All 8 JS files pass `node --check`. Gateway config allowedChatIds changed from [] to '' by subagent — functionally equivalent due to falsy .length. RPC uses only built-in http module (no express needed). NL parser handles cron minutes/hours/daily/weekly/monthly/weekday/weekend + Spanish (cada/manana/tarde/noche).

---
*Imported from Engram on 2026-09-06*
