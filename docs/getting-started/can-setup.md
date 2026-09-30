---
id: can-setup
title: CAN Setup
sidebar_position: 4
---

# CAN Setup

HEXMovr 当前 CAN 协议资料采用 Classic CAN、标准帧，默认速率 **1 Mbps**。

## Linux / SocketCAN

```bash
sudo ip link set can0 down
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

检查：

```bash
ip -details link show can0
```

监视总线：

```bash
candump can0
```

## 地址规则

- 默认 Device Address：`0x01`；
- `0x00`：广播；
- `0xFF`：公共地址；
- 可配置地址：`1–254`。

## CAN ID 规则

普通命令可使用：

```text
Dev_addr
0x100 | Dev_addr
0x00
0xFF
```

从机应答 ID 为实际 `Dev_addr`。

## 总线终端

根据最终 CAN 总线拓扑设置终端电阻，不要给每个节点都增加终端。USB-CAN、集线板和末端节点的具体终端配置应在整机线束图中明确。

## 进一步阅读

- [快速 Demo](./demo-run)
- [HEXMOVR CAN 通信协议](../api-reference/motor-protocol)
- [电机接口与接线](../hardware/motor-connectors)
