---
created: 2026-06-02 03:56:28
tags: [engram, architecture]
engram_id: 1279
type: architecture
---

# Feedback Loop + Proactive Delivery System

**What**: Implemented two strategic systems: Feedback Loop (user ratings + pattern analysis) and Proactive Delivery (session digest).

**Why**: Closing identified strategic gaps for the Gentle-Vanguard autonomous stack — user feedback to improve decisions, and proactive reporting to keep the user informed without being asked.

**Where**:
- `scripts/utilities/FEEDBACK/feedback-collector.ps1` — Collects rating 1-5, comment, context per action; stores in `.session/feedback/feedback.jsonl`
- `scripts/utilities/FEEDBACK/feedback-analyzer.ps1` — Computes satisfaction trends, detects red-flagged actions (avg < 3), generates improvement proposals
- `scripts/utilities/DIGEST/digest-generator.ps1` — Digest with health, feedback trends, proposals, token metrics, git status; modes daily/weekly/status/json
- `rules/NORMATIVAS-FEEDBACK.md` — 7 rules for feedback governance
- `scripts/utilities/WORKFLOW-ORCHESTRATION/gv.ps1` — Added `feedback` and `digest` commands
- `config/session-autostart.config.json` — Added digest-generator as lazy step
- `scripts/utilities/SESSION/post-session-learning.ps1` — Phase 2.5 consumes feedback.jsonl
- `config/quality-gates.json` — Added feedbackCollection and proactiveDigest sections
- `docs/AGENTS.md` — Key References updated with FEEDBACK, DIGEST, NORMATIVAS-FEEDBACK
- `CHANGELOG.md` — Added `[2.26.0]` entry, restored missing `[2.24.0]` header

**Learned**:
- CHANGELOG.md structural edits can orphan headers when replacing a divider + header — always verify the section boundaries after edit
- gv.ps1 has 1856 lines with command dispatch via switch statement — pattern is well-established, new commands follow the existing template
- Session autostart pipeline has 25+ config-driven steps; lazy steps run in background

---
*Imported from Engram on 2026-09-06*
