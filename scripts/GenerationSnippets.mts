import { readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { basename, dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

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
  const snippets = Object.fromEntries(
    files.map((file, index) => [
      componentNames[index],
      readFileSync(resolve(componentDirectory, file), 'utf8')
    ])
  )

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
    `const snippets = ${JSON.stringify(snippets, null, 2)}\n\nexport default snippets\n`
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
