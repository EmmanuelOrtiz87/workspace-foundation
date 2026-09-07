---
created: 2026-09-01 00:19:21
tags: [engram, decision]
engram_id: 3559
type: decision
---

# oc-keyring — business context and operational impact

## Why this matters (business)

The owner operates two OpenCode accounts simultaneously (A=primary, B=secondary) on both Zen and Go products. Before this work, rotating accounts cost ~5 min of manual work: deslog opencode.io → login other account → copy API key → paste in Desktop → restart session. Multiplied by daily rotations, this is significant friction.

## Operational impact (post-deploy)

- Rotation time: 5 min → 3 sec (1 command + 1 picker click)
- Zero manual copy/paste of secrets in chat/UI
- Zero OpenCode Desktop restarts
- Zero risk of pasting the wrong key
- Account switching is now atomic and reversible (backups timestamped)

## Security posture

- API keys still stored in plaintext in uth.json (same as before — no regression)
- Vault file (ccounts.json) lives in user space, not in repo
- Backups stay in user space, never committed
- Each write creates a backup → recovery from accidental change is 1 copy command
- Watch [opencode#4318](https://github.com/anomalyco/opencode/issues/4318) for OS keyring support

## Integration with gentle-vanguard stack

- **config/model-router.json**: NOT modified. All 30+ agent bindings still point to opencode/big-pickle (legacy) which works because legacy key == Cuenta A key. Zero migration cost.
- **config/auto-delegation.json**: NOT modified.
- **openspec/**: NOT modified.
- **No new files added to repo**. Everything lives in %USERPROFILE% and C:\Users\emman\bin\.
- **No new dependencies** (PowerShell is native to Windows).

## When to evolve this

- If the stack needs dynamic account rotation (auto-failover from A to B on 429), integrate oc-keyring with the model-router. Roadmap in oc-keyring-architecture.md §7.
- If the owner adds a 3rd account, no code changes needed — just oc-keyring add zen C sk-....
- If OpenCode ships a 3rd product (e.g. Enterprise), add a product entry to the script and 2 more provider blocks to opencode.json.

---
*Imported from Engram on 2026-09-06*
