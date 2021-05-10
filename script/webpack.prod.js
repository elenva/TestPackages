const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].bundle.js',
    path: path.join(process.cwd(), 'dist'),
    clean: true,
    publicPath: process.cwd(),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Prod',
    }),
  ],
  optimization: {
    runtimeChunk: 'single',
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
    pathinfo: false,
  },
  splitChunks: {
    cacheGroups: {
      vendor: {
        test: /[\\/]node_modules[\\/]/,
        name: 'vendors',
        chunks: 'all',
      },
    },
  },
});