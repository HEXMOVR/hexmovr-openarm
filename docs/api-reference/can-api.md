---
id: can-api
title: CAN API
sidebar_position: 1
---

# HEXMovr CAN API

The CAN API is the low-level software interface between the host and the motor bus.

## Suggested modules

```text
hexmovr_can
├── bus
├── protocol
├── motor
├── diagnostics
├── safety
└── utils
```

## API layers

### Bus

Open/close the interface, transmit and receive CAN frames.

### Protocol

Encode commands and decode feedback.

### Motor

Expose typed operations such as enable, disable, position, velocity and torque.

### Diagnostics

Provide discovery, status monitoring and fault reporting.

### Safety

Apply software limits, watchdogs and communication-loss behavior.

## SDK vs CAN API

A **CAN API** is the interface exposed for CAN communication.

An **SDK** normally means the broader developer package that may include the CAN API plus configuration tools, examples, utilities, ROS 2 integration or higher-level control APIs.

Therefore, `hexmovr_can` can be the low-level CAN library without necessarily being the entire HEXMovr SDK.
