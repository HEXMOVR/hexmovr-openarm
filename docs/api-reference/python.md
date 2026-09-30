---
id: python
title: Python
sidebar_position: 3
---

# Python

Python is useful for commissioning, diagnostics and automated testing.

Example conceptual interface:

```python
from hexmovr_can import HexMovrBus, Motor

bus = HexMovrBus("can0", bitrate=1_000_000)
motor = Motor(bus, motor_id=1)

motor.enable()
motor.set_position(0.05)
print(motor.state())
motor.disable()
```

This is an API design example, not a claim that the exact class names are already implemented.
