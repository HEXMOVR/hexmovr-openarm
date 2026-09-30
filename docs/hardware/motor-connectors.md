---
id: motor-connectors
title: 电机接口与接线
sidebar_position: 3
---

import DownloadLink from '@site/src/components/DownloadLink';

# 电机接口与接线

本页整理当前提供的 HEXMOVR 电机座子接线资料。具体电机版本应以对应驱动板丝印和产品资料为准。

## 接口类型 1

适用座子型号资料：`GDZ468(3GIMC)` / `GDZ4-40(3UC1C)` / `GDZ810(3GIMD)` / `3NTD4` / `3NTD6`。

| 序号 | 接口 | 功能 | 说明 |
| ---: | --- | --- | --- |
| ① | PHD2.0-2x2AW | CAN | CAN-L |
| ② | PHD2.0-2x2AW | CAN | CAN-H |
| ③ | PHD2.0-2x2AW | RS485 | RS485-B |
| ④ | PHD2.0-2x2AW | RS485 | RS485-A |
| ⑤ | XT30PW-M | 电源 | GND |
| ⑥ | XT30PW-M | 电源 | VCC |

对应 PHD2.0-2*2 连接线、XT30U-F 插头。

### 供电范围

资料说明：

- **黄色 XT30**：12–40 V；
- **黑色 XT30**：15–60 V。

> 这是驱动板接口资料给出的范围，不代表 OpenArm 整机最终电源规格。

## 接口类型 2

适用资料：`3UDIA`。

| 序号 | 接口 | 功能 |
| ---: | --- | --- |
| ① | XT30(2+2)PB-M.G.B | CAN-L |
| ② | XT30(2+2)PB-M.G.B | CAN-H |
| ③ | XT30(2+2)PB-M.G.B | 电源 GND |
| ④ | XT30(2+2)PB-M.G.B | 电源 VCC |
| ⑤ | X9827WRS-03-9TSN / molex51146-3P | 控制器 GND |
| ⑥ | MX1.25 超薄插头线 | TTL RX，连接控制器 TX |
| ⑦ | MX1.25 超薄插头线 | TTL TX，连接控制器 RX |

## 接线安全注意事项

1. 通信线不要随意处理，不要裸露线芯，避免短路。
2. 使用 RS485 和 CAN 中的一种通信方式时，另一通信信号线应做好绝缘，避免相互触碰或接触其他导电物体。
3. 电源不要虚接。资料明确指出，电源虚接可能导致电流回流路径异常并损坏通信接口。
4. XT30 接口应保持可靠接触。

### XT30 单探针接触异常

若 XT30 单探针十字缝隙过小或变形，可能造成接触压力不足和电源虚接。资料建议使用镊子适度撑开探针十字缝隙，恢复正常弹性间隙；操作时避免过度变形或损伤探针。

## 原始资料

- <DownloadLink href="/downloads/HEXMovr_Motor_Connector_Wiring_260611.pdf">下载：HEXMovr 电机座子接线说明</DownloadLink>
