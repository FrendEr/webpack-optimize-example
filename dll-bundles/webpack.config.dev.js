var path = require('path');
var webpack = require('webpack');

var exp = {};

if (process.env.MAKE_DLL) {
	exp = {
		entry: {
			beta: ['./beta', './b', './a', './alpha']
		},
		output: {
			path: path.join(__dirname, 'js'),
			filename: 'MyDll.[name].js',
			library: '[name]_[hash]'
		},
		plugins: [
			new webpack.DllPlugin({
				path: path.join(__dirname, 'js', '[name]-manifest.json'),
				name: '[name]_[hash]'
			})
		]
	};
} else {
	exp = {
		cache: true,
		entry: './index.js',
		output: {
			path: path.join(__dirname, 'js'),
			filename: 'bunld.js',
		},
		plugins: [
			new webpack.DllReferencePlugin({
				scope: 'beta',
				manifest: require('./js/beta-manifest.json')
			})
		]
	};
}

module.exports = exp;
