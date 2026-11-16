import { fileURLToPath } from 'node:url'

import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['../src/components/**/*.stories.tsx'],
  staticDirs: [{ from: './assets', to: '/story-assets' }],
  addons: ['@storybook/addon-docs'],
  framework: {
    name: '@storybook/react-vite',
    options: {
      builder: {
        viteConfigPath: fileURLToPath(
          new URL('./vite.config.mts', import.meta.url)
        )
      }
    }
  },
  core: {
    disableTelemetry: true
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      include: ['**/src/components/**/*.tsx'],
      exclude: ['**/Icon/material/**', '**/*.stories.tsx'],
      shouldRemoveUndefinedFromOptional: true,
      shouldExtractLiteralValuesFromEnum: false,
      skipChildrenPropWithoutDoc: false,
      propFilter: (prop) => {
        const declarations =
          prop.declarations || (prop.parent ? [prop.parent] : [])
        return (
          !declarations.length ||
          declarations.some(
            ({ fileName }) => !fileName.includes('node_modules')
          )
        )
      }
    }
  }
}

export default config
