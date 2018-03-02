var webpack = require('webpack')
var path = require('path')
var CleanWebpackPlugin = require('clean-webpack-plugin');
// var ExtractTextPlugin = require("extract-text-webpack-plugin");
var lessFunctionsPlugin = require('less-plugin-functions');

var isProduction = process.env.NODE_ENV == 'production' ? true : false;

var config = {
    entry: {
      core: ["./src/modal.js"],
      withHashDialog: './src/dialogWithHash.js'
    },
    output: {
        filename: "[name].js",
        path: path.join(__dirname , "/build/"),
        libraryTarget: "umd",
        library: "pdDialog",
    },
    module: {
        loaders: [
            {
                test: /\.(css|less)$/,
                // loader: ExtractTextPlugin.extract('style-loader', 'css-loader?!less-loader'),
                loader: 'raw-loader!extract-loader!css-loader!less-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.(jpe?g|png|gif|svg|webp)$/i,
                loaders: [
                    'image?{bypassOnDebug: true, progressive:true, \
                        optimizationLevel: 3, pngquant:{quality: "65-80"}}',
                    'url?limit=10000&name=img/[hash:8].[name].[ext]',
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
        // new ExtractTextPlugin("../lib/[name].css"),
        // new webpack.optimize.UglifyJsPlugin({
        //     mangle: {
        //         except: ['$', 'exports', 'require']
        //     }
        // })
    ],
    lessLoader: {
        lessPlugins: [
          new lessFunctionsPlugin()
        ]
    }
};

if(!isProduction){
  config.plugins.pop();
  config.devtool = 'inline-source-map';
}

module.exports = config;