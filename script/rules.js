// module.exports = [
//   {
//     test: /\.(js|mjs|jsx|ts|tsx)$/,
//     enforce: 'pre',
//     exclude: /node_modules/,
//     use: [
//       {
//         loader: 'eslint-loader',
//       },
//     ],
//   },
//   {
//     test: /\.(js|jsx|ts|tsx)$/,
//     // 把对.js 的文件处理交给id为happyBabel 的HappyPack 的实例执行
//     loader: 'happypack/loader?id=happyBabel',
//     exclude: /node_modules/,
//   },
//   {
//     test: /\.(css|less)$/,
//     oneOf: [
//       {
//         resourceQuery: /css_modules/, // if path include 'css_modules', will use cssModules，
//         use: cssModulesLoader.filter(Boolean),
//       },
//       {
//         use: cssLoader.filter(Boolean),
//       },
//     ],
//   },
//   {
//     test: /\.(png|jpg|gif)$/,
//     loader: 'url-loader',
//     options: {
//       limit: 8192,
//       name: 'static/media/[name].[hash:8].[ext]',
//     },
//   },
//   {
//     test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
//     use: [
//       {
//         loader: 'url-loader',
//         options: {
//           limit: '1024',
//           name: 'static/front/[name].[hash:8].[ext]',
//         },
//       },
//     ],
//   },
//   {
//     test: /\.svg$/,
//     loader: 'svg-inline-loader',
//   },
// ]