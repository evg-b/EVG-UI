import { fileURLToPath } from 'node:url'

import { build, createServer, type Rolldown, type ViteDevServer } from 'vite'

let watcher: Rolldown.RolldownWatcher | undefined
let server: ViteDevServer | undefined
let stopping = false

const stop = async (exitCode = 0) => {
  if (stopping) return
  stopping = true

  const results = await Promise.allSettled([server?.close(), watcher?.close()])
  for (const result of results) {
    if (result.status === 'rejected') {
      console.error(result.reason)
      exitCode = 1
    }
  }

  process.exit(exitCode)
}

process.once('SIGINT', () => void stop())
process.once('SIGTERM', () => void stop())

try {
  const result = await build({
    configFile: fileURLToPath(new URL('../vite.config.mts', import.meta.url)),
    build: { watch: {} }
  })
  if (Array.isArray(result) || !('on' in result)) {
    throw new Error('Vite did not start a build watcher')
  }
  const buildWatcher = result
  watcher = buildWatcher

  // Стенд использует dist, поэтому ждём завершения первой сборки.
  await new Promise<void>((resolve, reject) => {
    const onEvent = (event: Rolldown.RolldownWatcherEvent) => {
      if (event.code === 'END') {
        buildWatcher.off('event', onEvent)
        resolve()
      } else if (event.code === 'ERROR') {
        buildWatcher.off('event', onEvent)
        reject(event.error)
      }
    }

    buildWatcher.on('event', onEvent)
  })

  server = await createServer({
    configFile: fileURLToPath(
      new URL('../playground/vite.config.mts', import.meta.url)
    )
  })
  await server.listen()
  server.printUrls()
} catch (error) {
  console.error(error)
  await stop(1)
}
