---
id: project
title: Project Overview
sidebar_position: 1
---

# HEXMovr OpenArm

HEXMovr OpenArm is an OpenArm-compatible 7-DOF humanoid arm adaptation that replaces the original joint actuator implementation with a HEXMovr motor and control stack.

The project keeps the OpenArm ecosystem concepts that are useful for research and deployment — robot description, CAN control, ROS 2, teleoperation and simulation — while introducing a dedicated HEXMovr hardware layer.

## Scope

This project separates three layers:

1. **OpenArm-compatible robot layer** — kinematics, joint naming, robot description and application interfaces.
2. **HEXMovr adaptation layer** — motor selection, CAN identifiers, limits, command mapping and hardware-specific configuration.
3. **Application layer** — ROS 2, simulation, teleoperation, calibration and user applications.

## Important distinction

This is an independent adaptation project. It is not an official OpenArm release and should not be represented as an Enactic product.

The upstream OpenArm project is maintained by Enactic, Inc. Its current documentation describes OpenArm 2.0 as a 7-DOF arm and organizes the ecosystem around the arm, evaluation cell and KER leader. citeturn0view0

## Recommended repository split

A production deployment can use the following repository layout:

```text
hexmovr-openarm/
├── openarm_description/      # adapted URDF / meshes / xacro
├── hexmovr_can/              # HEXMovr CAN library / protocol adapter
├── hexmovr_ros2/             # ROS 2 hardware and controllers
├── hexmovr_teleop/           # teleoperation
├── hexmovr_mujoco/            # MuJoCo assets
├── hexmovr_isaac_lab/         # Isaac Lab integration
└── website/                  # this documentation site
```
