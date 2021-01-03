import path from 'path';
import json from '@rollup/plugin-json'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel';

const globals = {
    react: 'React',
    'react-dom': 'ReactDOM',
};

const babelOptions = {
    exclude: /node_modules/,
    babelHelpers: 'runtime',
    extensions: ['.js', '.jsx'],
    configFile: path.resolve(__dirname, '../../babel.config.json'),
};

export default {
    input: 'src/index.js',
    output: [
        {
            dir: 'dist/',
            format: 'cjs',
            name: 'evg-ui-icons',
            globals,
            preserveModules: true,
            exports: 'named',
        },
    ],
    plugins: [
        json(),
        babel(babelOptions),
        commonjs(),
    ]
}