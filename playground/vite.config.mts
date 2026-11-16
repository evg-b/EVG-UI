import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'

const root = dirname(fileURLToPath(import.meta.url))
const projectRoot = resolve(root, '..')

export default defineConfig({
  root,
  oxc: {
    jsx: { runtime: 'automatic' }
  },
  resolve: {
    alias: [
      {
        find: /^@evg-b\/evg-ui$/,
        replacement: resolve(projectRoot, 'dist/index.js')
      }
    ],
    dedupe: ['react', 'react-dom', 'styled-components']
  },
  optimizeDeps: {
    // Vite следит за dist библиотеки и не сохраняет её в кеше зависимостей.
    exclude: ['@evg-b/evg-ui']
  },
  server: {
    host: '127.0.0.1',
    port: 5173,
    strictPort: true,
    fs: { allow: [projectRoot] }
  },
  preview: {
    host: '127.0.0.1',
    port: 4173,
    strictPort: true
  }
})
