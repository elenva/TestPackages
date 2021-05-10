const path = require('path');
const rules = require('./rules');
const HtmlWebpackPlugin = require('html-webpack-plugin');
console.log('dist', path.join(process.cwd(), 'dist'));
module.exports = {
  entry: {
    app: `${process.cwd()}/src/index.js`,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Production',
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
};