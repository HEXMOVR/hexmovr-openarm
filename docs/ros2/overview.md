---
id: overview
title: ROS 2 Overview
sidebar_position: 1
---

# ROS 2

The ROS 2 layer should expose the robot as a standard hardware system while hiding the HEXMovr protocol details.

Recommended package split:

```text
hexmovr_ros2/
├── hardware/
├── controllers/
├── bringup/
├── description/
└── config/
```

The upstream OpenArm project maintains a dedicated ROS 2 repository as part of its ecosystem. citeturn0search0
