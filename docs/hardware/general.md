---
id: general
title: General
sidebar_position: 1
---

# Hardware

The mechanical target is an OpenArm-compatible 7-DOF arm with a HEXMovr actuator stack.

## What changes

The adaptation primarily concerns:

- joint motors;
- motor mounting interfaces where required;
- motor wiring;
- CAN identifiers and protocol;
- motor configuration;
- joint limits and actuator parameters.

## What should remain explicit

Document the boundary between upstream-derived geometry and HEXMovr-specific modifications.

For manufacturing, keep the following under revision control:

- CAD revision;
- modified parts list;
- motor part numbers;
- wiring revision;
- PCB/controller revision;
- firmware revision;
- URDF revision.

The upstream hardware repository states that its CAD source includes STEP assemblies, BOMs and manufacturing information and is separately licensed under CERN-OHL-S-2.0.
