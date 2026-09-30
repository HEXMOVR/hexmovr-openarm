/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    {type: 'category', label: 'Overview', items: ['overview/project', 'overview/architecture', 'overview/versions', 'overview/upstream']},
    {type: 'category', label: '快速开始', items: ['getting-started/requirements', 'getting-started/installation', 'getting-started/demo-run', 'getting-started/first-motion', 'getting-started/can-setup']},
    {type: 'category', label: '安全与操作', items: ['safety/safety-notes']},
    {type: 'category', label: 'Hardware / 硬件', items: ['hardware/general', 'hardware/hexmovr-motor', 'hardware/motor-connectors', 'hardware/electrical', 'hardware/cable-routing', 'hardware/mechanical', 'hardware/end-effector']},
    {type: 'category', label: 'CAN API / 电机协议', items: ['api-reference/can-api', 'api-reference/motor-protocol', 'api-reference/python', 'api-reference/cpp']},
    {type: 'category', label: 'Software / 软件', items: ['software/architecture', 'software/repository-layout', 'software/hexmovr-adaptation', 'software/configuration', 'software/ze300-gui', 'software/software-support']},
    {type: 'category', label: 'ROS 2', items: ['ros2/overview', 'ros2/installation', 'ros2/controllers', 'ros2/launch']},
    {type: 'category', label: 'Simulation', items: ['simulation/overview', 'simulation/urdf', 'simulation/mujoco', 'simulation/isaac-lab']},
    {type: 'category', label: 'Tutorial / 教程', items: ['tutorial/motor-test', 'tutorial/joint-calibration', 'tutorial/v2-right-arm-zero', 'tutorial/trajectory', 'tutorial/teleoperation']},
    {type: 'category', label: 'Troubleshooting', items: ['troubleshooting/can', 'troubleshooting/motor', 'troubleshooting/ros2']},
    {type: 'category', label: '资料下载', items: ['resources/source-materials']},
    {type: 'category', label: 'Legal & Attribution', items: ['legal/licenses', 'legal/upstream-attribution']},
  ],
};

module.exports = sidebars;
