---
created: 2026-08-13 05:23:06
tags: [engram, decision]
engram_id: 2796
type: decision
---

# Context Management Strategy - Evaluación de 5 opciones

**What**: Investigated 5 different approaches to solve the massive token consumption (millions per session).

**Options Evaluated**:

1. **OpenCode Plugin API** - ❌ NOT VIABLE
   - Hooks available: message.updated, session.idle, experimental.chat.system.transform
   - BUT: No access to modify conversation messages array
   - Can only modify system prompt, not truncate history

2. **Middleware Interceptor** - ❌ NOT VIABLE
   - Would require HTTPS proxy or monkey-patching
   - Node.js doesn't allow intercepting outbound requests cleanly
   - Too fragile

3. **Fork OpenCode** - ✅ POSSIBLE BUT COMPLEX
   - OpenCode is open source (github.com/opencode-ai/opencode)
   - Would need to: find message assembly code, add maxContextMessages config, implement sliding window
   - Effort: 1-2 weeks + ongoing maintenance
   - Benefit: REAL solution to token explosion

4. **context-mode plugin** - ❌ NOT APPLICABLE
   - Third-party plugin for different architecture
   - Not specific to opencode

5. **Our Side Optimizations** - ✅ ALREADY IMPLEMENTED
   - context-truncator.ts - monitoring
   - CONTEXT-OPTIMIZATION-GUIDE.md - documentation
   - Token banner alerts
   - Works TODAY but only addresses symptoms

**Recommendation**: Hybrid approach
- Phase 1 (now): Continue with our mitigations + auto-checkpoints
- Phase 2 (1-2 weeks): Fork opencode, implement sliding window
- Phase 3: Contribute upstream or maintain fork

**Where**: docs/reference/CONTEXT-MANAGEMENT-STRATEGY.md - full analysis

---
*Imported from Engram on 2026-09-06*
