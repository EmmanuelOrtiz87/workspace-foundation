---
created: 2026-08-24 23:39:28
tags: [engram, architecture]
engram_id: 3079
type: architecture
---

# Deployment prerequisites contract

**What**: Existing Kubernetes manifest uses mutable :latest images and has no NetworkPolicy; MCP execution policy is intentionally empty/safe by default, while OS sandbox/CNI enforcement are external facts.
**Why**: Implement repository-native validation for digest promotion, NetworkPolicy prerequisites, and MCP sandbox prerequisites without inventing registry, CNI, or runtime values.
**Where**: config/k8s/gentle-vanguard-deployment.yml, src/ci/static-gates.ts, config/mcp-execution-policy.json, .github/workflows/ci.yml
**Learned**: Validation must distinguish repository-checkable structure from required operator-provided evidence and fail closed only in explicit promotion mode.

---
*Imported from Engram on 2026-09-06*
