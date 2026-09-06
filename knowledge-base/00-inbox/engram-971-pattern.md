---
created: 2026-05-21 03:46:07
tags: [engram, pattern]
engram_id: 971
type: pattern
---

# Session-manager self-improving pipeline integration

**What**: Added Invoke-SelfImprovingPipeline and Invoke-GatewayCleanup functions to session-manager.ps1 End-Session. Pipeline: usage-tracker record → skill-nudge → skill-auto-patch → validate-configs → gateway inbox check. This wires up NORMATIVAS-SESSION.md 2.4 steps 10-11 into actual automation.\n**Why**: The self-improving pipeline was documented in NORMATIVAS but NOT wired into any automation script. Session-manager's End-Session function was the natural integration point.\n**Where**: scripts/utilities/session-manager.ps1 — End-Session function (first line), new Invoke-SelfImprovingPipeline + Invoke-GatewayCleanup functions\n**Learned**: Documenting a pipeline without wiring it into an automation script is a partial-state bug. Always connect documentation to execution. The session-manager End-Session mode is the single point of truth for session close — all close protocols should be called from there.

---
*Imported from Engram on 2026-09-06*
