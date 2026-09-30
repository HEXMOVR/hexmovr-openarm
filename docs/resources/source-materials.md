---
id: source-materials
title: 原始资料与下载
sidebar_position: 1
---

import DownloadLink from '@site/src/components/DownloadLink';

# 原始资料与下载

本页集中列出目前已经整理并用于本网站的原始资料。网页中的参数、接线、CAN 命令和标定数据应优先以对应原始资料和最终产品版本为准。

## 电机资料

- <DownloadLink href="/downloads/HEXMovr_CAN_Protocol_3.10b2.pdf">HEXMovr 电机 CAN 通信协议 Rev.3.10b2</DownloadLink>
- <DownloadLink href="/downloads/HEXMovr_Motor_Connector_Wiring_260611.pdf">HEXMovr 电机座子接线说明</DownloadLink>
- <DownloadLink href="/downloads/ZE300_GUI_User_Guide_V3.03a.pdf">ZE300 GUI 上位机说明 V3.03a</DownloadLink>

## 当前网页已整理内容

- [安全注意事项](../safety/safety-notes)
- [快速 Demo](../getting-started/demo-run)
- [电机接口与接线](../hardware/motor-connectors)
- [线材长度与插接方向](../hardware/cable-routing)
- [HEXMovr CAN Protocol](../api-reference/motor-protocol)
- [ZE300 GUI 上位机](../software/ze300-gui)
- [V2 右臂零点标定](../tutorial/v2-right-arm-zero)

## 尚需补充的产品级资料

以下内容目前材料中没有足够信息，不在网页中自行推断：

- OpenArm 整机最终电源规格；
- 整机最大负载；
- 各关节最终机械限位与最高速度；
- 整机急停硬件方案；
- 各关节实际电机型号、减速比和生产批次；
- 最终量产版关节 CAN ID 映射；
- 完整装配图、BOM 与结构件版本号。
