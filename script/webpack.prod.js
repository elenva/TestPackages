const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].bundle.js',
    // path: path.join(process.cwd(), 'dist'),
    clean: true,
    publicPath: process.cwd(),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Prod',
    }),
  ],
});