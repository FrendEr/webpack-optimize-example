const path = require('path');
const webpack = require('webpack');

/**
 * loaders list
 */
const loaders = [
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
    query: {
      presets: ['react', 'es2015', 'stage-0'],
      plugins: ['add-module-exports']
    }
  }
];

/**
 * plugins list
 */
const plugins = [
  new webpack.optimize.UglifyJsPlugin({
     mangle: {
         except: ['functor']
     },
     compress: {
         warnings: false
     }
  })
];

module.exports = {
  entry: {
    index: path.join(__dirname, 'src/index.js')
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js'
  },
  resolve: {
    alias: {
      'react': path.resolve(__dirname, 'node_modules/react/dist/react.min.js'),
      'react-dom': path.resolve(__dirname, 'node_modules/react-dom/dist/react-dom.min.js')
    }
  },
  module: {
    loaders: loaders
  },
  plugins: plugins
};
