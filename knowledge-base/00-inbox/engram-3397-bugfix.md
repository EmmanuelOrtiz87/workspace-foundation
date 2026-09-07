---
created: 2026-08-30 03:44:35
tags: [engram, bugfix]
engram_id: 3397
type: bugfix
---

# Dependabot Vite Vitest sharp blocked by baseline gates

**What**: Prepared but did not publish an isolated dependency update from origin/main; proposed Vite 8.2.2, Vitest 4.1.11, @vitejs/plugin-react 6.1.1, and sharp 0.35.4, with a Vite 8-compatible manualChunks function.
**Why**: Resolve open Dependabot advisories without mixing existing Dependabot PRs or changing release versions.
**Where**: Temporary worktree C:/Workspace_local/gentle-vanguard-dependabot; manifests in apps/{content-cms,gv-analytics,web-dashboard}/package.json, templates/config/package.json, skills/huashu-design/package.json, root package.json/pnpm-workspace.yaml, pnpm-lock.yaml, apps/web-dashboard/vite.config.ts.
**Learned**: Metadata verified Vite latest 8.2.2, Vitest latest 4.1.11, plugin-react 6.1.1 requires Vite ^8, sharp latest 0.35.4 and advisory patch is 0.35.0. Frozen install, pnpm audit, typecheck, root lint, workflow lint, analytics build, dashboard tests/build passed. Publication was blocked because repository-wide Prettier check has 131 pre-existing failures, root test has 2 pre-existing/environment failures, and content-cms lint has an unrelated unused ContentOS error. Temporary worktree was removed; original dirty worktree was not modified.

---
*Imported from Engram on 2026-09-06*
