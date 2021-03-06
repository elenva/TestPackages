const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(process.cwd(), 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: path.join(process.cwd(), 'src/index.html')
    }),
  ],
});