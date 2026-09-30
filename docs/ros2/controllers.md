---
id: controllers
title: Controllers
sidebar_position: 3
---

# Controllers

A typical deployment can use:

- joint state broadcaster;
- joint trajectory controller;
- position controller;
- effort/torque controller where supported;
- gripper controller.

Keep motor-specific gains and limits in the hardware configuration rather than controller source code.
