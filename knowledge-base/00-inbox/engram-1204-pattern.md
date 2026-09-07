---
created: 2026-05-29 02:23:34
tags: [engram, pattern]
engram_id: 1204
type: pattern
---

# CI + pre-commit integration for validate-tool-configs

**What**: Integrado validate-tool-configs.ps1 en CI (test-suite.yml + autonomous-validation.yml) y en pre-commit hooks (.lefthook.yml). Todos los tool configs se validan contra schemas oficiales en cada commit y en cada PR.

**Why**: Completar el "triple guard pattern" — validación autostart + pre-commit hook + CI. Previene que props no estándar se cuelen en tool configs.

**Where**:
- `.github/workflows/test-suite.yml` — nuevo step "Validate Tool Configs" después de Run All Tests (continue-on-error)
- `.github/workflows/autonomous-validation.yml` — nuevo step "Validate Tool Configs" antes de cross-workspace validation
- `.lefthook.yml` — nuevo comando `validate-tool-configs` en pre-commit con flags `-Fix -Quiet`

**Learned**: 308/308 tests pasando. validate-tool-configs.ps1 autofix (-Fix) remueve props no estándar automáticamente en pre-commit. CI corre con -Quiet para no ensuciar logs.

---
*Imported from Engram on 2026-09-06*
