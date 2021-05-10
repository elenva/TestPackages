const path = require('path');
const rules = require('./rules');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: `${process.cwd()}/src/index.js`,
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname,'dist'),
    clean: true,
    pathinfo: false,
  },
  devServer: {
    contentBase: path.join(process.cwd(), 'dist'),
    hot: true
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