---
created: 2026-08-13 11:09:36
tags: [engram, architecture]
engram_id: 2810
type: architecture
---

# Native secret-scanner TS module (80 patterns, no deps)

**What**: Built a native secrets/API-key detector in TypeScript for the gentle-vanguard stack: src/secret-scanner.ts (core, 80 patterns across aws/gcp/azure/github/gitlab/llm/slack/payment/cloud/generic/private-key), src/secret-scanner-cli.ts (CLI: --scan/--dir/--redact/--no-redact/--entropy/--patterns/--ignore-ext/--json; exit 0 no secrets, 1 secrets, 2 error), config/secret-scanner.json, tests/unit/secret-scanner.test.ts (29 tests), npm script "scan:secrets".
**Why**: Absorb cariddi (Go, GPL-3.0) detection knowledge WITHOUT copying GPL code — regexes are public provider token-format facts, structure/pipeline is original. Task requested a stack-native TS scanner following src/web-crawler.ts / src/retrieval-grader.ts conventions, zero new deps (node:fs/fs/promises, node:path, node:url, node:http/https only).
**Where**: src/secret-scanner.ts, src/secret-scanner-cli.ts, config/secret-scanner.json, tests/unit/secret-scanner.test.ts, package.json ("scan:secrets": "tsx src/secret-scanner-cli.ts")
**Learned**: (1) Object-literal key `private-key:` unquoted → esbuild parses as subtraction, must quote `'private-key'`. (2) `(?i)` inline flags avoided → use /i regex flag (case-insensitive keyword-context patterns). (3) Keyword-context patterns (e.g. algolia/datadog) get builtin:false; config `patterns: 'builtin'|'all'` selects. (4) Shannon entropy filter (threshold 3.5) drops low-entropy FPs (e.g. ghp_ + 36×A has ~0.8 bits/char). (5) Redacted JSON output must ALSO redact context field (all known secret values), else context leaks sibling secrets. (6) `loadConfig` must be exported for CLI. (7) Pre-existing repo typecheck (5) + lint (14) errors in untouched files (circuit-breaker-v2.ts, self-healing-db.ts, fetch-server.ts, multi-channel-alert.ts, etc.) — do not fix (out of scope).

---
*Imported from Engram on 2026-09-06*
