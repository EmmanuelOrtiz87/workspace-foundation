---
created: 2026-05-26 18:13:25
tags: [engram, pattern]
engram_id: 1165
type: pattern
---

# JSON construction best practice - Agent responsibility

**What**: El error JSON original fue causado por el agente construyendo JSON malformado: `{"project": "workspace_gentle_vanguard.` (faltaba cerrar quote)

**Why**: El agente (LLM) debe construir JSON válido desde el inicio. El validador es un safety net, pero no sustituye la responsabilidad del agente de generar JSON correcto.

**Where**: Cualquier llamada a herramienta que requiera parámetros JSON

**Learned**:
- El agente debe verificar sintaxis JSON antes de enviar
- Comillas, braces y brackets deben estar balanceados
- El validador detecta errores pero el agente debe prevenirlos
- Mejor práctica: construir JSON paso a paso y verificar balance
- Ejemplo de error común: olvidar cerrar `"` o `}` al final

---
*Imported from Engram on 2026-09-06*
