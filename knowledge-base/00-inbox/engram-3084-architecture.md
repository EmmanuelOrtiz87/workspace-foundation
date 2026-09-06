---
created: 2026-08-24 23:43:20
tags: [engram, architecture]
engram_id: 3084
type: architecture
---

# Deployment validation contracts implemented

**What**: Added config/deployment-prerequisites.json plus strict JSON schema and src/ci/deployment-prerequisites.ts CLI (`validate:deployment`) covering digest-pinned image promotion, operator-supplied NetworkPolicy structure/evidence, and MCP sandbox policy/evidence.
**Why**: Make deployment prerequisites explicit and fail closed without inventing registry, CNI, runtime, network, or workspace values.
**Where**: src/ci/deployment-prerequisites.ts, config/deployment-prerequisites.{json,schema.json}, tests/unit/deployment-prerequisites.test.ts, tests/fixtures/valid-network-policy.yml, docs/operations/deployment-prerequisites.md, package.json, .github/workflows/ci.yml
**Learned**: `--report` is suitable for PR CI; `--promotion` blocks mutable/mismatched images and missing digest env inputs. NetworkPolicy topology remains external and is supplied with `--network-policy`; enforcement evidence must be exactly `true`. Full pnpm typecheck/test:config remains blocked by pre-existing BacklogRepo/BacklogItem errors.

---
*Imported from Engram on 2026-09-06*
