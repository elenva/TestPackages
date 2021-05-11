const path = require('path');
const rules = require('./rules');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: `${process.cwd()}/src/index.js`,
  },
  plugins: [
    new webpack.ProvidePlugin({
      // React: 'react',
      // ReactDom: 'react-dom',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.join(process.cwd(), 'dist'),
    clean: true,
    pathinfo: false,
  },
  devServer: {
    contentBase: path.join(process.cwd(), 'dist'),
    hot: true
  },
  module: {
    rules
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  optimization: {
    runtimeChunk: 'single',
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
    usedExports: true,
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};