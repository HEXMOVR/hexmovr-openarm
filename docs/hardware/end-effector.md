---
id: end-effector
title: End Effector
sidebar_position: 5
---

# End Effector

The end-effector interface should remain independent of the motor vendor.

Document:

- mechanical mounting;
- tool-center-point definition;
- gripper actuator;
- electrical connector;
- camera interface, if present;
- ROS 2 action/topic interface.

The upstream OpenArm 2.0 documentation describes a compact parallel gripper with an in-hand camera. citeturn0view0

For a HEXMovr product, only claim those features if they are actually present in the released hardware.
