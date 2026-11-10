const { readFileSync, writeFileSync } = require('fs');
const { resolve, basename } = require('path');
const docgen = require('react-docgen');
const glob = require('glob');

const FILES = glob.sync('./src/**/*.js',
    {
        "ignore": [
            './src/**/index.js',
            './src/colors/**',
            './src/utils/**',
            './src/internal/**',
            './src/styles/**',
        ]
    });

const metadata = FILES.reduce((memo, filepath) => {
    const code = readFileSync(filepath, 'utf8');

    try {
        let componentInfo = docgen.parse(code);
        memo[basename(filepath, '.js')] = componentInfo;
    } catch (err) {
        if (err.message !== 'No suitable component definition found.') {
            console.log('ERROR:', filepath, err);
        }
    }

    return memo;
}, {});


writeFileSync(resolve(process.cwd(), './docsite/Example/ApiDoc/APIs.json'), JSON.stringify(metadata, null, 2));