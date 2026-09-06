---
created: 2026-08-09 22:09:27
tags: [engram, architecture]
engram_id: 2719
type: architecture
---

# create-gentle-vanguard scaffold template

**What**: Implemented `src/create-gentle-vanguard.ts` — bootstrap CLI that scaffolds a new project with the Gentle-Vanguard stack in one command (ROADMAP backlog item #3). Copies curated base structure (config/, src/, adapters/, scripts/, rules/, tests/, docs/, .opencode/ + top-level support files) applying an ignore list, generates a base package.json + README, and optionally runs npm install.
**Why**: Requirement: "npx create-gentle-vanguard para bootstrap de proyectos". Priority Baja ~2h, simple, local-first, zero cloud deps.
**Where**: src/create-gentle-vanguard.ts, tests/unit/create-gentle-vanguard.test.ts (12 tests), docs/product/CREATE-GENTLE-VANGUARD.md, package.json scripts `create` and `create:template`.
**Learned**: (1) Must guard `main()` with `if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href)` so importing the module for unit tests does NOT execute the CLI (pattern used by retrieval-grader.ts:131) — without it, the test import created a stray ./gentle-vanguard-app dir. (2) Pure helpers (isIgnored/filterCopyable/sanitizeProjectName/buildBasePackageJson/buildReadme/walkProject) are exported disk-free for testing. (3) Ignore list: node_modules/.git/.runtime/.session/.telemetry/.codegraph/dist/coverage/keys/protected/graphify-out/lockfiles/*.local.json at any depth; src imports adapters/command-runner.js so `adapters/` must be copied for the template to typecheck. (4) `npx tsx src/create-gentle-vanguard.ts --dry-run` lists 1411 files (~14.4MB) grouped by top-level dir; real copy verified no leaks.

---
*Imported from Engram on 2026-09-06*
