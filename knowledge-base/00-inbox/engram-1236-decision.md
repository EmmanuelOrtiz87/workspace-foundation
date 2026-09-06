---
created: 2026-05-30 05:58:14
tags: [engram, decision]
engram_id: 1236
type: decision
---

# README sync: private/public content separation enforced

**What**: Enforced normativa for private/public repo README content separation. Fixed private README footer v2.23.0→v2.24.0. Summarized public README-PUBLIC.md - removed internal agent model profiles, raw skill names, detailed CI/CD table, full architecture internals. Unified presentation metrics (normativas 44/50→42, agents 15→18, added BUS-TELE + CODEGRAPH tags). Committed adfb3f93, pushed to origin/main, synced to public repo via sync-to-public.ps1. Deleted merged branch fix/ci-cd-pester-node24-0609.

**Why**: Private repo README showed wrong version. Public repo mirrored private repo content (exposing internal architecture, agent model routing, skill catalog with internal names) violating normativa that public content must be summarized.

**Where**: README.md (footer v2.23→v2.24), README-PUBLIC.md (full content restructure -59%), gentle-vanguard-presentation.html (metrics unification), scripts/utilities/DEPLOYMENT/sync-to-public.ps1 (executed sync)

**Learned**: sync-to-public.ps1 runs pre-push hooks (audit-check, orchestrator-auto-fix) automatically. Presentation had 3 different normativa counts (44, 44, 50) across slides - always verify all slides when updating metrics. The normativa about public/private content is implicit in README-GOVERNANCE.md (different mandatory sections per repo) and HOMOLOGATION-GUIDE.md (what not to sync).

---
*Imported from Engram on 2026-09-06*
