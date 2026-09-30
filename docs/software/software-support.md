---
id: software-support
title: 软件与仓库支持
sidebar_position: 5
---

# 软件与仓库支持

以下仓库来自当前整理的 OpenArm 软件支持材料。HEXMovr 自己维护的适配仓库与上游 OpenArm 仓库应在文档中明确区分。

| Repository | 说明 | License |
| --- | --- | --- |
| `openarm_description` | URDF / xacro 机器人描述与仿真资源 | Apache-2.0 |
| `openarm_can` | 底层 CAN 控制库 | Apache-2.0 |
| `openarm_ros2` | ROS 2 集成包和节点 | Apache-2.0 |
| `openarm_teleop` | 单向和双向遥操作包 | Apache-2.0 |
| `openarm_isaac_lab` | Isaac Lab 仿真环境与训练任务 | Apache-2.0 |
| `openarm_mujoco` | MuJoCo 模型与资源 | Apache-2.0 |
| `openarm_dataset` | 数据格式、录制工具和 Python API | Apache-2.0 |
| `dora-openarm` | Dora 数据流节点，用于采集、推理和遥操作 | Apache-2.0 |

## HEXMOVR 适配仓库

当前整理材料中使用的 HEXMOVR 仓库包括：

- `https://github.com/HEXMOVR/openarm_description`
- `https://github.com/HEXMOVR/openarm_can`
- `https://github.com/HEXMOVR/openarm_ros2`

上游项目中的其他仓库仍指向 `enactic` 组织。实际发布时，应根据 HEXMOVR 是否维护对应 fork / 改版仓库进行逐项确认。
