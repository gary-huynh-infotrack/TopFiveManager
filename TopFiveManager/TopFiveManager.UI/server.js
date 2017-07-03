var webpack = require('webpack');
//var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config');
var path = require("path");
var express = require("express");



var app = express()
var server = require('http').Server(app);
/*
new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    contentBase: "public/"
}).listen(8000, 'localhost', function (error) {
    if (error) {
        return console.log(error);
    }
    console.log('Server running at http://localhost:8000/');
});
*/

const PORT = process.env.PORT || 3000

var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require('webpack-hot-middleware');

var compiler = webpack(webpackConfig);

var devMiddleware = webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    })

app.use(devMiddleware)
app.use(webpackHotMiddleware(compiler))

 server.listen(PORT, function(){
        console.log("https://localhost:"+PORT);
 })
