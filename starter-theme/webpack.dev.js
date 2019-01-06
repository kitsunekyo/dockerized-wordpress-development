const webpack = require('webpack');

module.exports = {
  output: {
    publicPath: 'http://localhost:8080/'
  },
  module: {
    rules: [
      {
        test: /\.(c|sa|sc)ss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      }
    ]
  },
  devServer: {
    port: 8080,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    compress: true,
    hot: true,
    inline: true,
    stats: 'errors-only',
    overlay: true
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};
