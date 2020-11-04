const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')


module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'extension.js',
    publicPath: '/',
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader' },
      { test: /\.(css)$/, use: ['css-loader', 'style-loader'] },
      {
        test: /\.(s[ac]ss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      { test: /\.(jpg|png|jpeg|gif)$/, use: ['file-loader'] },
    ],
  },
  mode: 'development',
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public', to: '.' },
      ],
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
  ],
}