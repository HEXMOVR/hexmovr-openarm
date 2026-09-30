---
id: requirements
title: Requirements
sidebar_position: 1
---

# Requirements

## Hardware

- HEXMovr OpenArm-compatible arm
- CAN or CAN-FD interface appropriate for the motor configuration
- Correct bus termination
- Stable motor power supply
- Emergency stop / safe power disconnect
- PC running Linux for the reference software stack

## Software

Recommended baseline:

- Ubuntu 22.04 or a compatible Linux distribution
- Python 3.10+
- ROS 2 distribution matching the selected ROS 2 package
- CMake 3.22+
- Git
- SocketCAN

> Always verify the exact software versions in the release branch before deployment.

## Safety

The first motor test should be performed with the arm mechanically unloaded and with conservative position, velocity and torque limits.
