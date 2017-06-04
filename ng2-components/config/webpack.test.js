const helpers = require('./helpers');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = webpackMerge(commonConfig, {

    devtool: 'inline-source-map',

    module: {
        rules: [
            {
                enforce: 'post',
                test: /^(?!.*spec).*\.ts?$/,
                loader: 'istanbul-instrumenter-loader',
                exclude: [
                    /node_modules/,
                    /test/
                ]
            },
            {
                test: /\.(txt|pdf)$/,
                loader: 'file-loader',
                query: {
                    name: '[path][name].[ext]',
                    outputPath: (url)=> {
                        return url.replace('src', 'dist');
                    }
                }
            }
        ]
    }
});
