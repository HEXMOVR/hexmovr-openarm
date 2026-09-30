---
id: mujoco
title: MuJoCo
sidebar_position: 3
---

# MuJoCo

The MuJoCo model should keep the same joint naming convention as the physical robot.

Document:

- actuator type;
- torque limits;
- damping;
- friction;
- armature;
- contact parameters;
- solver settings;
- motor strength mapping.

Do not directly copy physical motor torque limits into simulation without accounting for the reduction, controller and safety limits.
