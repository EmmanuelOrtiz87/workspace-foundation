---
created: 2026-08-20 13:57:36
tags: [engram, bugfix]
engram_id: 2895
type: bugfix
---

# Native TS migration cleanup and service recovery

**What**: Eliminated runtime PS1 dependencies from Karpathy/normative/post-checkout hooks, updated review and shell setup commands to native TypeScript, classified legacy fallback references in the audit, documented the policy, and fixed ProcessLock listener accumulation.
**Why**: The stack audit found missing PS1 runtime paths and repeated autostart MaxListeners warnings; the user requested a fully native, integrated, warning-free stack.
**Where**: src/hooks/karpathy-enforcer-hook.ts, src/hooks/normative-audit-hook.ts, src/hooks/post-checkout.ts, src/hooks/pre-commit.ts, src/audit-ps1-refs.ts, src/core/process-lock-manager.ts, scripts/core/setup.sh, .opencode/commands/review.md, docs/status/LEGACY-REFERENCE-POLICY.md
**Learned**: PS1 audit needed contextual classification because migration inventories and native-first fallbacks are not runtime breakages. Final service recovery restored CodeGraph and Dashboard to operational status.

---
*Imported from Engram on 2026-09-06*
