---
id: launch
title: Launch
sidebar_position: 4
---

# Launch

Example conceptual launch:

```bash
ros2 launch hexmovr_bringup openarm.launch.py \
  can_interface:=can0 \
  use_fake_hardware:=false
```

The exact launch arguments should be generated from the production package and documented here after the interface is stable.
