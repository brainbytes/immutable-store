var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: {
    src: './src/index'
  },
  output: {
    filename: 'index.[hash].js',
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
  }
};
