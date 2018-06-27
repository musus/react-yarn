const webpack = require('webpack');
const path = require('path');

const config {
	entry: './src/app.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'app.jn'
	},
	module: {
		rules:[{
			test: /\.js$/,
				exclude: path.resolve(__dirname, 'node_modules'),
				loader: 'babel-loader',
				queryy: {
					presets: ['react', 'es2015']
				}
		}]
	}
};