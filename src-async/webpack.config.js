const path = require('path');
const PrettierPlugin = require("prettier-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const parentPackage = require("../package.json")

const libName = parentPackage.name+"-async";//same as defined in package.json
console.log(libName);

module.exports = {
    mode: "production",
    devtool: process.env.DEVTOOL || 'source-map',
    performance: {
        maxEntrypointSize: 2 * 1000 * 1000,
        maxAssetSize: 2 * 1000 * 1000
    },
    entry: {
        index: path.join(__dirname, './src/index.ts'),
    },
    output: {
        chunkFilename: 'library/[name].[chunkhash].js',
        filename: '[name].js',
        path: path.join(__dirname, 'build'),
        library: {
            name: libName.split("/")[libName.split("/").length-1],
            type: 'umd2',//https://webpack.js.org/configuration/output/#outputlibrarytype
        },
        umdNamedDefine: true
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: false, terserOptions: {
                    //https://github.com/terser/terser#minify-options
                    keep_classnames: true,
                    keep_fnames: true
                }
            })
        ],
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new PrettierPlugin(),
    ],
    resolve: {
        alias: {
            "@root": path.join(__dirname, "./src/")
        },
        fallback: {
            'url': false,
        },
        extensions: ['.ts', '.js', '.json']
    }
};
