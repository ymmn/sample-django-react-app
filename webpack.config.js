var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var path = require('path');
var fs = require('fs');


module.exports = {
  entry: {
    main: path.resolve('./static/main-app.js'),
  },

  output: {
    path: path.resolve('./static/build'),
    filename: '[name].js',
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.resolve('./static'),
        query: {
          presets: ['react', 'es2015'],
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
    root: path.resolve('./static'),
    modulesDirectories: ['node_modules'],
    extensions: ['', '.json', '.js', '.jsx']
  },

  plugins: [
    new ExtractTextPlugin("styles.css")
  ],
}
