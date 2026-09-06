---
created: 2026-08-09 01:57:59
tags: [engram, pattern]
engram_id: 2682
type: pattern
---

# New Stack Files - Complete File Inventory

**What**: Created comprehensive native stack infrastructure with new files and directories.

**New Directories**:
- src/agents/ - 11 native agent implementations
- src/core/schemas/ - JSON schemas for validation
- skills/ - 14 migrated skills (ab-testing, api-and-interface-design, etc.)
- src/animations/ - Animation utilities
- styles/ - Design tokens CSS
- tests/delegation/ - Delegation tests

**New Files** (key):
- src/skill-loader.ts - Native skill loader
- src/agent-delegator.ts - Native agent delegation
- src/skill-migrator.ts - Migration tool
- config/agents.json - Portable agent config
- AGNOSTIC-USAGE.md - Multi-tool usage guide
- docs/MIGRATION-AGNOSTIC-STACK.md - Migration plan
- src/core/schemas/agents.json - Schema validation

**Verification**: All files tracked in git, no duplicates, no broken references

**Documentation**: Updated AGNOSTIC-USAGE.md with complete usage patterns

---
*Imported from Engram on 2026-09-06*
