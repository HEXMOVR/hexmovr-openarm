---
id: installation
title: Installation
sidebar_position: 2
---

# Installation

## 1. Clone the repositories

```bash
mkdir -p ~/hexmovr_ws/src
cd ~/hexmovr_ws/src

git clone https://github.com/HEXMovr/hexmovr-openarm.git
```

If the software is split into multiple repositories, clone the required packages into the same workspace.

## 2. Install dependencies

For a ROS 2 workspace:

```bash
cd ~/hexmovr_ws
rosdep install --from-paths src --ignore-src -r -y
```

Then build:

```bash
colcon build --symlink-install
source install/setup.bash
```

## 3. Configure CAN

Example SocketCAN setup:

```bash
sudo ip link set can0 down
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
ip -details link show can0
```

Only use CAN-FD parameters when the selected HEXMovr motor firmware and adapter both support them.
