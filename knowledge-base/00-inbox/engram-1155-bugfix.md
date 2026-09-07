---
created: 2026-05-26 12:25:59
tags: [engram, bugfix]
engram_id: 1155
type: bugfix
---

# PowerShell return unwraps arrays — comma trick fix

**What**: `return @(single_element)` en PowerShell desempaqueta el array y retorna el elemento suelto. Ej: `function f { return @(@{key='val'}) }` retorna hashtable, no array. Fix: `return , $result` (unary comma) preserva el array.

**Why**: `$team.logs` de Team Mode se rompía al re-leer JSON — el array `[{...}]` se convertía en hashtable `{...}`, causando "Key already exists in dictionary" en `$team.logs += @{...}`.

**Where**: team-mode.ps1:41 — `Convert-PSObjectToHashtable` function, array branch.

**Learned**: Este es un bug clásico de PowerShell. El output stream SIEMPRE enumera colecciones. Para return arrays: (a) usar `Write-Output -NoEnumerate` (PS7+), (b) o usar `, $array` (universal). El comma trick funciona para todos los casos de arrays de 0 o 1+ elementos.

---
*Imported from Engram on 2026-09-06*
