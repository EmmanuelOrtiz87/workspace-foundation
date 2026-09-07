---
created: 2026-09-03 04:22:41
tags: [engram, architecture]
engram_id: 3642
type: architecture
---

# Agent Governance: Policy Engine + MCP Security Gateway + OWASP Top 10

**What**: Implemented 3 native Agent Governance capabilities inspired by Microsoft AGT v4.1.0 and Gentle-AI v2.5.0: (1) deterministic fail-closed Policy Engine, (2) MCP Security Gateway runtime, (3) OWASP Agentic AI Top 10 mapping. Plus an integration facade, native wiring into security-initializer, and a watchtower check.
**Why**: Gap analysis (mem #3641) showed GV had reactive/heuristic guardrails but no preventive fail-closed gate, no MCP security runtime, no OWASP mapping.
**Where**:
- `src/security/policy-engine/policy-engine.ts` + `config/policy-engine.json` + `config/policy-engine.schema.json` (ADR-0027)
- `src/mcp/security-gateway/mcp-security-gateway.ts` (ADR-0028)
- `src/security/owasp/owasp-agentic-top10.ts` (ADR-0029)
- `src/security/agent-governance-integration.ts` (facade, composes all 3)
- `src/security/security-initializer.ts` (added step 4: OWASP coverage report)
- `src/core/watchtower/checks-security.ts` (added checkAgentGovernance) + `src/core/maintenance-watchtower.ts` (registered)
- Tests: `tests/unit/{policy-engine,mcp-security-gateway,owasp-agentic-top10,agent-governance-integration}.test.ts`
- ADRs: `docs/adr/ADR-0027/28/29`
**Learned**:
- CLI guard pattern: use `process.argv[1].endsWith('<filename>.ts')` OR `fileURLToPath(import.meta.url)` — the strict `import.meta.url === file://${process.argv[1]}` fails under `npx tsx` because argv[1] format differs.
- eslint `security/detect-unsafe-regex` flags overlapping quantifiers like `\s+` followed by `(?:...\s+)?` — fix by using explicit alternatives without optional groups.
- OWASP coverage currently 75% (5 full / 5 partial / 0 none); strict mode fails below 80%.
- npm scripts added: policy:engine, mcp:security-gateway, owasp:top10, governance:check (+ :test variants).
- Full test suite passes: 6 suites / 0 failures; 676 unit tests + 31 new tests all pass.
- security-initializer runs OWASP coverage as step 4 (non-blocking).
- watchtower now has agent-governance component: 10 PASS + 1 WARN (coverage 75% < 80%) → component OK. Total watchtower: 121 PASS / 3 WARN / 0 FAIL.

---
*Imported from Engram on 2026-09-06*
