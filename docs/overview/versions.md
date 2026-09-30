---
id: versions
title: Versions and Compatibility
sidebar_position: 3
---

# Versions and Compatibility

| Component | Upstream reference | HEXMovr adaptation |
| --- | --- | --- |
| Robot concept | OpenArm 2.0 | OpenArm-compatible |
| Degrees of freedom | 7 | 7 |
| Joint actuator | Damiao in upstream | HEXMovr |
| Low-level bus | CAN / CAN-FD depending on configuration | HEXMovr CAN implementation |
| Robot description | URDF/Xacro | Adapted URDF/Xacro |
| ROS 2 | OpenArm ROS 2 ecosystem | HEXMovr ROS 2 package |
| Simulation | MuJoCo / Isaac Lab ecosystem | Adapted assets and actuator interface |

The upstream documentation currently labels its public documentation as version 2.0.

Do not mix motor configuration files from different hardware revisions without checking the motor protocol, mechanical interface and joint limits.
