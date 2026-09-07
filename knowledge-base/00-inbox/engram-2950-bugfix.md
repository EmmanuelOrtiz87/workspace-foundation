---
created: 2026-08-21 18:36:15
tags: [engram, bugfix]
engram_id: 2950
type: bugfix
---

# Fixed CI Coverage EACCES: shell-free c8 + pre-expanded globs

**What**: Fixed Coverage Report CI job (EACCES spawn crash) in src/coverage-runner.ts by eliminating shell:true from the c8 invocation
**Why**: Unquoted glob patterns (--include src/**/*.ts, --exclude **/*.test.ts, tests/*/*.test.ts) passed to spawnSync(c8Bin, args, {shell:true}) get EXPANDED BY BASH on Linux CI. c8 then mis-parses argv: first expanded file becomes the wrapped COMMAND (src/agents/doc-agent.ts) and the rest its args → spawn EACCES (non-executable .ts). Windows cmd.exe does NOT expand wildcards → worked locally, failed only on CI.
**Where**: src/coverage-runner.ts (~lines 176-233). Commit 3bcc730d "fix(coverage): shell-free c8 invocation with pre-expanded test globs" pushed to private main+develop.
**Learned**: Fix pattern: (1) invoke c8 via its JS entry with process.execPath and NO shell: spawnSync(process.execPath, [node_modules/c8/bin/c8.js, ...args]); (2) absolute paths for inner command too (process.execPath + node_modules/tsx/dist/cli.mjs instead of 'npx tsx' — removes PATH/.cmd-shim dependency); (3) pre-expand test globs to concrete files with readdirSync for determinism. Rule of thumb: NEVER pass glob patterns through a shell:true spawn — expand them in-process or drop the shell.

---
*Imported from Engram on 2026-09-06*
