---
id: electrical
title: Electrical System
sidebar_position: 3
---

# Electrical System

The electrical documentation should make the complete path from power input to actuator bus explicit.

```text
Power supply
    │
    ├── Controller / computer
    │
    └── Motor power distribution
             │
             └── HEXMovr motors
                      │
                      └── CAN bus
```

## Document for each revision

- power input range;
- fuse/protection;
- emergency stop;
- motor supply distribution;
- CAN transceiver;
- connector pinout;
- cable gauge;
- CAN termination;
- grounding strategy.

Never assume the upstream electrical design is electrically interchangeable with the HEXMovr implementation.
