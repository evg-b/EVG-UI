import { resolve } from 'node:path'

import { getBabelOptions } from '@docusaurus/babel'
import type { Config } from '@docusaurus/types'
import type { Options, ThemeConfig } from '@docusaurus/preset-classic'

const config: Config = {
  title: 'EVG-UI',
  tagline: 'React-компоненты в стиле Material Design с динамической темой',
  url: 'https://evg-b.github.io',
  baseUrl: '/EVG-UI/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'evg-b',
  projectName: 'EVG-UI',
  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve('babel-loader'),
      options: getBabelOptions({
        isServer,
        babelOptions: resolve(__dirname, 'babel.config.json')
      })
    })
  },
  plugins: [
    function localEvgUi() {
      return {
        name: 'local-evg-ui',
        configureWebpack() {
          return {
            resolve: {
              alias: {
                '@evg-b/evg-ui$': resolve(__dirname, '../dist/index.js')
              }
            }
          }
        }
      }
    }
  ],
  themeConfig: {
    navbar: {
      title: 'EVG-UI',
      logo: {
        alt: 'EVG-UI',
        src: 'img/logo.svg'
      },
      items: [
        {
          to: 'docs/GettingStarted/Installation',
          activeBasePath: 'docs/GettingStarted/Installation',
          label: 'Installation',
          position: 'left'
        },
        {
          to: 'docs/Components/All',
          activeBasePath: 'docs/Components/All',
          label: 'Components',
          position: 'left'
        },
        {
          to: 'docs/API/AppBar',
          activeBasePath: 'docs/API/AppBar',
          label: 'API',
          position: 'left'
        },
        {
          href: 'https://github.com/evg-b/EVG-UI',
          className: 'header-github-link header-icon-link',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} evg-b (Evgeniy Bobilev).`
    }
  } satisfies ThemeConfig,
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: resolve(__dirname, 'sidebars.ts')
        },
        blog: false,
        theme: {
          customCss: resolve(__dirname, 'src/css/custom.css')
        }
      } satisfies Options
    ]
  ]
}

export default config
