---
id: motor-protocol
title: Motor Protocol
sidebar_position: 2
---

# Motor Protocol

Document the production frame format here.

## Frame definition

| Field | Length | Description |
| --- | ---: | --- |
| CAN ID | 11/29 bit | Command or feedback identifier |
| DLC | 0–8 / CAN-FD | Payload length |
| Byte 0..n | TBD | Command-specific payload |

## Required command documentation

At minimum document:

- enable;
- disable;
- mode selection;
- position;
- velocity;
- torque/current;
- status;
- fault;
- configuration;
- save/reboot.

Do not infer a proprietary motor frame format from another motor vendor's protocol. The production protocol must be taken from the HEXMovr firmware specification.
