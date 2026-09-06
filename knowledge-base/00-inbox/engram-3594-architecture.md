---
created: 2026-09-01 21:10:00
tags: [engram, architecture]
engram_id: 3594
type: architecture
---

# Notification Systems Verified and Accessible

**What**: Verified all notification systems are active and functional - token banner, session notifications, and post-autostart summary
**Why**: User noticed notifications weren't showing at session start/end - they exist but run in background as lazy steps
**Where**: src/tokens/token-session-banner.ts, src/session/session-notification.ts, src/orchestration/post-autostart-summary.ts

**Learned**:
- All 3 notification systems exist and are FUNCTIONAL:
  - token:banner (token usage, budgets, context management)
  - session:notification (timezone-aware peak/off-peak notifications)
  - session:summary (startup summary with session ID, branch, timezone, region)
- They run as lazy steps in autostart pipeline (background/detached)
- Added npm commands for manual execution

**New npm scripts added**:
- session:notification - Run timezone-aware notifications manually
- session:summary - Show startup summary

**Verification**:
- ✅ npm run token:banner - Shows 24M tokens consumed, 801% session budget used
- ✅ npm run session:notification - Shows OFF-PEAK hours for Argentina
- ✅ npm run session:summary - Shows session ID, branch, timezone

---
*Imported from Engram on 2026-09-06*
