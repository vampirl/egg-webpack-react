const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.conf.js');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../app/public'),
    compress: true,
    host: '0.0.0.0',
    port: 9000,
    proxy: {
      '/api': 'http://127.0.0.1:7001',
    }
  }
})           