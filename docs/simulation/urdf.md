---
id: urdf
title: URDF / Xacro
sidebar_position: 2
---

# URDF / Xacro

The URDF should contain:

- `base_link`;
- all seven actuated joints;
- gripper links;
- visual and collision meshes;
- inertial properties;
- joint limits;
- transmissions or ros2_control tags as required.

Motor vendor changes normally affect control/transmission configuration and inertial values, not the conceptual kinematic chain.
