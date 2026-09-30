/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    {type: 'category', label: 'Overview', items: ['overview/project', 'overview/architecture', 'overview/versions', 'overview/upstream']},
    {type: 'category', label: 'Getting Started', items: ['getting-started/requirements', 'getting-started/installation', 'getting-started/first-motion', 'getting-started/can-setup']},
    {type: 'category', label: 'Hardware', items: ['hardware/general', 'hardware/hexmovr-motor', 'hardware/electrical', 'hardware/mechanical', 'hardware/end-effector']},
    {type: 'category', label: 'Software', items: ['software/architecture', 'software/repository-layout', 'software/hexmovr-adaptation', 'software/configuration']},
    {type: 'category', label: 'API Reference', items: ['api-reference/can-api', 'api-reference/motor-protocol', 'api-reference/python', 'api-reference/cpp']},
    {type: 'category', label: 'ROS 2', items: ['ros2/overview', 'ros2/installation', 'ros2/controllers', 'ros2/launch']},
    {type: 'category', label: 'Simulation', items: ['simulation/overview', 'simulation/urdf', 'simulation/mujoco', 'simulation/isaac-lab']},
    {type: 'category', label: 'Tutorial', items: ['tutorial/motor-test', 'tutorial/joint-calibration', 'tutorial/trajectory', 'tutorial/teleoperation']},
    {type: 'category', label: 'Troubleshooting', items: ['troubleshooting/can', 'troubleshooting/motor', 'troubleshooting/ros2']},
    {type: 'category', label: 'Legal & Attribution', items: ['legal/licenses', 'legal/upstream-attribution']},
  ],
};

module.exports = sidebars;
