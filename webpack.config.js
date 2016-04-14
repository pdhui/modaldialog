var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack')
var path = require('path')
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
      main:"./src/index.js",
      "../example/test":"./src/example/entry.js"
    },
    output: {
        filename: "[name].js",
        path: path.join(__dirname , "/build/"),
        libraryTarget: "umd"
    },
    //devtool:'sourcemap',
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
        ]
    },
    plugins: [
        new ExtractTextPlugin("../lib/[name].css"),
        new webpack.optimize.UglifyJsPlugin({
            mangle: {
                except: ['$', 'exports', 'require']
            }
        })
    ]
}