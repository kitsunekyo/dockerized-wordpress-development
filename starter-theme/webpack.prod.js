const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  output: {
    publicPath: '/wp-content/themes/starter-theme/dist/'
  },
  module: {
    rules: [
      {
        test: /\.(c|sa|sc)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin({ filename: '[name].css' })]
};
