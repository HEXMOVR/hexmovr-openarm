---
id: joint-calibration
title: Joint Calibration
sidebar_position: 2
---

# Joint Calibration

OpenArm 右臂 v2.0 的当前 HEXMOVR 标零数据已经单独整理为：[V2 右臂零点标定](./v2-right-arm-zero)。

标定前请先阅读 [安全注意事项](../safety/safety-notes)。

## 基本原则

标定应建立：

- 电机原点；
- 关节程序 0 点；
- 关节正负方向；
- 软件最小/最大位置；
- 速度限制；
- 力矩/电流限制。

## V2 右臂

当前材料已经现场确认右臂 1–7 关节以及 v2 抓夹的控制方向，并提供了从上下限位移动到程序 0 点的 Count 数据。

请直接按照 [V2 右臂零点标定](./v2-right-arm-zero) 中对应 profile 的表格执行，不要自行修改 `sign/offset` 补偿逻辑。
