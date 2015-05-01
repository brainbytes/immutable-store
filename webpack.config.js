var path = require('path');

module.exports = {
  //devtool: 'eval',
  entry: {
    src: ['./src/index'],
    test: ['./test/index']
  },
  output: {
    filename: 'index.[name].[hash].js',
    path: path.join(__dirname, 'bin')
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
