var webpack = require('webpack')
var path = require('path')
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var lessFunctionsPlugin = require('less-plugin-functions');

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
                loader: 'style-loader!css-loader!less-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.(jpe?g|png|gif|svg|webp)$/i,
                loaders: [
                    'image?{bypassOnDebug: true, progressive:true, \
                        optimizationLevel: 3, pngquant:{quality: "65-80"}}',
                    'url?limit=10000&name=/img/[hash:8].[name].[ext]',
                ],
                exclude: '/node_modules/'
            },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
            {
                test: /\.html$/,
                loader: 'html',
                exclude: '/node_modules/'
            }
        ]
    },
    plugins: [

    ],
    lessLoader: {
        lessPlugins: [
          new lessFunctionsPlugin()
        ]
    },
    devServer:{
        disableHostCheck: true
    }
}