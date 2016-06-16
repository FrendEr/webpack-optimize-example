var path = require('path');
var webpack = require('webpack');

var exp = {};

if (process.env.MAKE_DLL) {
	exp = {
		entry: {
			vendor: ['./a', './b', './c', './d']
		},
		output: {
			path: path.join(__dirname, 'dll'),
			filename: '[name].js',
			library: '[name]_[hash]'
		},
		plugins: [
			new webpack.DllPlugin({
				path: path.join(__dirname, 'dll', 'manifest.json'),
				name: '[name]_[hash]'
			})
		]
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
				scope: 'vendor',
				manifest: require('./dll/manifest.json')
			})
		]
	};
}

module.exports = exp;
