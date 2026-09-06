---
created: 2026-08-06 23:27:51
tags: [engram, architecture]
engram_id: 2609
type: architecture
---

# Completed 4-repo native integration (Headroom, gentle-ai, awesome-llm)

**What**: Completed the 4-repo integration plan for Gentle-Vanguard as native TS. (1) Headroom structural compression (SmartCrusher JSON, tabular compaction, LogCompressor, TextCrusher+BM25, CrossCompression) in src/structural-compression.ts with safety-mode (input=lossless, output=lossy). (2) gentle-ai multi-profile-per-SDD-phase (config/model-router.json profiles + src/model-profile-switcher.ts). (3) awesome-llm hash-chained audit in event-sourcing.ts (prevHash+hash SHA-256, verify action detects tampering). (4) awesome-llm CRAG retrieval grader (src/retrieval-grader.ts, BM25 lexical grading + keyword-fallback).

**Why**: User wanted to operate with all tools, absorb knowledge from external repos natively without Python/Rust/Go sidecars, and elevate the stack (context/token/cost optimization).

**Where**: src/structural-compression.ts, src/model-profile-switcher.ts, src/retrieval-grader.ts, src/event-sourcing.ts, config/structural-compression.json, config/model-router.json, tests/unit/{structural-compression,retrieval-grader,event-sourcing-hashchain}.test.ts, AGENTS.md

**Learned**: (1) Safety-critical: lossy compression on INPUT/prompt path degrades model reasoning; input must be lossless-only, output can be lossy. (2) On Windows, execSync/execFileSync('npx.cmd') fails with EINVAL; use execFileSync(process.execPath, ['--import','tsx',...]) for CLI subprocess tests. (3) agent-skills repo was already integrated (24 skills in .opencode/skills/). Commits: 61987601, 1c874663, ab59afce, 4491eb23, bbe8e67a. Watchtower 85/85.

---
*Imported from Engram on 2026-09-06*
