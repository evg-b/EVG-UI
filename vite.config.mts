import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'

const root = dirname(fileURLToPath(import.meta.url))
const manifest: {
  dependencies?: Record<string, string>
  peerDependencies?: Record<string, string>
} = JSON.parse(readFileSync(resolve(root, 'package.json'), 'utf8'))
const dependencies = Object.keys({
  ...manifest.dependencies,
  ...manifest.peerDependencies
})

export default defineConfig({
  root,
  oxc: {
    jsx: { runtime: 'automatic' }
  },
  build: {
    target: 'es2015',
    sourcemap: true,
    minify: false,
    reportCompressedSize: false,
    lib: {
      entry: resolve(root, 'src/index.ts'),
      formats: ['es']
    },
    rolldownOptions: {
      transform: {
        jsx: { runtime: 'automatic' }
      },
      external: (id) =>
        dependencies.some((name) => id === name || id.startsWith(`${name}/`)),
      output: {
        preserveModules: true,
        preserveModulesRoot: resolve(root, 'src'),
        entryFileNames: '[name].js'
      }
    }
  }
})
