import { defineConfig } from 'vite'

export default defineConfig({
  oxc: {
    jsx: { runtime: 'classic' }
  },
  resolve: {
    dedupe: ['react', 'react-dom', 'styled-components']
  },
  optimizeDeps: {
    // Vite следит за dist пакетов и не сохраняет их в кеше зависимостей.
    exclude: ['@evg-b/evg-ui', '@evg-b/evg-icons', '@evg-b/evg-tools']
  },
  server: {
    host: '127.0.0.1',
    port: 5173,
    strictPort: true
  },
  preview: {
    host: '127.0.0.1',
    port: 4173,
    strictPort: true
  }
})
