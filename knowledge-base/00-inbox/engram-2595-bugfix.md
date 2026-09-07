---
created: 2026-08-06 19:12:19
tags: [engram, bugfix]
engram_id: 2595
type: bugfix
---

# Fixed timeout-config.json schema violation blocking git commit (opencode-validation hook)

**What**: Fixed timeout-config.json schema validation failure that was blocking git commits via the opencode-validation pre-commit hook.

**Why**: The pre-commit hook `opencode-validation` failed with "Configuration validation failed" — timeout-config.json had 2 keys not allowed by its schema (additionalProperties: false).

**Where**: config/timeout-config.json, config/timeout-config.schema.json

**Learned**:
1. The `opencode-validation` pre-commit hook validates config JSON files against their schemas and BLOCKS commits on failure. This is a real quality gate.
2. `timeout-config.json` had 2 dead keys that violated the schema:
   - Top-level `timeouts` metadata block (version/categories/description) — not in schema, unused in code
   - `session.token_budget_source_of_truth` — not in schema, unused in code
3. Verified both keys were unused via grep (no references in src/, scripts/, apps/), then removed them so the config matches the schema (source of truth).
4. **Gotcha**: `npm run test:config` (24/24 pass) does NOT validate timeout-config.json against its schema — the schema validation only runs in the pre-commit hook. So a config can pass tests but still block commits.
5. When a git commit hangs/times out, the commit may still complete — the pre-commit hooks (json-lint, secretlint, trufflehog, opencode-validation, workflow-lint) are slow. Check `git log` to confirm the commit was created before assuming failure.

**Where**: Verified: test:config 24/24, typecheck 0 errors, working tree clean, 2 commits created (dc376c42, 9fe33266).

---
*Imported from Engram on 2026-09-06*
