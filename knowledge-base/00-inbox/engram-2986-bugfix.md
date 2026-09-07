---
created: 2026-08-24 01:45:17
tags: [engram, bugfix]
engram_id: 2986
type: bugfix
---

# Fix clock-skew tracing en fuente + i18n AgentChat

**What**: Fix de raíz del clock-skew en tracing-instrument.ts (commit d2afba01): spans 'start' ya no escriben endTime=startTime (duraciones falsas de 0ms); 'end'/'error' recuperan el startTime REAL leyendo el registro start del propio span en .telemetry/spans (self-healing) en vez de confiar en atributos del llamador; start inválido/ausente → span running sin endTime. Verificado e2e: durationMs=4072 para tarea de 3s, p95 real en SLO. Además: AgentChat traducido + badge de frescura en StackCapabilitiesPanel (dc0ee4ec).
**Why**: Las duraciones de spans estaban envenenadas desde la FUENTE: el atributo startTimeUnixNano que los callers debían pasar manualmente en 'end' casi nunca se pasaba → startNs=0 → duración = endNs completo (mil millones de ms). Y los spans 'start' cerraban con endTime=startTime → avgDur=0.
**Where**: src/tracing-instrument.ts, apps/web-dashboard/src/components/AgentChat.tsx, apps/web-dashboard/src/components/StackCapabilitiesPanel.tsx, apps/web-dashboard/src/hooks/useLocale.ts
**Learned**: (1) La CLI de tracing-instrument requiere -Action explícito: `args['Action'] ?? 'start'` — llamar `tracing-instrument.ts end ...` sin flag ejecuta START silenciosamente (creó registros duplicados). (2) Patrón self-healing: leer lo que uno mismo escribió (recoverStartNs escanea el JSONL del día por spanId) es más robusto que contratos de atributos entre procesos. (3) Ventana de validez del start: >0, <=endNs, <=24h.

---
*Imported from Engram on 2026-09-06*
