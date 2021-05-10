const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(process.cwd(), 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
    }),
  ],
});