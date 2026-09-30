---
id: v2-right-arm-zero
title: V2 右臂零点标定
sidebar_position: 3
---

# OpenArm V2.0 右臂零点标定参考

本页整理当前现场验证的 **OpenArm v2.0 右臂 HEXMOVR profile** 零点标定流程。

## 适用启动方式

```bash
ros2 launch openarm_bringup openarm.launch.py profile:=openarm_v20_right_hexmovr
ros2 launch openarm_bringup openarm_moveit.launch.py profile:=openarm_v20_right_hexmovr
```

当前资料说明：在该 profile 下，右臂 1–7 关节和 v2 抓夹控制方向正常，ROS 侧不再使用 `sign/offset` 做补偿。

> **注意：** 以下数值来自当前标定参考材料，应视为该 profile 的标定数据。更换机械结构、电机、减速机构、编码器或装配状态后，应重新验证。

## Count 换算

```text
1 圈 = 2π rad = 16384 count
count = rad / (2π) × 16384
```

## 推荐：从下限位标到程序 0 点

计算：

```text
delta_rad = 0 - lower_limit
```

| 关节 | 使用限位点 | 限位 rad | 到程序 0 点 rad | 到程序 0 点 | 电机相对移动 count |
| --- | --- | ---: | ---: | ---: | ---: |
| `openarm_right_joint1` | 下限位 | -1.3963 | +1.3963 | +80.00° | +3641 |
| `openarm_right_joint2` | 下限位 | -0.17453 | +0.17453 | +10.00° | +455 |
| `openarm_right_joint3` | 下限位 | -1.5708 | +1.5708 | +90.00° | +4096 |
| `openarm_right_joint4` | 下限位 | 0 | 0 | 0.00° | 0 |
| `openarm_right_joint5` | 下限位 | -1.5708 | +1.5708 | +90.00° | +4096 |
| `openarm_right_joint6` | 下限位 | -0.7854 | +0.7854 | +45.00° | +2048 |
| `openarm_right_joint7` | 下限位 | -1.5708 | +1.5708 | +90.00° | +4096 |
| `openarm_right_finger_joint1` | 下限位 / open | -0.7854 | +0.7854 | +45.00° | +2048 |

操作含义：关节顶到表中的下限位后，在电机上位机中按最后一列移动到程序 0 点位置，然后在该位置重新写电机 0。

## 备用：从上限位标到程序 0 点

```text
delta_rad = 0 - upper_limit
```

| 关节 | 使用限位点 | 限位 rad | 到程序 0 点 rad | 到程序 0 点 | 电机相对移动 count |
| --- | --- | ---: | ---: | ---: | ---: |
| `openarm_right_joint1` | 上限位 | +3.4907 | -3.4907 | -200.00° | -9102 |
| `openarm_right_joint2` | 上限位 | +3.3161 | -3.3161 | -190.00° | -8647 |
| `openarm_right_joint3` | 上限位 | +1.5708 | -1.5708 | -90.00° | -4096 |
| `openarm_right_joint4` | 上限位 | +2.4435 | -2.4435 | -140.00° | -6372 |
| `openarm_right_joint5` | 上限位 | +1.5708 | -1.5708 | -90.00° | -4096 |
| `openarm_right_joint6` | 上限位 | +0.7854 | -0.7854 | -45.00° | -2048 |
| `openarm_right_joint7` | 上限位 | +1.5708 | -1.5708 | -90.00° | -4096 |
| `openarm_right_finger_joint1` | 上限位 / closed | 0 | 0 | 0.00° | 0 |

## V2 抓夹

当前资料中的 v2 抓夹为转动关节：

```text
openarm_right_finger_joint1:
  open   = -0.7854 rad
  closed = 0 rad
```

如果在完全打开位置进行标定，移动 `+2048 count` 到 closed / 程序 0 点后，再写电机 0。
