---
id: cpp
title: C++
sidebar_position: 4
---

# C++

A C++ interface is recommended for the real-time motor layer.

Example conceptual interface:

```cpp
HexMovrBus bus("can0");
HexMovrMotor motor(bus, 1);

motor.enable();
motor.setPosition(0.05);
auto state = motor.readState();
motor.disable();
```

The actual production API should be documented from the released header files.
