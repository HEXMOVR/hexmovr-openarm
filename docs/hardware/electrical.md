---
id: electrical
title: 电气系统与 CAN 接口
sidebar_position: 4
---

# 电气系统与 CAN 接口

当前资料可以确定电机侧接口、CAN 通信和部分供电范围，但**还不能据此确定 HEXMOVR OpenArm 整机的最终电源规格、保险保护和急停方案**。

## 电气链路

```text
Power supply
    │
    ├── Controller / computer
    │
    └── Motor power distribution
             │
             └── HEXMOVR motors
                      │
                      └── CAN bus
```

## CAN

HEXMOVR CAN 协议资料规定：

- Classic CAN；
- 标准帧；
- 默认 1 Mbps；
- 可配置 500 / 250 / 125 / 100 kbps；
- 标准地址范围 1–254；
- 广播地址 `0x00`；
- 公共地址 `0xFF`。

## 电机接口

详细针脚和连接器请见：[电机接口与接线](./motor-connectors)。

接口类型 1 的资料包含 CAN、RS485 和 XT30 电源；接口类型 2 包含 CAN、电源和 TTL 串口。

## 整机级参数

以下参数目前不能从现有材料直接确定：

| 参数 | 状态 |
| --- | --- |
| OpenArm 整机电源输入 | **待确认** |
| 保险/过流保护 | **待确认** |
| 整机急停 | **待确认** |
| CAN 终端拓扑 | **按最终线束/硬件确认** |
| 接地方案 | **待确认** |
| 电源线规格 | **待确认** |

> 不要把电机驱动板的 12–40 V / 15–60 V 接口范围直接当成 OpenArm 整机供电范围。
