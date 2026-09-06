---
created: 2026-09-02 12:37:00
tags: [engram, bugfix]
engram_id: 3617
type: bugfix
---

# Bridge session fix: local tracking sync

**What**: Fixed engram-session-bridge.ts to persist local session state in .session/session-current.json on both sessionStart() and sessionEnd(). Added updateLocalSessionState() helper, documented the real Engram session pattern, and added `localClosed` field to SessionEndResult interface.

**Why**: The bridge was creating local session IDs that were never tracked as closed in .session/session-current.json, causing sessions to appear "active" with no activity. Engram nativo creates sessions automatically — the bridge IDs are only for local stack tracking, not Engram's internal session registry. The HTTP fallback to 127.0.0.1:7437 was failing silently (server not running), but the real issue was that .session/session-current.json was never updated from 'active' to 'closed'.

**Where**: src/knowledge/engram-session-bridge.ts (lines 1-84, 91-100, 170-210), src/session/session-close/phases.ts (consumer, no changes needed — uses mcpSuccess/httpSuccess only)

**Learned**: Engram nativo (v1.20.0) manages sessions automatically — no session-start/end CLI commands. The `session-<ISO>` IDs from the stack are purely local tracking identifiers. The correct way to close a session is to persist a summary via `engram save --type session_summary` (CLI, proven pattern). HTTP fallback to 7437 is optional/secondary. Always verify bridge assumptions against `engram doctor` and `engram context`.

---
*Imported from Engram on 2026-09-06*
