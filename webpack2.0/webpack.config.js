const path = require('path');
const webpack = require('webpack');

/**
 * loaders list
 */
const loaders = [];

/**
 * plugins list
 */
const plugins = [];

module.exports = {
  entry: {
    index: path.join(__dirname, 'src/index.js')
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js'
  },
  module: {
    loaders: loaders
  },
  plugins: plugins
};
