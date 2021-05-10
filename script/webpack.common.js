const path = require('path');
const rules = require('./rules');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: `${process.cwd()}/src/index.js`,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Production',
    }),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.join(process.cwd(), 'dist'),
    clean: true,
  },
  devServer: {
    contentBase: path.join(process.cwd(), 'dist'),
    hot: true
  },
  optimization: {
    usedExports: true,
  },
};