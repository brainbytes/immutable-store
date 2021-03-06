var path;

path = require('path');

module.exports = function(config) {
  return config.set({
    basePath: '',
    frameworks: ['mocha'],
    files: ['test/**/*.js'],
    plugins: [require('karma-webpack'), require('karma-phantomjs-launcher'), require('karma-mocha'), require('karma-chrome-launcher')],
    exclude: ['node_modules/'],
    preprocessors: {
      './test/spec/**/*.js': ['webpack']
    },
    webpack: {
      resolve: {
        extensions: ['', '.js', '.json'],
        root: __dirname,
        modulesDirectories: ['', 'src', 'node_modules']
      },
      module: {
        loaders: [
          {
            test: /\.js?$/,
            loaders: ['babel-loader'],
            exclude: path.join(__dirname, 'node_modules')
          }, {
            test: /\.json$/,
            loaders: ['json-loader']
          }
        ]
      }
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false
  });
};
