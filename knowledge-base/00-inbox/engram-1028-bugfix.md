---
created: 2026-05-22 18:18:09
tags: [engram, bugfix]
engram_id: 1028
type: bugfix
---

# Token usage notifier session ID fix

**What**: Fixed token usage notifier session ID unknown - added fallback to check logs directory and token-usage.json
**Why**: Token usage notifier showed "unknown" because session files are in logs/ not .session/, and token-usage.json has old session ID
**Where**: scripts/utilities/token-usage-notifier.ps1 - Get-CurrentSessionId function
**Learned**: Session files created by session-manager.ps1 go to logs/ directory with SessionId field, not .session/ with sessionId. Need multiple fallback strategies for robust session ID detection

---
*Imported from Engram on 2026-09-06*
