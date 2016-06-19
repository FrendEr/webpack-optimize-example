var path = require('path');
var webpack = require('webpack');

var exp = {};
var loaders = [
	{
		test: /\.jsx?$/,
		exclude: /node_modules/,
		loader: 'babel',
		query: {
			presets: ['es2015', 'react'],
			cacheDirectory: true
		}
	}
];

if (process.env.MAKE_DLL) {
	exp = {
		entry: {
			vendor: [
				'react',
				'react-dom',
				'lodash'
			]
		},
		output: {
			path: path.join(__dirname, 'dll'),
			filename: '[name].js',
			library: '[name]_dll'
		},
		plugins: [
			new webpack.DllPlugin({
				path: path.join(__dirname, 'dll', 'manifest.json'),
				name: '[name]_dll'
			})
		],
		module: {
			loaders: loaders
		}
	};
} else {
	exp = {
		entry: './index.js',
		output: {
			path: path.join(__dirname, 'dist'),
			filename: 'bunld.js',
		},
		plugins: [
			new webpack.DllReferencePlugin({
				context: '.',
				manifest: require('./dll/manifest.json')
			})
		],
		module: {
			loaders: loaders
		}
	};
}

module.exports = exp;
