const path = require('path');
const webpack = require('webpack');

/**
 * loaders list
 */
const loaders = [
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: 'babel',
    query: {
      presets: ['react', 'es2015', 'stage-0']
    }
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
  })
];

module.exports = [{
  entry: {
    home: path.join(__dirname, 'src/container/home.js')
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js'
  },
  module: {
    loaders: loaders
  },
  plugins: plugins
}, {
  entry: {
    list: path.join(__dirname, 'src/container/list.js')
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js'
  },
  module: {
    loaders: loaders
  },
  plugins: plugins
}, {
  entry: {
    item: path.join(__dirname, 'src/container/item.js')
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
