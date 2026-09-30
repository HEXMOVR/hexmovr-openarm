---
id: teleoperation
title: Teleoperation
sidebar_position: 4
---

# Teleoperation

The teleoperation layer should send joint targets through the same ROS 2 hardware abstraction used by autonomous control.

Recommended signal path:

```text
Leader / input device
        ↓
Joint mapping
        ↓
Safety filter
        ↓
ROS 2 controller
        ↓
HEXMovr hardware interface
```

Do not bypass the safety filter for production operation.
