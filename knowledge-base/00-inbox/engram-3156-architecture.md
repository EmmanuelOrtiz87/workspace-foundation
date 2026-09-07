---
created: 2026-08-25 14:05:00
tags: [engram, architecture]
engram_id: 3156
type: architecture
---

# Documented local-first operating model

**What**: Documented Gentle-Vanguard as LOCAL-FIRST / SERVER-OPTIONAL across the canonical status, session plan, stack manual, AGENTS.md, dashboard admin status, Kubernetes README, and deployment prerequisites; added ADR-0017 with local-default/local-multi-tenant/server-promotion/saas-federated profiles and deployment-scoped auth rules.
**Why**: Make local operation the official supported scope while preserving server/SaaS/cloud capabilities as opt-in external promotion/federation paths, without inventing external security evidence.
**Where**: docs/adr/ADR-0017-local-first-operating-model.md, docs/status/CANONICAL-STATUS.md, docs/plans/NEXT-SESSION-PLAN-2026-08-25.md, docs/stack-manual-full.md, AGENTS.md, docs/security/DASHBOARD-ADMIN-STATUS.md, config/k8s/README.md, docs/operations/deployment-prerequisites.md.
**Learned**: ADR-0017 was already occupied by the container scanner; its content was preserved under ADR-0019 and current index/roadmap references were updated rather than deleting the historical decision. content:validate passed 21/21; prettier check still reports existing style issues in several documentation files.

---
*Imported from Engram on 2026-09-06*
