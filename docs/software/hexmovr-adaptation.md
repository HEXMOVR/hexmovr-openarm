---
id: hexmovr-adaptation
title: HEXMovr Adaptation Layer
sidebar_position: 3
---

# HEXMovr Adaptation Layer

The adaptation layer translates the common OpenArm joint interface into the HEXMovr motor protocol.

## Responsibilities

- motor initialization;
- CAN ID configuration;
- command packet encoding;
- feedback decoding;
- physical-to-motor unit conversion;
- limits;
- fault state;
- enable/disable;
- zero/calibration handling.

## What it should not do

Avoid placing kinematics or application logic in the motor adapter.

A useful API boundary is:

```cpp
set_position(joint, position);
set_velocity(joint, velocity);
set_torque(joint, torque);

read_position(joint);
read_velocity(joint);
read_torque(joint);
read_state(joint);
```

The actual transport can then be replaced without changing the high-level controller.
