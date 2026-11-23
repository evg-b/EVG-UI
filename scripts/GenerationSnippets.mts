import { readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { basename, dirname, relative, resolve, sep } from 'node:path'
import { fileURLToPath } from 'node:url'

import ts from 'typescript'

const examplesDirectory = resolve(
  dirname(fileURLToPath(import.meta.url)),
  '../docsite/Example/Components'
)

for (const directory of readdirSync(examplesDirectory, {
  withFileTypes: true
})) {
  if (!directory.isDirectory()) continue

  const componentDirectory = resolve(examplesDirectory, directory.name)
  const files = readdirSync(componentDirectory, { withFileTypes: true })
    .filter(
      (file) =>
        file.isFile() &&
        /^[A-Z]\w*\.tsx$/.test(file.name) &&
        file.name !== 'Examples.tsx'
    )
    .map((file) => file.name)
    .sort()
  const componentNames = files.map((file) => basename(file, '.tsx'))
  const sources = new Map<string, string>()

  function collectSource(file: string, related: Set<string>) {
    if (related.has(file)) return
    related.add(file)

    const path = resolve(componentDirectory, file)
    const source = sources.get(file) ?? readFileSync(path, 'utf8')
    sources.set(file, source)
    for (const { fileName } of ts.preProcessFile(source).importedFiles) {
      if (fileName.startsWith('.') && /\.(styled|types)$/.test(fileName)) {
        const dependency = resolve(dirname(path), fileName + '.ts')
        const key = relative(componentDirectory, dependency)
          .split(sep)
          .join('/')
        collectSource(key, related)
      }
    }
  }

  const entries = files.map((file, index) => {
    const related = new Set<string>()
    collectSource(file, related)
    const fields = Array.from(related, (path) => {
      const key = JSON.stringify(path)
      return `    ${key}: sources[${key}]`
    })
    return `  ${componentNames[index]}: {\n${fields.join(',\n')}\n  }`
  })

  const imports = componentNames
    .map((name) => `import ${name} from './${name}'`)
    .join('\n')
  const examples = componentNames
    .map((name) => {
      const title = name.startsWith(directory.name)
        ? name.slice(directory.name.length)
        : name
      return `export const ${name}Example = () => (
  <CodeExample
    title=${JSON.stringify(title)}
    demo={<${name} />}
    snippet={Snippets.${name}} />
)

${name}Example.displayName = '${name}Example'`
    })
    .join('\n\n')

  writeFileSync(
    resolve(componentDirectory, 'snippets.ts'),
    files.length
      ? `const sources = ${JSON.stringify(Object.fromEntries(sources), null, 2)}\n\nconst snippets = {\n${entries.join(',\n')}\n}\n\nexport default snippets\n`
      : 'const snippets = {}\n\nexport default snippets\n'
  )
  writeFileSync(
    resolve(componentDirectory, 'Examples.tsx'),
    `import CodeExample from '../../../src/components/CodeExample/CodeExample'
import Snippets from './snippets'
${imports}

${examples}
`
  )
}
