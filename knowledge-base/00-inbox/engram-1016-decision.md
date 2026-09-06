---
created: 2026-05-22 16:19:52
tags: [engram, decision]
engram_id: 1016
type: decision
---

# Token Usage Notification System - Feature Request

**What**: New feature request for real-time token usage notification system.

**Requirements**:
1. Display token metrics after each user message/response:
   - Input tokens used
   - Output tokens used
   - Chat tokens (total conversation)
   - Context capacity usage

2. Display modes:
   - Automatic: Show after every response (default ON)
   - On-demand: User can toggle visibility
   - Session summary: Accumulated totals from start to end

3. Display format:
   - Compact summary after each response
   - Accumulated session totals
   - Final report on session close

4. Configuration:
   - Default: Enabled at session start
   - User can enable/disable on demand
   - Persist preference in session config

**Why**: User needs visibility into token consumption for cost management and optimization.

**Where to implement**:
- scripts/utilities/token-usage-notifier.ps1 (new)
- Integration with session-autostart.config.json
- Integration with session-manager.ps1 (End-Session)
- Display in session-autostart pipeline

**Next Steps**:
1. Create token-usage-notifier.ps1
2. Add to session-autostart pipeline
3. Add toggle command (toggle-token-display)
4. Integrate with session close summary
5. Store metrics in .session/token-usage.json

---
*Imported from Engram on 2026-09-06*
