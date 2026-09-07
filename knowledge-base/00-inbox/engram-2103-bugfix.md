---
created: 2026-07-27 19:52:14
tags: [engram, bugfix]
engram_id: 2103
type: bugfix
---

# Fixed opencode.json and security warnings

**What**: Fixed multiple configuration and security warnings in the Gentle-Vanguard stack

**Why**: Session autostart was showing warnings that needed resolution before normal operations

**Where**:
- `opencode.json` - Removed `description` property not recognized by OpenCode
- `package.json` - Updated `@modelcontextprotocol/sdk` from ^1.29.0 to ^1.30.0
- `src/session-complete.ts` - Removed unused imports (mkdirSync, rmSync, statSync)
- `config/approved-licenses.json` - Created new file with approved dependency licenses

**Learned**:
- OpenCode rejects unknown properties in config files (description was not in schema)
- pnpm overrides in package.json are ignored by pnpm 11+; must use .npmrc or pnpm-workspace.yaml
- Security vulnerabilities from devDependencies are non-blocking but should be documented
- License compliance requires explicit approval file for the security policy checker

---
*Imported from Engram on 2026-09-06*
