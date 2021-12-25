---
name: Bro Hook Spiral
synchro_only: true
description: Start as a Bro Hook. After the connection the pilots must dive into a spiral
minimum: 4 seconds
criteria:
  synchro: Flow, entry, duration, disconnection
  twist: One pilot has to stay twisted from entry until exit
repetition_allowed: true
coef: 1.90
bonus:
  twist: 2
---
