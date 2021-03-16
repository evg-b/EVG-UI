module.exports = {
  title: 'EVG-UI',
  tagline: 'React компоненты основанные на идеях Material Design.',
  url: 'https://evg-b.github.io',
  baseUrl: '/EVG-UI/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'evg-b',
  projectName: 'EVG-UI',
  themeConfig: {
    navbar: {
      title: 'EVG-UI',
      logo: {
        alt: 'EVG-UI',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/GettingStarted/Installation',
          activeBasePath: 'docs/GettingStarted/Installation',
          label: 'Installation',
          position: 'left',
        },
        {
          to: 'docs/Components/All',
          activeBasePath: 'docs/Components/All',
          label: 'Components',
          position: 'left',
        },
        {
          to: 'docs/API/AppBar',
          activeBasePath: 'docs/API/AppBar',
          label: 'API',
          position: 'left',
        },
        {
          href: 'https://github.com/evg-b/EVG-UI',
          className: 'header-github-link header-icon-link',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} evg-b (Evgeniy Bobilev).`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          homePageId: 'Installation',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
