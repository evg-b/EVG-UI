import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'

export const createLibraryConfig = (configUrl) => {
  const root = dirname(fileURLToPath(configUrl))
  const manifest = JSON.parse(readFileSync(resolve(root, 'package.json'), 'utf8'))
  const dependencies = Object.keys({
    ...manifest.dependencies,
    ...manifest.peerDependencies
  })

  return defineConfig({
    root,
    oxc: {
      jsx: { runtime: 'classic' }
    },
    build: {
      target: 'es2015',
      sourcemap: true,
      minify: false,
      reportCompressedSize: false,
      lib: {
        entry: resolve(root, 'src/index.js'),
        formats: ['es']
      },
      rolldownOptions: {
        // Старые компоненты содержат JSX в файлах .js.
        moduleTypes: { '.js': 'jsx' },
        transform: {
          jsx: { runtime: 'classic' }
        },
        external: (id) => dependencies.some(
          (name) => id === name || id.startsWith(`${name}/`)
        ),
        output: {
          preserveModules: true,
          preserveModulesRoot: resolve(root, 'src'),
          entryFileNames: '[name].js'
        }
      }
    }
  })
}
