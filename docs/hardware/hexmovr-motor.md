---
id: hexmovr-motor
title: HEXMovr Motor
sidebar_position: 2
---

# HEXMovr Motor

This page defines the motor-adaptation boundary. Replace the placeholders below with the exact production motor datasheet values before publishing a release.

| Parameter | HEXMovr value |
| --- | --- |
| Motor model | **TBD — production part number** |
| Supply voltage | **TBD** |
| Rated torque | **TBD** |
| Peak torque | **TBD** |
| Rated speed | **TBD** |
| Encoder | **TBD** |
| Encoder resolution | **TBD** |
| Control bus | CAN / CAN-FD |
| Control mode | **TBD** |
| Reduction ratio | **TBD** |
| Motor firmware | **TBD** |

## Why this is a separate page

The upstream OpenArm 2.0 documentation specifies different Damiao motor families for different joints.

A HEXMovr adaptation should not copy those motor specifications into the new documentation. Instead, publish the actual HEXMovr motor values and explain how they map to the OpenArm joint interface.

## Joint mapping

Use a table such as:

| Joint | HEXMovr motor | CAN TX ID | CAN RX ID | Position range |
| --- | --- | ---: | ---: | --- |
| joint_1 | TBD | TBD | TBD | TBD |
| joint_2 | TBD | TBD | TBD | TBD |
| joint_3 | TBD | TBD | TBD | TBD |
| joint_4 | TBD | TBD | TBD | TBD |
| joint_5 | TBD | TBD | TBD | TBD |
| joint_6 | TBD | TBD | TBD | TBD |
| joint_7 | TBD | TBD | TBD | TBD |
| gripper | TBD | TBD | TBD | TBD |

Do not publish guessed values in a production manual.
