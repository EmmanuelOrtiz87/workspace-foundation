---
created: 2026-07-09 02:23:39
tags: [engram, decision]
engram_id: 1504
type: decision
---

# Session close must include mem_session_end

**What**: No cerré sesión en Engram (mem_session_end) al finalizar la sesión, omitiendo el proceso definido en el stack.
**Why**: Descuido al dar la sesión por terminada sin ejecutar el paso de cierre correspondiente.
**Where**: Engram memory system — session lifecycle
**Learned**: El cierre de sesión en Engram NO es opcional. Es parte del flujo obligatorio del stack. Debe ejecutarse siempre antes de decir "sesión cerrada". Esto aplica aunque el usuario no lo mencione explícitamente.

---
*Imported from Engram on 2026-09-06*
