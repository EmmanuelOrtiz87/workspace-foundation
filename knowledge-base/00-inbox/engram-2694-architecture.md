---
created: 2026-08-09 05:04:53
tags: [engram, architecture]
engram_id: 2694
type: architecture
---

# M6 tiering aplicado en delegación real (AGENT_TEMPERATURE)

**What**: El tiering M6 (domainTiering) dejó de ser solo reporte y ahora se aplica en la ejecución real. DelegationRequest acepta `temperature?: number`; delegate() calcula `effectiveTemp = request.temperature ?? agentConfig.temperature` (un override de 0 — premium — se honra, solo `undefined` cae al default hardcoded); runNativeAgent lo inyecta como AGENT_TEMPERATURE en el env del proceso hijo. route-and-delegate.ts pasa `tier.temperature` en la llamada.

**Why**: Next-step pendiente del plan M1-M10: el tiering se resolvía y se reportaba pero el agente corría con temperatura hardcoded por config (0.5), ignorando el tier premium (0.1) / balanced (0.25) / fastCheap.

**Where**: src/agent-delegator.ts (interface DelegationRequest + delegate() + runNativeAgent), src/route-and-delegate.ts (llamada con temperature: tier.temperature)

**Learned**: Verificación punta a punta: "social media campaign" → mkt-agent → tier balanced (temp 0.25, guard high) → success True con artifact persistido en .session/artifacts/marketing/.

---
*Imported from Engram on 2026-09-06*
