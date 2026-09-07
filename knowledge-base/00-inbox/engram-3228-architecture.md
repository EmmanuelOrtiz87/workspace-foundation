---
created: 2026-08-29 06:25:26
tags: [engram, architecture]
engram_id: 3228
type: architecture
---

# F2.5 websocket-server split (3004→330 lines)

**What**: Split apps/web-dashboard/server/websocket-server.ts (3004 lines) into ws-hub/ (6 modules: context, session-store, skill-execution, metrics, connection, broadcast) + handlers/ (12 per-domain route modules) + thin entry (~330 lines). Commit 7f7135c5.
**Why**: F2.5 acceptance = no file >800 lines. websocket-server was the biggest file in the repo.
**Where**: apps/web-dashboard/server/websocket-server.ts, ws-hub/, handlers/, eslint.config.js
**Learned**: (1) Delegated to sdd-apply subagent with precise spec — worked well; subagent verified tsc 0, vitest 61 pass, build OK, smoke /api/health 200, 30 GET endpoints 200. (2) Root eslint flat config did NOT cover apps/web-dashboard/server/** — added non-type-aware block (no `project`/type-aware rules) since root tsconfig excludes the dashboard. (3) security/detect-unsafe-regex fires on the admin path regex — use `// eslint-disable-next-line security/detect-unsafe-regex` placed on the line IMMEDIATELY before the regex (prettier may move the regex to its own line, breaking the directive). (4) `catch (err)` unused → `catch {` (optional catch binding). (5) Handler signature pattern: `async (req, res, url, _ctx: typeof import('../ws-hub/context.ts'), headers): Promise<boolean>` returning false to fall through to next handler. (6) watchtower health baseline unchanged: 102 PASS / 2 WARN / 0 FAIL / 104 total.

---
*Imported from Engram on 2026-09-06*
