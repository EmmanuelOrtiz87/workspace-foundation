---
created: 2026-05-26 12:26:02
tags: [engram, bugfix]
engram_id: 1156
type: bugfix
---

# PowerShell strings are PSObject — conversion guard

**What**: `"QA" -is [PSObject]` retorna $true en PowerShell porque strings exponen .Length, .Chars via PSObject. Una función recursiva Convert-PSObjectToHashtable que no checkee `[string]` antes de `[PSObject]` termina convirtiendo strings en hashtables vacíos `@{Length=N}`.

**Why**: Team Mode members array `["QA","TEST"]` se serializaba como `[{"Length":2},{"Length":4}]` en JSON tras re-escritura, porque la función Convert-PSObjectToHashtable trataba strings como PSObject y los convertía en hashtables.

**Where**: team-mode.ps1:38 — `if ($InputObject -is [string] -or $InputObject -is [valueType]) { return $InputObject }` ANTES del check `[PSObject]`.

**Learned**: Orden de checks en funciones recursivas PS: null → hashtable → string/valueType → array → PSObject → default. El check de string/valueType es obligatorio antes de PSObject.

---
*Imported from Engram on 2026-09-06*
