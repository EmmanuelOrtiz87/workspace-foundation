---
created: 2026-08-31 22:50:44
tags: [engram, decision]
engram_id: 3556
type: decision
---

# Preferred OpenCode account rotation architecture

**What**: Prefer an external account-profile launcher over an OpenCode plugin or blind version change.
**Why**: OAuth credentials are loaded before normal plugins; existing plugins/model routing can select models but cannot reliably switch Desktop identity. Separate profiles preserve sessions and make switching explicit.
**Where**: Planned `gv opencode account` commands; existing model router remains separate.
**Learned**: Validate official support for data-directory/profile isolation in the installed OpenCode version first. Upgrade only in an isolated test if release notes document account/profile support; otherwise use sequential login/logout or isolated stores, never mutate active auth state.

---
*Imported from Engram on 2026-09-06*
