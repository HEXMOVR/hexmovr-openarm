---
id: overview
title: Simulation Overview
sidebar_position: 1
---

# Simulation

The simulation stack should reuse the same joint names and limits as the physical robot wherever possible.

Recommended layers:

- URDF/Xacro for robot description;
- MuJoCo for dynamics and control experiments;
- Isaac Lab for reinforcement learning and large-scale simulation.

The upstream OpenArm ecosystem publishes separate MuJoCo and Isaac Lab repositories.
