const path = require('path');
const rules = require('./rules');
const webpack = require('webpack');
const HappyPack = require('happypack');

module.exports = {
  entry: {
    app: `${process.cwd()}/src/index.js`,
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDom: 'react-dom',
    }),
    new HappyPack({
      loaders: [ 'babel-loader?presets[]=es2015' ]
    })
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
  module: {
    rules
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