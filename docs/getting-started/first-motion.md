---
id: first-motion
title: First Motion
sidebar_position: 3
---

# First Motion

Perform the first motion in four stages.

### Stage 1 — Bus

Confirm the CAN interface is up:

```bash
ip -details link show can0
```

### Stage 2 — Discovery / status

Use the project's diagnostic utility to confirm the expected motor IDs respond.

### Stage 3 — Enable

Enable one joint at a time. Keep the robot physically restrained and use low gains.

### Stage 4 — Position step

Send a small position target and verify:

- commanded position;
- measured position;
- velocity;
- torque/current;
- fault state.

Do not start with a full-arm trajectory.
