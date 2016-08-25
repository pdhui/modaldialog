var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack')
var path = require('path')
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
      "test":"./src/example/entry.js"
    },
    output: {
        filename: "[name].js",
        path: path.join(__dirname , "/example/"),
        libraryTarget: "umd"
    },
    devtool:'inline-source-map',
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?!less-loader'),
                exclude: '/node_modules/'
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?!less-loader'),
                exclude: '/node_modules/'
            },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel' }
        ]
    },
    plugins: [
        new ExtractTextPlugin("../example/[name].css")
    ]
}