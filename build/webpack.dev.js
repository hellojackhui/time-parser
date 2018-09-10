var webpack = require('webpack');
var path = require('path');

function resolve(dir) { 
    return path.join(__dirname, '..', path);
}

var config = {
    entry: './src/index.js',
    output: {
        filename: 'time-parser.js',
        path: resolve('dist'),
        publicPath: 'asset'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'eslint-loader',
                include:[resolve('src'), resolve('test')],
                enforce: "pre",
                options: {
                    formatter: require('eslint-friendly-formatter')
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test')]
            }
        ]
    }
}


module.exports = config;