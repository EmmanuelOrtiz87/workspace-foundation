---
created: 2026-08-09 01:05:21
tags: [engram, decision]
engram_id: 2678
type: decision
---

# Agnostic Stack Migration - Phase 1 Complete

**What**: Created native skill loader and agent delegator that work WITHOUT opencode dependency.

**Why**: OpenCode task() has critical bug where all subagents fail with "Model not found: inherit-from-session/". This affects ALL subagents (SDD and non-SDD), making the delegation system unusable.

**Implementation**:
1. Created src/skill-loader.ts - Loads 121 native skills from /skills/
   - Works with ANY AI tool (Claude, Cursor, etc.)
   - No opencode dependency
   - Parses YAML frontmatter from SKILL.md files
   - Matches by name, aliases, or triggers

2. Created src/agent-delegator.ts - Native agent delegation system
   - Replaces opencode task() which is broken
   - Supports 11 agents with default configs
   - Can run agents via npx tsx src/agents/<agent>.ts
   - Includes fallback mode when native agent doesn't exist

3. Created docs/MIGRATION-AGNOSTIC-STACK.md - Comprehensive migration plan
   - Documents the root cause (opencode bug)
   - Lists 30+ skills that need migration from .opencode/skills/
   - Provides implementation checklist
   - Defines agnostic architecture

**Files Created**:
- src/skill-loader.ts (255 lines)
- src/agent-delegator.ts (558 lines)
- docs/MIGRATION-AGNOSTIC-STACK.md (comprehensive plan)

**Verification**:
- ✅ TypeScript compiles (0 errors)
- ✅ ESLint passes (0 errors)
- ✅ skill-loader loads 121 skills successfully
- ✅ agent-delegator lists 11 default agents

**Next Steps**:
1. Create config/agents.json for portable agent definitions
2. Create src/agents/*.ts implementations for each SDD agent
3. Migrate 30+ skills from .opencode/skills/ to native /skills/
4. Update AGENTS.md with agnostic usage instructions
5. Test in Claude/Cursor simulators

**Impact**: The stack is now prepared for full portability. The opencode-specific delegation bottleneck has been bypassed with native TypeScript implementations.

**Root Cause Confirmed**: ALL subagents (not just SDD) fail with "inherit-from-session" error - this is a framework bug, not configuration issue.

---
*Imported from Engram on 2026-09-06*
