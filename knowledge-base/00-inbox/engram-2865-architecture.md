---
created: 2026-08-17 04:03:59
tags: [engram, architecture]
engram_id: 2865
type: architecture
---

# Native SLSA provenance generator (Build L1, in-toto v1)

**What**: Implemented a native TypeScript SLSA provenance generator (`src/slsa-provenance.ts`) producing in-toto v1 statements with SLSA v1.0 provenance predicate, satisfying SLSA Build L1 without external tooling (cosign/slsa-verifier not available on this Windows env). 19 unit tests in `tests/unit/slsa-provenance.test.ts` all pass. CLI actions: generate (builds statement from artifact files) and verify (validates structure against SLSA Build L1 requirements). Auto-detects git commit/ref/repo from .git/. package.json scripts: provenance:generate, provenance:verify. Generated real provenance for sbom/gentle-vanguard-sbom.json stored at provenance/gentle-vanguard-provenance.json (tracked, following sbom/ pattern). Roadmap item "supply-chain attestation (SLSA provenance)" marked complete. ADR-0014 created documenting the decision (native TS over cosign/GitHub Actions SLSA generator). Committed as 036ca084.
**Why**: Roadmap (docs/guides/STACK-OPTIMIZATION-ROADMAP.md L551) listed SLSA provenance as remaining. User directive: build capabilities natively in the stack or absorb knowledge from internet — spec absorbed via web-crawler (slsa.dev/spec/v1.0/provenance via Jina Reader fallback).
**Where**: src/slsa-provenance.ts, tests/unit/slsa-provenance.test.ts, docs/adr/ADR-0014-slsa-supply-chain-attestation-native-ts.md, docs/adr/README.md, docs/guides/STACK-OPTIMIZATION-ROADMAP.md, package.json, provenance/gentle-vanguard-provenance.json.
**Learned**: (1) SLSA v1.0 predicateType is "https://slsa.dev/provenance/v1" (NOT the URL-bar path /provenance), _type is "https://in-toto.io/Statement/v1". (2) SLSA Build L1 REQUIRED fields: buildDefinition (buildType + externalParameters), runDetails (builder.id). (3) Key field changes vs v0.2: parameters→externalParameters, environment→internalParameters, materials→resolvedDependencies, buildInvocationId→invocationId. (4) detectRepoUrl() auto-detects the real repo in tests — pass repoUrl:'' explicitly when testing empty resolvedDependencies. (5) Test files are excluded from the project's eslint config (node:test pattern) — only lint src/ files. (6) My initially invented sha256 vector was wrong — must compute real digest (node -e) rather than guessing.

---
*Imported from Engram on 2026-09-06*
