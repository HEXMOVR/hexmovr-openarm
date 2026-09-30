---
id: can
title: CAN Troubleshooting
sidebar_position: 1
---

# CAN Troubleshooting

## No frames

Check:

```bash
ip -details link show can0
candump can0
```

Then verify:

- CANH/CANL polarity;
- common ground where required;
- bitrate;
- termination;
- interface mode;
- power.

## Bus-off

Check the physical wiring and bitrate first. Do not repeatedly restart a bus-off interface without identifying the cause.

## Frame seen but no response

Check:

- motor ID;
- command ID;
- protocol revision;
- motor state;
- enable sequence;
- firmware compatibility.
