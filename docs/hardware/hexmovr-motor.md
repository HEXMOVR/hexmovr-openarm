---
id: hexmovr-motor
title: HEXMOVR 电机
sidebar_position: 2
---

# HEXMOVR 电机

本页只记录当前已获得资料能够确认的电机通信与接口信息。具体 OpenArm 量产电机型号、减速比、额定/峰值力矩等应以最终产品规格书填写。

## 已确认的协议与接口信息

| 参数 | 当前资料 |
| --- | --- |
| 控制总线 | Classic CAN |
| CAN 默认速率 | 1 Mbps |
| CAN 标准帧 | 是 |
| 默认 Device Address | `0x01` |
| 可配置地址 | `1–254` |
| 位置分辨率换算 | 16384 Count / rev |
| MIT 位置单位 | rad |
| MIT 速度单位 | rad/s |
| MIT 力矩单位 | N·m |

## 量产规格待确认

| 参数 | 状态 |
| --- | --- |
| 电机型号 | **待确认** |
| OpenArm 各关节电机映射 | **待确认** |
| 额定力矩 | **待确认** |
| 峰值力矩 | **待确认** |
| 额定速度 | **待确认** |
| 减速比 | **待确认** |
| 编码器型号 | **待确认** |
| 电机供电配置 | **按具体驱动板确认** |

## 相关页面

- [电机接口与接线](./motor-connectors)
- [电气系统与 CAN](./electrical)
- [HEXMovr CAN 通信协议](../api-reference/motor-protocol)
- [ZE300 GUI 上位机](../software/ze300-gui)
