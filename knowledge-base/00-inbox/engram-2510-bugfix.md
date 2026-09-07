---
created: 2026-08-04 14:51:16
tags: [engram, bugfix]
engram_id: 2510
type: bugfix
---

# 229 broken PS1 refs audit + fix mapping

**What**: Audit found 229 functional references to non-existent .ps1 files across src/, config/, scripts/, .github/. Script `src/audit-ps1-refs.ts` performs the audit.
**Why**: ~390 PS1 were migrated to TS (config/ps1-ts-migration.json tsFiles array is the authoritative map) but references weren't updated, causing silent failures (existsSync returns false, spawnSync points to nothing).
**Where**: src/audit-ps1-refs.ts (audit tool), 229 broken refs in src/*.ts and config/*.json.
**Learned**: Files with TS-first + PS1-fallback pattern (post-merge-sync.ts, saga-orchestrator.ts, maintenance-watchtower.ts, validate-readme-hook.ts) are SAFE — the PS1 fallback is dead code. Files that REQUIRE the PS1 (setup-multi-machine.ts throws if missing) are the REAL broken ones. Fixed setup-multi-machine.ts to use src/bootstrap.ts via npx tsx. Subagent sdd-apply explored all refs and confirmed TS equivalents exist for most: security-scan.ts, cli/gv.ts, auto-norm-enforcer.ts, resilience-handler.ts, pre-process-input.ts, pre-commit-validation.ts, post-merge-sync.ts, safety-guardrails.ts, mutation-safety-scorer.ts, prompt-injection-guard.ts, siem-audit-bridge.ts, json-lint.ts, workflow-lint.ts, privacy-gateway.ts, mcp-bridge.ts, bootstrap.ts, knowledge-base-sync.ts, cross-workspace-validator.ts, rollback-orchestrator.ts, engram-rag-reindex.ts. NO TS equivalent: pre-compact-hook.ps1, handoff-compress.ps1, create-gitflow-branch.ps1, create-pull-request.ps1, audit-sweep.ps1, normativa-resolver.ps1, pre/post-test.ps1, on-failure.ps1, adaptive-claude-cline-profile.ps1, plus long tail in gentle-vanguard-sync.json. STILL PENDING: edit remaining src refs (code-review.ts:124 security-scan.ps1, hooks/karpathy-enforcer-hook.ts, hooks/normative-audit-hook.ts, hooks/post-checkout.ts, hooks/pre-commit.ts, hooks/pre-commit-privacy.ts, validate-readme.ts:218, knowledge-base-*.ts, orchestrate-auto-fix.ts, digest-generator.ts, engram-rag-reindex.ts, bootstrap.ts:232, cross-workspace-validator.ts, karpathy-enforcer.ts, infrastructure/normative-audit-pipeline.ts) and all config JSONs (quality-gates.json, hooks-config.json, tool-*.json, evolution-config.json, security-privacy.json, observability-config.json, gentle-vanguard-sync.json, etc.).

---
*Imported from Engram on 2026-09-06*
