const path = require('path');
const webpack = require('webpack');
const HappyPack = require('happypack');

/**
 * loaders list
 */
const loaders = [
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: 'happypack/loader'
  }
];

/**
 * plugins list
 */
const plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: false,
    minimize: true,
    mangle: {
      except: ['functor']
    },
    compress: {
      drop_debugger: true,
      warnings: false,
      drop_console: true
    }
  }),
  new HappyPack({
    loaders: ['babel?presets[]=es2015,presets[]=react,presets[]=stage-0']
  })
];

module.exports = [{
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
}];
