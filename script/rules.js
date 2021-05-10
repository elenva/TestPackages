const path = require('path');

module.exports = [
  {
    test: /\.(js|mjs|jsx|ts|tsx)$/,
    enforce: 'pre',
    exclude: /node_modules/,
    include: path.join(process.cwd(), 'src'),
    use: [
      {
        loader: 'eslint-loader',
      },
    ],
  },
  {
    test: /\.(js|jsx|ts|tsx)$/,
    // 把对.js 的文件处理交给id为happyBabel 的HappyPack 的实例执行
    loader: 'happypack/loader',
    exclude: /node_modules/,
  },
  {
    test: /\.(css|less)$/,
    exclude: /node_modules/,
    loader: 'css-loader'
  },
  {
    test: /\.(png|jpg|gif)$/,
    exclude: /node_modules/,
    loader: 'url-loader',
    options: {
      limit: 8192,
      name: 'static/media/[name].[hash:8].[ext]',
    },
  },
  {
    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: '1024',
          name: 'static/front/[name].[hash:8].[ext]',
        },
      },
    ],
  },
  {
    test: /\.svg$/,
    exclude: /node_modules/,
    loader: 'svg-inline-loader',
  },
]