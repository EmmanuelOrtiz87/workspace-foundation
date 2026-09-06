---
created: 2026-05-25 09:10:28
tags: [engram, architecture]
engram_id: 1129
type: architecture
---

# Fix CI/CD Pester 5.x, Node 24 actions, PR #130

**What**: Segunda ronda de fixes post-auditoría: Pester 5.x API en agent-verify.ps1, downgrade routing matrix FAIL→WARN, 16 workflows migrados a Node 24 SHA-pinned actions, pin-actions.ps1 actualizado, test-suite.yml output fix. Push a develop bloqueado por branch protection rules → creado PR #130 desde fix/ci-cd-pester-node24-0609.

**Why**: Completar items pendientes de auditoría: tests fallando con Pester 5.x, Node.js 20 deprecation (deadline June 2, 2026), test results artifact vacío.

**Where**: scripts/utilities/agent-verify.ps1, .github/workflows/*.yml (16 files), scripts/security/pin-actions.ps1, .github/workflows/test-suite.yml

---
*Imported from Engram on 2026-09-06*
