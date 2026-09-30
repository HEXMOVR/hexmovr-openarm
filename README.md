# HEXMovr OpenArm

**HEXMovr OpenArm** is an independent OpenArm-compatible 7-DOF humanoid arm adaptation using HEXMovr actuators and a HEXMovr-specific CAN/control layer.

> This repository is not an official OpenArm distribution and is not endorsed by Enactic, Inc.

## Project

The project follows the public OpenArm software ecosystem while separating HEXMovr-specific implementation from the upstream robot architecture.

### Main components

| Component | Purpose |
| --- | --- |
| `openarm_description` | Adapted URDF/Xacro and robot description |
| `hexmovr_can` | HEXMovr CAN library / low-level motor API |
| `hexmovr_ros2` | ROS 2 hardware integration |
| `hexmovr_teleop` | Teleoperation |
| `hexmovr_mujoco` | MuJoCo assets |
| `hexmovr_isaac_lab` | Isaac Lab integration |
| `website` | Documentation |

## Documentation

The documentation site is built with Docusaurus.

```bash
cd website
npm install
npm run start
```

Open the local URL printed by Docusaurus.

## Hardware adaptation

The motor adaptation changes the actuator-specific layer rather than the entire robot software architecture:

```text
OpenArm-compatible robot model
            │
            ▼
    HEXMovr adaptation
            │
            ▼
       CAN / CAN-FD
            │
            ▼
       HEXMovr motor
```

Motor model, protocol, CAN IDs, limits and calibration values must be taken from the production HEXMovr hardware specification. The template intentionally does not invent those values.

## Upstream

- OpenArm documentation: https://docs.openarm.dev/
- OpenArm repository: https://github.com/enactic/openarm
- OpenArm CAN: https://github.com/enactic/openarm_can
- OpenArm hardware: https://github.com/enactic/openarm_hardware

The upstream OpenArm repository currently organizes the ecosystem into hardware, description, CAN, ROS 2, teleoperation, Isaac Lab, MuJoCo and data-related repositories. citeturn0search0

## Licensing

Review the `docs/legal/licenses.md` page before publishing.

In particular, upstream software and upstream hardware/CAD have different licensing terms. The OpenArm main repository lists its software repositories as Apache-2.0, while the OpenArm hardware repository identifies its CAD/manufacturing data as CERN-OHL-S-2.0. citeturn0search0turn0search8

## Status

This repository is a documentation/source template for the HEXMovr motor-adapted platform. Replace all `TBD` fields with verified production specifications before release.
