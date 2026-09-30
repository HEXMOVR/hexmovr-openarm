---
id: ros2
title: ROS 2 Troubleshooting
sidebar_position: 3
---

# ROS 2 Troubleshooting

Useful commands:

```bash
ros2 control list_hardware_interfaces
ros2 control list_controllers
ros2 topic list
ros2 topic echo /joint_states
```

If the controller loads but joints do not move, check the hardware interface state and the motor-layer diagnostic output before changing controller gains.
