var path = require('path')
var projectRoot = path.resolve(__dirname, '../')

// Build to temporary path so we can wait to delete old artificats to minimize downtown during deployment.
var tempPath = path.resolve(__dirname, '../dist/static-tmp')

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    path: tempPath,
    publicPath: '/static/',
    filename: '[name].js'
  },
  resolve: {
    root: path.resolve(__dirname, '../src'),
    extensions: ['', '.js'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'images': path.resolve(__dirname, '../src/assets/images')
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(png|jpg|gif|svg|woff2?|eot|ttf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash:7]'
        }
      }
    ]
  },
  eslint: {
    formatter: require('eslint-friendly-formatter')
  }
}

