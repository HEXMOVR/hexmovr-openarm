const path = require('path');

const repositoryName = process.env.GITHUB_REPOSITORY
  ? process.env.GITHUB_REPOSITORY.split('/')[1]
  : 'hexmovr-openarm';

// This repository is deployed as a GitHub Pages project site.
// Keep the project prefix as the safe default even if GitHub Actions does not
// expose DOCUSAURUS_BASE_URL (for example during a manual Pages rebuild).
const baseUrl = process.env.DOCUSAURUS_BASE_URL || '/hexmovr-openarm/';
const siteUrl = process.env.SITE_URL || 'https://hexmovr.github.io';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'HEXMovr OpenArm',
  tagline: 'OpenArm-compatible robotic arm with HEXMovr actuator adaptation',
  favicon: 'img/hexmovr-logo.png',

  url: siteUrl,
  baseUrl,

  organizationName: 'HEXMovr',
  projectName: repositoryName,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: 'docs',
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/hexmovr-logo.png',
    navbar: {
      title: 'HEXMovr OpenArm',
      logo: {
        alt: 'HEXMovr',
        src: 'img/hexmovr-logo.png',
      },
      items: [
        {to: '/docs/overview/project', label: 'Docs', position: 'left'},
        {to: '/docs/getting-started/installation', label: 'Getting Started', position: 'left'},
        {to: '/docs/hardware/general', label: 'Hardware', position: 'left'},
        {to: '/docs/api-reference/can-api', label: 'API', position: 'left'},
        {to: '/docs/ros2/overview', label: 'ROS 2', position: 'left'},
        {to: '/docs/simulation/overview', label: 'Simulation', position: 'left'},
        {
          href: 'https://github.com/HEXMovr/hexmovr-openarm',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {label: 'Overview', to: '/docs/overview/project'},
            {label: 'Getting Started', to: '/docs/getting-started/installation'},
            {label: 'Hardware', to: '/docs/hardware/general'},
            {label: 'API Reference', to: '/docs/api-reference/can-api'},
          ],
        },
        {
          title: 'Development',
          items: [
            {label: 'ROS 2', to: '/docs/ros2/overview'},
            {label: 'Simulation', to: '/docs/simulation/overview'},
            {label: 'Troubleshooting', to: '/docs/troubleshooting/can'},
          ],
        },
        {
          title: 'Project',
          items: [
            {label: 'GitHub', href: 'https://github.com/HEXMovr/hexmovr-openarm'},
            {label: 'Upstream OpenArm', href: 'https://github.com/enactic/openarm'},
            {label: 'OpenArm Docs', href: 'https://docs.openarm.dev/'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} HEXMovr. Independent OpenArm-compatible adaptation.`,
    },
  },
};

module.exports = config;
