import path from 'path';
import json from '@rollup/plugin-json'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel';
import { copy } from '@web/rollup-plugin-copy';
import del from 'rollup-plugin-delete'

const babelOptions = {
    exclude: /node_modules/,
    babelHelpers: 'runtime',
    extensions: ['.js', '.jsx'],
    configFile: path.resolve(__dirname, '../../babel.config.json'),
};

export default {
    input: './src/index.js',
    output: [
        {
            dir: 'dist/',
            format: 'es',
            name: 'evg-ui',
            preserveModules: true,
        },
    ],
    external: [
        'react',
        'react-dom',
        'react-jss',
        'react-syntax-highlighter',
        'prop-types',
        'classnames',
    ],
    plugins: [
        del({ targets: 'dist/*' }),
        copy({ patterns: '**/*.json', rootDir: './src' }),
        babel(babelOptions),
        commonjs(),
        json(),
    ]
}