---
id: first-motion
title: First Motion
sidebar_position: 3
---

# First Motion

首次运动建议不要直接执行整机轨迹，而是先完成 CAN 链路和单电机状态验证。

## 推荐顺序

1. 阅读 [安全注意事项](../safety/safety-notes)。
2. 按 [CAN Setup](./can-setup) 配置 SocketCAN。
3. 运行 [快速 Demo](./demo-run)。
4. 确认电机状态、位置、速度和故障反馈正常。
5. 只使能一个关节，并使用较小运动范围和较低速度。
6. 确认单关节方向和零点后，再进行多关节控制。

## 第一笔运动

建议优先使用相对位置的小步进方式验证方向，而不是直接发送大角度目标。

HEXMovr CAN 协议的相对位置命令为 `0xC3`，单位为 Count，1 圈为 16384 Count。

例如：

```text
90° = 4096 Count
```

实际测试值应根据最终关节限位和安全范围进一步缩小。
