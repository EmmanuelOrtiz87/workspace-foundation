---
created: 2026-08-09 04:44:15
tags: [engram, architecture]
engram_id: 2691
type: architecture
---

# M6 domainTiering + utilidad src/domain-tier.ts

**What**: M6 tiering de modelos por dominio formalizado: sección domainTiering en config/model-router.json (premium: finance/legal/gov temp 0.1 guard critical; balanced: mkt/sales/hr/bus-tele/knowledge/sia temp 0.25 guard high; fastCheap: gitflow/ops/session temp 0.15 guard medium) + utilidad src/domain-tier.ts (getDomainTier/resolveAgentTier/loadDomainTiering) integrada en route-and-delegate (el resultado ahora incluye tier del agente recomendado).
**Why**: finance/legal son correctness-critical (modelos deben balancear, legal escala ante duda) — requieren política de calidad explícita, no implícita en temperatures de config/agents.json.
**Where**: config/model-router.json (sección domainTiering), src/domain-tier.ts (nuevo), src/route-and-delegate.ts (tier en RouteResult).
**Learned**: (1) Editar JSON grande con PowerShell requiere anclas estructurales — el reemplazo naive deja comas huérfanas. (2) NO exportar funciones con `export` inline Y en bloque final — esbuild da "Multiple exports with the same name". (3) Verificado: legal-agent→premium temp 0.1, mkt-agent→balanced temp 0.25, gitflow-agent→fastCheap temp 0.15, unknown→default balanced.

---
*Imported from Engram on 2026-09-06*
