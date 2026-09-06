---
created: 2026-07-05 03:22:50
tags: [engram, architecture]
engram_id: 1472
type: architecture
---

# Stack validation session — July 4, 2026: 72 PASS 0 FAIL

**What**: Sesión completa de validación y evolución del stack Gentle-Vanguard — fixes, nuevas normativas, scripts de planning y costos.

**Why**: El stack necesitaba estabilización (Dashboard WS caído, Knowledge Vault perdido), nuevas normativas basadas en research de best practices 2026, y herramientas de estimación/costos.

**Where**:
- `scripts/utilities/dashboard/` — Dashboard WS fix (watchdog restart)
- `knowledge-base/` — 87 notas restauradas
- `rules/TOKEN-BUDGET-POLICY.md` — Nueva normativa
- `rules/COST-ATTRIBUTION.md` — Nueva normativa
- `rules/PLANNING-ESTIMATION-FRAMEWORK.md` — Nueva normativa
- `rules/OBSERVABILITY-SLOS.md` — Nueva normativa
- `rules/HUMAN-IN-THE-LOOP.md` — Nueva normativa
- `.github/PULL_REQUEST_TEMPLATE.md` — Nuevo template
- `scripts/utilities/planning/planning-estimator.ps1` — Nuevo script
- `scripts/utilities/telemetry/TELEMETRY-METRICS/cost-tracker.ps1` — Nuevo script
- `config/token-budget-limits.json` — Nueva configuración
- `config/session-autostart.config.json` — Actualizado con 2 nuevos steps
- `rules/NORMATIVES.md` — Actualizado con 6 nuevas entradas
- `README.md` — Badge versión 3.3.2 → 3.3.3

**Learned**:
- Azure connectors fallan por falta de credenciales (esperado en dev local) — no es bug
- AWS funciona cuando las credenciales están configuradas
- El stack funciona 100% local sin cloud connectors
- 39 normativas totales (33 existentes + 6 nuevas)
- Watchtower: 72 PASS, 2 WARN, 0 FAIL — todos los componentes OK
- Research 2026: Agent Maturity Model L1-L5, Token Budget tracking, SDD lifecycle, OWASP LLM Top 10 + Agentic Top 10

---
*Imported from Engram on 2026-09-06*
