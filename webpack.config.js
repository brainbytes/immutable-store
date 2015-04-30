var HtmlPlugin = require('html-webpack-plugin');

var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: {
    src: './src/index',
    test: './test/index'
  },
  output: {
    filename: 'index.[name].js',
    path: __dirname + '/bin'
  },
  resolve: {
    extensions: ['', '.js', '.json']
  },
  module: {
    loaders: [
      {test: /\.jsx?$/, loaders: ['babel-loader']},
      {test: /\.json$/, loaders: ['json-loader']},
    ]
  },
  plugins: [
    new HtmlPlugin({ title: 'Immutable Store', filename: 'index.[name].html' }),
  ]
};
