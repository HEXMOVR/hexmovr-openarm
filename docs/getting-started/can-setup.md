---
id: can-setup
title: CAN Setup
sidebar_position: 4
---

# CAN Setup

The upstream OpenArm CAN tooling documents SocketCAN configuration and both Classic CAN and CAN-FD operation.

For a HEXMovr configuration, the exact nominal/data bitrate and frame format must come from the motor firmware specification.

Typical Linux commands:

```bash
sudo ip link set can0 down
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

Check:

```bash
candump can0
```

## Termination

Use the correct physical bus termination for the actual wiring topology. Do not add a termination resistor to every node.
