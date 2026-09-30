---
id: architecture
title: System Architecture
sidebar_position: 2
---

# System Architecture

```text
                         Application
                              │
                    ROS 2 / Teleoperation
                              │
                    Controller / Hardware
                              │
                    HEXMovr Motor Adapter
                              │
                     CAN / CAN-FD Interface
                              │
                      HEXMovr Actuators
```

## Design principle

The motor adapter should be isolated from the robot description. A change in motor vendor should not require changing joint names, kinematic frames or high-level application APIs.

### Robot model

The robot model defines:

- link and joint hierarchy;
- joint limits;
- inertial parameters;
- visual and collision geometry;
- transmission/control interfaces.

### Motor layer

The motor layer defines:

- motor type;
- CAN IDs;
- command encoding;
- feedback decoding;
- position/velocity/torque scaling;
- enable/disable behavior;
- fault handling.

### ROS 2 layer

The ROS 2 layer translates the motor interface into standard hardware and controller interfaces. Keep hardware-specific parameters in YAML rather than hard-coding them into controllers.
