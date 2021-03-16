const { readFileSync, writeFileSync, readdirSync } = require('fs');
const { resolve } = require('path');

const pathWork = './docsite/Example/Components/'
const grafExample = new Map()

const readDir = () => {
    readdirSync(pathWork).forEach(dir => {
        let val = readdirSync(`${pathWork}${dir}`).filter(file => !file.includes('Examples.js') && !file.includes('snippets.js')).map(file => file.replace('.js', ''))
        grafExample.set(dir, val)
    });
}
readDir()

const TemplSnippets = (snippets) => `
export default {${snippets}}
`.trim()

const TemplExamples = (Examples, Contents, Exports) => `
import React from 'react';
import { CodeExample } from '@evg-b/evg-tools';
import Snippets from './snippets'
${Examples}

${Contents}

export {
    ${Exports}
}
`.trim()

const TemplContents = (component, title) => `
const ${component}Example = () => {
	return (
		<CodeExample
			title='${title}'
			demo={<${component} />}
			snippet={Snippets.${component}}
		/>
	)
}
`
// 3) тут создаем два файла snippets.js и Examples.js в каждой папке.
grafExample.forEach((val, key) => {
    console.log('forEach:', val, key)
    const snippets = val.reduce((now, next) => {
        const fileRaw = readFileSync(`${pathWork}${key}/${next}.js`, 'utf8');
        return now + `${next}: \`${fileRaw.replace(/\$/g, '\\$').replace(/\`/g, '\\`')}\`,\n`
    }, '')

    let Examples, Contents, Exports

    Examples = val.reduce((now, next) => now + `import ${next} from './${next}'\n`, '').trim()
    Contents = val.reduce((now, next) => now + `${TemplContents(next, next.replace(key, ''))}\n`, '')
    Exports = val.reduce((now, next) => now + `${next}Example,\n`, '').trim()

    console.log('Examples:', Examples)
    console.log('Contents:', Contents)
    console.log('Exports:', Exports)


    writeFileSync(resolve(process.cwd(), `${pathWork}${key}/snippets.js`), TemplSnippets(snippets));
    writeFileSync(resolve(process.cwd(), `${pathWork}${key}/Examples.js`), TemplExamples(Examples, Contents, Exports));
})