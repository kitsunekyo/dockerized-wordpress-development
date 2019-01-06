/* eslint-disable no-undef */
const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');

const modeConfig =
  process.env.NODE_ENV === 'production'
    ? require('./webpack.prod')
    : require('./webpack.dev');

module.exports = merge(
  {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    entry: {
      site: './src/js/site.js',
      admin: './src/js/admin.js'
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist/')
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        }
      ]
    },
    plugins: []
  },
  modeConfig
);
