import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'HEXMovr OpenArm',
  tagline: 'OpenArm-compatible humanoid arm with HEXMovr motor adaptation',
  favicon: 'img/hexmovr-logo.png',

  url: 'https://docs.hexmovr.com',
  baseUrl: '/',

  organizationName: 'HEXMovr',
  projectName: 'hexmovr-openarm',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-CN'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
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
      copyright: `Copyright © ${new Date().getFullYear()} HEXMovr. Documentation based in part on the OpenArm software ecosystem.`,
    },
  },
};

export default config;
