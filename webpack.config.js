var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
      main: ['./src/js/main', './src/css/main.scss']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                },
                exclude: /node_modules/
            }, {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({fallback: 'style-loader',
                  use: ['css-loader', 'sass-loader']})
            },
        ]
    },

    stats: {
        colors: true
    },
    plugins: [
      new ExtractTextPlugin("css/style.css")
    ],
    watch: true
    // devtool: 'source-map'
};
