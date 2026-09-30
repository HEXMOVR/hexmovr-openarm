---
id: configuration
title: Configuration
sidebar_position: 4
---

# Configuration

Keep hardware-specific values in configuration files.

Example:

```yaml
hexmovr:
  can_interface: can0
  can_fd: false
  nominal_bitrate: 1000000

joints:
  joint_1:
    motor_id: 1
    direction: 1
    position_min: -3.14
    position_max: 3.14
```

The numbers above are examples only. Use the production motor and mechanical calibration data for release builds.
