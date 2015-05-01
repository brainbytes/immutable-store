# Karma configuration
# Generated on Thu Apr 30 2015 16:43:03 GMT-0400 (Eastern Daylight Time)

path = require 'path'

module.exports = (config) ->
  config.set

    # base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: ''


    # frameworks to use
    # available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha']


    # list of files / patterns to load in the browser
    files: [
      'test/**/*.js'
    ]

    plugins: [
      require 'karma-webpack'
      require 'karma-phantomjs-launcher'
      require 'karma-mocha'
      require 'karma-chrome-launcher'
    ]

    # list of files to exclude
    exclude: [
      'node_modules/'
    ]


    # preprocess matching files before serving them to the browser
    # available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors:
      #'./src/**/*.js': ['webpack']
      './test/**/*.js': ['webpack']

    webpack:
      resolve:
        extensions: ['', '.js', '.json']
        root: __dirname
        modulesDirectories: [
          ''
          'src'
          'node_modules'
        ]
      module:
        loaders: [
          test: /\.js?$/, loaders: ['babel-loader'], exclude: path.join(__dirname, 'node_modules')
        ,
          test: /\.json$/, loaders: ['json-loader']
        ]


    # test results reporter to use
    # possible values: 'dots', 'progress'
    # available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress']


    # web server port
    port: 9876


    # enable / disable colors in the output (reporters and logs)
    colors: true


    # level of logging
    # possible values:
    # - config.LOG_DISABLE
    # - config.LOG_ERROR
    # - config.LOG_WARN
    # - config.LOG_INFO
    # - config.LOG_DEBUG
    logLevel: config.LOG_DEBUG


    # enable / disable watching file and executing tests whenever any file changes
    autoWatch: true


    # start these browsers
    # available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS']


    # Continuous Integration mode
    # if true, Karma captures browsers, runs the tests and exits
    singleRun: false
