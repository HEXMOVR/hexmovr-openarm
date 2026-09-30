---
id: installation
title: ROS 2 Installation
sidebar_position: 2
---

# ROS 2 Installation

After installing ROS 2 and the HEXMovr workspace:

```bash
cd ~/hexmovr_ws
rosdep install --from-paths src --ignore-src -r -y
colcon build --symlink-install
source install/setup.bash
```

Verify:

```bash
ros2 pkg list | grep -i hexmovr
```
