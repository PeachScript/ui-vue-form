var webpack = require('webpack');

module.exports = {
  entry: './example/scripts/app.js',
  output: {
    path: './build/',
    publicPath: '/build/',
    filename: 'main.js'
  },
  module: {
    loaders: [
      {
        test: /\.less$/,
        loader: 'style!css!less'
      },
      {
        test: /\.js$/,
        exclude: /node_modules|vue\/dist/,
        loader: 'babel',
      }
    ]
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
  devServer: {
    contentBase: './example/',
    port: 8080,
    hot: true,
    inline: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}