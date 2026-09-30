---
id: architecture
title: Software Architecture
sidebar_position: 1
---

# Software Architecture

The software stack is intentionally layered:

```text
Application
   │
ROS 2 / MoveIt / Teleoperation
   │
Controller manager
   │
HEXMovr ROS 2 hardware interface
   │
HEXMovr CAN API
   │
SocketCAN / CAN-FD
   │
HEXMovr Motor
```

The upstream ecosystem uses a similar separation between robot description, CAN control and ROS 2 integration.
