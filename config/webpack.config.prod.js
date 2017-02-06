//webpack config
var webpack = require('webpack'),
    path = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

var EXCLUDE_PATH = /node_modules/,
    OUTPUT_PATH = path.join(__dirname, 'dist'),
    PUBLIC_PATH = '/dist/',
    NODE_MODULE_PATH = '/node_modules/';

var prodConfig = {
    entry: {    //编译的入口文件
        index: ['./src/index']
    },

    output: {   //输出配置
        path: OUTPUT_PATH,
        filename: '[name].js',
        publicPath: PUBLIC_PATH
    },

    resolve: {
        extensions: ['', '.js', '.jsx', '.scss', '.css'], // resolve 指定可以被 import 的文件后缀
        alias: [] //指定包路径，这样能够减少webpack搜索硬盘文件的时间
    },

    module: {
        loaders: [
            {
                test: /\.js/,
                loader: 'babel',
                exclude: EXCLUDE_PATH  //不包括此文件夹内的文件
            },{
                test: /\.css/,
                loader: ExtractTextPlugin.extract("style", "css"),
                //loader: 'style!css',
                exclude: EXCLUDE_PATH
            },{
                test: /\.(jpe?g|png|gif)/,
                loaders: [
                    'url?limit=4000&name=images/[name][hash:8].[ext]',
                    'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}'
                    ]
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.optimize.CommonsChunkPlugin( 'common.js'),
        new ExtractTextPlugin('style.css')
    ]
}

module.exports = prodConfig;