var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var path = require('path');
var fs = require('fs');


const commonConfig = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
        },
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'),
      },
      {
        test: /\.json$/,
        loaders: ["json-loader"]
      },
    ]
  },

  postcss: [
    require('postcss-nested'),
    require('postcss-media-variables'),
    require('postcss-custom-properties'),
    require('postcss-calc'),
    require('postcss-media-minmax'),
    require('autoprefixer'),
  ],

  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.json', '.js', '.jsx']
  },

  plugins: [
    new ExtractTextPlugin("styles.css")
  ],
}

var clientConfig = Object.assign({
  entry: {
    main: path.resolve('./static/main-app.js'),
  },

  output: {
    path: path.resolve('./static/build'),
    filename: '[name].js',
  },
}, commonConfig)

var serverConfig = Object.assign({
  target: "node",

  entry: {
    server: path.resolve('./frontend-server/src/server.js'),
  },

  output: {
    path: path.resolve('./frontend-server/build'),
    filename: '[name].js',
  },
}, commonConfig)

module.exports = [clientConfig, serverConfig]
