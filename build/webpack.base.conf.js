const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, '../client'),
  entry : './src/index.js',
  output: {
    filename: 'bundle.[hash].js',
    path: path.join(__dirname, '../app/public')
  },
  module: {
    rules: [
      // {
      //   test: /\.jsx?$/,
      //   loader: "eslint-loader",
      //   // pre 优先处理
      //   enforce: "pre",
      //   include: path.resolve(__dirname, "../client"),
      // },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        // 引入该后缀文件的时候可以不带后缀
        resolve: {
          extensions: [".js", ".jsx"]
        } 
      },
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        // 引入该后缀文件的时候可以不带后缀
        resolve: {
          extensions: [".js", ".jsx"]
        } 
      },
      {
        test: /\.css$/,
        use: [
          // { loader: MiniCssExtractPlugin.loader },
          {
            loader: "css-loader",
            options: {
              sourceMap: false
            }
          },
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      chunks: ['index'],
      filename: 'index.html',
      template: './src/index.html'
    }),
    // new MiniCssExtractPlugin({
    //   filename: "[name]/[contenthash:8].bundle.css",
    //   chunkFilename: "[name]/[contenthash:8].chunk.css"
    // }),
  ],
  resolve: {
    extensions: ['.js', '.jsx',]
  }
}