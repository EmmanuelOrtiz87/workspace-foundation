---
created: 2026-08-30 04:05:24
tags: [engram, decision]
engram_id: 3408
type: decision
---

# GitHub production security baseline audit

**What**: Completed read-only audit of GitHub rulesets, Actions, scanners, approvals, signing, Dependabot, and release/deploy workflows; proposed a minimal single-gate production baseline.
**Why**: User requested production security controls, stack redundancy analysis, least-privilege GitHub App/OIDC guidance, and AI auto-approval limits without modifications.
**Where**: .github/workflows/ci.yml, reusable-security-scan.yml, reusable-release.yml, release.yml, sync-public.yml, deploy-presentations.yml, .github/dependabot.yml, CODEOWNERS, remote rulesets 16196666/21824110.
**Learned**: main ruleset is active and requires one approval, CODEOWNERS review, CodeQL/Gitleaks code-scanning alerts, signed commits, but has no required status checks; legacy branch-protection API is disabled. CodeQL analysis is not configured (only upload-sarif for Trivy), while Gitleaks/native secret gate/Secretlint and Trivy/npm audit/Syft-Grype/custom container scan overlap. Actions policy allows all actions and does not require SHA pinning. Release and public-sync workflows have write authority; release is tag-push driven without a protected release environment or attestation/signing gate, and sync uses a classic PAT. Ruleset bypass actors include repository role and integration with always bypass. Recommended baseline: one CI workflow producing stable check names plus one aggregate blocking gate; PR approval + CODEOWNERS, protected main/develop, no admin bypass; Gitleaks+secretlint/native gate consolidated, CodeQL only if configured, Trivy filesystem/image as appropriate, dependency review, tests/build/SBOM/provenance; OIDC only in protected deploy job/environment; GitHub App least privilege instead of PAT. AI must never approve/merge/bypass gates, modify rulesets/permissions/secrets, rotate signing keys, or deploy production without human approval and auditable separation of duties.

---
*Imported from Engram on 2026-09-06*
