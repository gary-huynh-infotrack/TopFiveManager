var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var config = {
    entry: {
        app: [
            'webpack/hot/only-dev-server',
            'webpack-hot-middleware/client',
            './app/index'
        ],
        vendor: []
    },
    devtool: 'eval',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            '$': "jquery",
            'jQuery': "jquery",
            'window.jQuery': "jquery",
            'window.$': 'jquery'

        }),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js', Infinity),
        new webpack.DefinePlugin({
            "require.specified": "require.resolve"
        }),
        new HtmlWebpackPlugin({
            title: "sad",
            template: './public/index.html'
        }),
    ],
    module: {
        noParse: [],
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel'],
                include: path.join(__dirname, 'app')
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')

            },
            {
                test: /\.(png|jpg|gif)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=100000'
            },
            {
                test: /\.(eot|com|json|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
            }
        ]
    }
};


module.exports = config;
