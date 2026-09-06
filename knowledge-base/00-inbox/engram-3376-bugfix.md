---
created: 2026-08-29 23:14:18
tags: [engram, bugfix]
engram_id: 3376
type: bugfix
---

# GitFlow blocked by BOM validation

**What**: Continued safe GitFlow after user authorized retaining the intentional traceability change in SESSION-CLOSURE-SUMMARY.md and restored only five generated artifacts from HEAD.
**Why**: User requested atomic commits, complete gates, push and PR, stopping on failures.
**Where**: integration/gv-stack-normalization; scripts/utilities/CONFIG/session-autostart.config.json.
**Learned**: Two commits succeeded (`04abc73a` scripts migration and `ac179644` CMS/token telemetry). The third runtime/knowledge commit was blocked by pre-commit json-lint and opencode-validation because the staged `scripts/utilities/CONFIG/session-autostart.config.json` contains a UTF-8 BOM (`Unexpected token '﻿'`). No files were discarded; the runtime block remains staged. No gates, push, or PR were attempted after the failure.

---
*Imported from Engram on 2026-09-06*
