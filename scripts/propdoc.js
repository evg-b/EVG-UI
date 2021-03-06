const { readFileSync, writeFileSync } = require('fs');
const { resolve, basename } = require('path');
const docgen = require('react-docgen');
const glob = require('glob');

const FILES = glob.sync('./packages/evg-ui/src/**/*.js',
    {
        "ignore": [
            './packages/evg-ui/src/**/index.js',
            './packages/evg-ui/src/colors/**',
            './packages/evg-ui/src/utils/**',
            './packages/evg-ui/src/internal/**'
        ]
    });
console.log('FILES: ', FILES)
const metadata = FILES.reduce((memo, filepath) => {
    // console.log('metadata: ', filepath)
    const code = readFileSync(filepath, 'utf8');
    try {
        let componentInfo = docgen.parse(code);
        // console.log("componentInfo: ", componentInfo)
        memo[basename(filepath, '.js')] = componentInfo;
    } catch (err) {
        if (err.message !== 'No suitable component definition found.') {
            console.log('ERROR:', filepath, err);
        }
    }

    return memo;
}, {});


writeFileSync(resolve(process.cwd(), './docsite/Example/ApiDoc/APIs.json'), JSON.stringify(metadata, null, 2));