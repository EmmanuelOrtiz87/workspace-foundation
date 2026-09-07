---
created: 2026-08-06 18:59:12
tags: [engram, bugfix]
engram_id: 2594
type: bugfix
---

# Fixed 2 adapter JS syntax bugs found by prettier (quoted keys + template literal)

**What**: Fixed 2 real JS syntax bugs discovered during prettier cleanup of the format adapters.

**Why**: `npm run format:check` reported 2 files prettier couldn't parse — they had actual syntax errors, not just formatting issues.

**Where**: adapters/format-adapters/windsurf-adapter/adapter.js, adapters/format-adapters/codex-adapter/adapter.js

**Learned**:
1. **windsurf-adapter/adapter.js** had 2 invalid object keys with hyphens that are illegal JS syntax:
   - Line 34: `gentle-vanguard: true` → `'gentle-vanguard': true`
   - Line 125: `enableGentle-VanguardSkills: true` → `'enableGentle-VanguardSkills': true`
   Object keys with hyphens MUST be quoted in JS.
2. **codex-adapter/adapter.js** line 182 had a template literal written with an escaped backtick `console.log(\`` instead of a proper template literal ``console.log(` `` — the help text console.log was broken.
3. **Gotcha**: prettier can't parse files with syntax errors, so `format:check` reports them as "code style issues" but the real problem is a syntax error. When prettier reports a file that won't format, run `node --check <file>` to detect the actual syntax error first.
4. After fixing the syntax, prettier --write successfully formatted both files and `npm run format:check` now passes 100% clean ("All matched files use Prettier code style!").

**Where**: All gates verified green: lint 0, typecheck 0, format:check clean, both adapters parse (node --check exit 0).

---
*Imported from Engram on 2026-09-06*
