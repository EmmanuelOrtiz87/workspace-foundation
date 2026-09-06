---
created: 2026-08-17 03:48:58
tags: [engram, architecture]
engram_id: 2864
type: architecture
---

# ADR consolidation: unified numbering in docs/adr/

**What**: Consolidated two duplicate ADR directories into a single canonical series in `docs/adr/` with unified numbering. The legacy `docs/architecture/decisions/` (ADR-001..006 + README) was merged into `docs/adr/` (ADR-0001, 0002, 007-010 already there).
**Why**: Roadmap referenced "ADR-001 through ADR-004" mapping to the legacy series, while docs/adr used zero-padded numbering — two colliding series (both had ADR-001/002) caused confusion and broken cross-references.
**Where**: docs/adr/ (canonical now): ADR-0001 foundation, ADR-0002 TypeScript-First, ADR-0003 MCP workspace, ADR-0004 npx hardening, ADR-0005 homologation gate, ADR-0006 code coverage, ADR-0007 Nexus, ADR-0008 session scoring, ADR-0009 watchtower, ADR-0010 knowledge absorption, ADR-0011 dependency updates, ADR-0012 PowerShell (superseded). Updated refs in .github/workflows/reusable-governance.yml L20, GENTLE-VANGUARD-GOVERNANCE-AUDIT-REPORT.json L283, docs/README.md L13, docs/guides/STACK-OPTIMIZATION-ROADMAP.md (L363,367-370,643), .opencode/agents/sdd-design.md L34, docs/presentations/glossary.html L338, docs/presentations/study-material.html L341.
**Learned**: (1) Legacy ADR-001-powershell-language-choice was severely corrupted by a find-replace "PowerShell"→"TypeScript" (content had pwsh/$ErrorActionPreference/PSScriptAnalyzer) — rewrote from scratch, marked Superseded by ADR-0002. (2) ADR-002 originally said "Supersedes ADR-001 (TypeScript with Multi-Language Support)" which pointed to ADR-0001 Foundation, NOT the PowerShell ADR — correct chain is ADR-0002 supersedes both ADR-0001 and ADR-0012. (3) Some markdown lines use em-dash (—) not hyphen — byte-level check needed for exact-match edits. (4) ADR-0006 rewritten to describe the native TS coverage runner (c8) instead of obsolete Pester/run-tests-simple.ps1.

---
*Imported from Engram on 2026-09-06*
