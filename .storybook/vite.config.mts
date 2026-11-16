import { fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'

export default defineConfig({
  oxc: { jsx: { runtime: 'automatic' } },
  resolve: {
    alias: [
      {
        find: /^@evg-b\/evg-ui$/,
        replacement: fileURLToPath(new URL('../src/index.ts', import.meta.url))
      }
    ],
    dedupe: ['react', 'react-dom', 'styled-components']
  }
})
