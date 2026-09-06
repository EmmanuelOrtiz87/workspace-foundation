---
created: 2026-07-31 01:18:58
tags: [engram, decision]
engram_id: 2318
type: decision
---

# 360° Agent Coverage Complete - 20 Subagents

**What**: Implemented complete 360° coverage with 20 subagents

**Why**: Previous validation showed only 9/15 agent coverage. User requested full operational capability.

**Where**:
- opencode.json: Added 11 new subagent configurations
- config/auto-delegation.json: Updated routing and profiles
- config/agent-prompts/: Created 9 new prompt files

**Implementation Details**:

Original 9 subagents:
1. sdd-explore (BA)
2. sdd-design (SAD)
3. sdd-apply (DEV)
4. sdd-verify (QA)
5. doc-agent
6. ops-agent
7. gov-agent
8. session-agent
9. premortem-agent

New 11 subagents:
10. maintenance-agent - cleanup and health monitoring
11. gitflow-agent - branch/PR automation
12. self-diag-agent - break-glass recovery
13. knowledge-agent - knowledge base operations
14. mkt-agent - marketing and content strategy
15. sales-agent - pipeline/deal management
16. finance-agent - financial modeling
17. hr-agent - hiring and onboarding
18. legal-agent - compliance/contracts
19. bus-tele-agent - business intelligence
20. sia-agent - self-improving iterations

**Prompts Created**:
- MAINTENANCE.md
- KNOWLEDGE.md
- MKT.md
- SALES.md
- FINANCE.md
- HR.md
- LEGAL.md
- BUS-TELE.md
- SIA.md

**Validation**:
- npm run typecheck: ✅ PASSED
- JSON validation: ✅ PASSED
- Agent profile validation: ✅ PASSED
- Commit with hooks: ✅ PASSED (commit 4fbb37a4)

**Stack Now Has**:
- 20 subagents (100% coverage)
- 19 agent prompt files
- Complete SDD lifecycle
- Operations/DevOps/SRE
- Business domain (MKT/SALES/FINANCE/HR/LEGAL)
- Advanced (BUS-TELE, SIA, SELF-DIAG)
- All TypeScript checks passing

**Learned**: Systematic approach to expansion: 1) Add to opencode.json, 2) Update auto-delegation routing, 3) Create prompt files, 4) Validate, 5) Commit. Pre-commit hooks (lefthook) catch JSON/schema errors early.

---
*Imported from Engram on 2026-09-06*
