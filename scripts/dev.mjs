import { fileURLToPath } from 'node:url'

import { build, createServer } from 'vite'

let watcher
let server
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
  watcher = await build({
    configFile: fileURLToPath(new URL('../vite.config.mjs', import.meta.url)),
    build: { watch: {} }
  })

  // Стенд использует dist, поэтому ждём завершения первой сборки.
  await new Promise((resolve, reject) => {
    const onEvent = (event) => {
      if (event.code === 'END') {
        watcher.off('event', onEvent)
        resolve()
      } else if (event.code === 'ERROR') {
        watcher.off('event', onEvent)
        reject(event.error)
      }
    }

    watcher.on('event', onEvent)
  })

  server = await createServer({
    configFile: fileURLToPath(
      new URL('../playground/vite.config.mjs', import.meta.url)
    )
  })
  await server.listen()
  server.printUrls()
} catch (error) {
  console.error(error)
  await stop(1)
}
