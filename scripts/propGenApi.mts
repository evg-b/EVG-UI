import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import type { PropDocPatient } from '../docsite/src/components/PropDoc/PropDoc.types'

const docsiteDirectory = resolve(
  dirname(fileURLToPath(import.meta.url)),
  '../docsite'
)
const apiDirectory = resolve(docsiteDirectory, 'docs/API')
const metadata: Record<string, PropDocPatient> = JSON.parse(
  readFileSync(resolve(docsiteDirectory, 'Example/ApiDoc/APIs.json'), 'utf8')
)
const componentNames = Object.keys(metadata).sort()

if (!componentNames.length)
  throw new Error('No props metadata. Run yarn propdoc:jsonAPI first')
if (componentNames.some((name) => !/^[A-Za-z_$][\w$]*$/.test(name))) {
  throw new Error('Props metadata contains an invalid component name')
}

const renderPage = (name: string) => `---
id: ${name}
title: ${name}
sidebar_label: ${name}
---

import ApiDoc from '../../Example/ApiDoc/ApiDoc'

<ApiDoc full name="${name}" />
`

mkdirSync(apiDirectory, { recursive: true })
for (const name of componentNames) {
  writeFileSync(resolve(apiDirectory, `${name}.mdx`), renderPage(name))
}

const sidebarItems = componentNames.map((name) => `  'API/${name}'`).join(',\n')
writeFileSync(
  resolve(docsiteDirectory, 'APIdocs.ts'),
  `const apiDocs = [\n${sidebarItems}\n]\n\nexport default apiDocs\n`
)
console.log(`Generated ${componentNames.length} API pages and the sidebar`)
