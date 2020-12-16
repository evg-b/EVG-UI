const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./example/js/index.jsx",
    // entry: "./docsite/js/index.jsx",
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "bundle.js",
        sourceMapFilename: 'bundle.map'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react'
                    ],
                    plugins: [
                        "@babel/plugin-proposal-class-properties"
                    ]
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    'css-hot-loader',
                    'style-loader',
                    // env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                autoprefixer({
                                    browsers: ['ie >= 8', 'last 4 version']
                                })
                            ],
                            sourceMap: true
                        }
                    },
                    'sass-loader',
                ],
            }
        ]
    },
    devtool: '#source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true,
        host: 'localhost',
        port: 10777,
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                sourceMap: true,
                extractComments: true, // убирать комментарии
            }),
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'example/template.html',
            // template: 'docsite/template.html',
            filename: 'index.html',
        }),
    ]
}