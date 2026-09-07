---
created: 2026-05-27 23:34:18
tags: [engram, architecture]
engram_id: 1193
type: architecture
---

# Stack optimization fixes: cleanup, compression, measurement

**What**: Fixed 3 systemic issues in the optimization stack:
1. CLAUDE.min.md generation (semantic-compression.ps1) - expanded from 17 to ~45 replacement patterns, added HTML comment stripping, blank line compression, -Aggressive flag. Now achieves actual compression.
2. session-cleanup-start.ps1 created - flushes caches (normativa-cache, preprocess-response-cache, prompt-cache, token-usage), closes orphan sessions (8h threshold), generates compressed CLAUDE.min.md, resets token tracking.
3. system-prompt-optimizer.ps1 fixed - was measuring ALL rules/ files causing false 65,697 token reading. Now measures only CLAUDE.md + AGENTS.md (actual system prompt = 3,915 tokens real).
4. Integrated cleanup step into session-autostart pipeline (config/session-autostart.config.json).
5. Fixed OrphanMaxAgeHours=0 bug that was killing current session.

**Why**: User reported: (a) historical context from other sessions leaking into new sessions, (b) system prompt too large showing 65K tokens, (c) optimizations from previous session not active.

**Where**: scripts/utilities/semantic-compression.ps1, scripts/utilities/session-cleanup-start.ps1 (NEW), scripts/utilities/system-prompt-optimizer.ps1, config/session-autostart.config.json

**Learned**: The 65K token reading was a measurement artifact - it counted ALL rules/ files even though they're lazy-loaded via normativa-resolver.ps1. Real system prompt = CLAUDE.md + AGENTS.md only (~3,915 tok). The session history leak was caused by orphan session files accumulating (29 files) and OpenCode Desktop holding state for 8+ hours without cleanup.

---
*Imported from Engram on 2026-09-06*
