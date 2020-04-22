const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry : './client/src/index.jsx', //  入口文件，绝对路径
  output: {
    filename: 'bundle.[hash].js',
    path: path.join(__dirname, '../app/public') // 打包地址
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        // 引入该后缀文件的时候可以不带后缀
        resolve: {
          extensions: [".js", ".jsx"]
        }
      },
      // less & css
      {
        test: /\.css|\.less$/,
        use: [
          { loader: "style-loader" },
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: "css-loader",
            options: {
              sourceMap: false
            }
          },
          {
            loader: "postcss-loader"
          },
          {
            loader: "less-loader",
            options: {
              sourceMap: false //产生.map文件
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './client/src/index.html' // html模版路径
    }),
    new MiniCssExtractPlugin({
      filename: "[name]/[contenthash:8].bundle.css",
      chunkFilename: "[name]/[contenthash:8].chunk.css"
    }),
  ]
}