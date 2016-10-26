var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')

var config = require('./webpack.config')

var path = require('path')
var express = require('express')
var app = express()
var port = 3000

var compiler = webpack(config)

app.use(webpackDevMiddleware(compiler,{noInfo: true, publicPath: config.output.publicPath}))