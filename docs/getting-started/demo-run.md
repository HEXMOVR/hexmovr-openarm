---
id: demo-run
title: 快速 Demo
sidebar_position: 2
---

# 快速 Demo：CAN 通信与电机状态验证

本页面用于运行第一个 OpenArm + HEXMOVR Demo，快速验证 **CAN 通信、电机状态反馈以及 OpenArm SDK 与 HEXMOVR 电机之间的控制链路**。

> **协议基础**：HEXMOVR 电机当前资料采用 **Classic CAN，默认通信速率 1 Mbps**。本 Demo 不使用 CAN-FD。

## 1. 开始前

确认：

- OpenArm CAN SDK 已完成编译环境配置；
- HEXMOVR 电机已经正确连接并上电；
- USB-CAN / CAN 接口已经连接到电脑；
- CAN 总线接线正确；
- 已知 HEXMOVR 电机 Device Address；
- Linux 系统支持 SocketCAN。

## 2. 配置 CAN

```bash
sudo ip link set can0 down
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

检查：

```bash
ip -details link show can0
```

确认 `can0` 已启动，并显示：

```text
bitrate 1000000
```

如果接口名称不是 `can0`，替换为实际名称。

## 3. 编译 Demo

进入 SDK 根目录：

```bash
cd openarm_can
```

配置：

```bash
cmake -S . -B build \
  -DBUILD_TESTING=OFF \
  -DOPENARM_CAN_BUILD_CLI=OFF
```

编译：

```bash
cmake --build build --target hexmovr-openarm-demo
```

生成：

```text
build/hexmovr-openarm-demo
```

## 4. 运行 Demo

例如：

```text
CAN Interface   : can0
Motor Address   : 0x01
```

运行：

```bash
./build/hexmovr-openarm-demo can0 0x01
```

其中 `can0` 是 SocketCAN 接口名称，`0x01` 是 HEXMOVR 电机 Device Address。

## 5. Demo 流程

```text
Start Demo
    ↓
Initialize CAN Interface
    ↓
Initialize OpenArm API
    ↓
Register HEXMOVR Motor
    ↓
Read Motor Status
    ↓
Read Fast Motor State
    ↓
Display Motor Feedback
    ↓
Release Motor
    ↓
Demo Complete
```

目标是验证：

```text
PC
 │
 ▼
SocketCAN
 │
 ▼
OpenArm SDK
 │
 ▼
HEXMOVR Adapter
 │
 ▼
HEXMOVR Motor
```

## 6. 正常结果

正常情况下，Demo 应能够读取并显示电机状态，例如：

```text
motor tx=0x101 rx=0x1
  valid: yes
  bus voltage: ...
  bus current: ...
  q current: ...
  temperature: ...
  run mode: ...
  fault code: ...
  position: ...
  velocity: ...
```

`valid: yes` 表示 SDK 已获得有效的电机反馈。

## 7. 排查顺序

### CAN 接口

```bash
ip link show can0
```

### CAN Bitrate

```bash
ip -details link show can0
```

确认 `bitrate 1000000`。

### 电机地址

确认命令中的 `0x01` 与实际 Device Address 一致。HEXMOVR CAN 协议资料说明出厂默认地址为 `0x01`，可配置为 `1–254`；`0x00` 为广播地址，`0xFF` 为公共地址。

### 供电与接线

检查：

- 电机供电；
- CAN-H / CAN-L；
- 总线终端；
- USB-CAN 接口。

## 8. 下一步

- [HEXMovr CAN Protocol](../api-reference/motor-protocol)
- [ZE300 GUI 上位机](../software/ze300-gui)
- [V2 右臂零点标定](../tutorial/v2-right-arm-zero)
