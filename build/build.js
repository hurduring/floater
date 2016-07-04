require('shelljs/global');
env.NODE_ENV = 'production';

var ora = require('ora');
var webpack = require('webpack');
var conf = require('./webpack.prod.conf');

var staticPath = 'dist/static';
var spinner = ora('building for production...');

spinner.start();

mkdir('dist');

webpack(conf, function (err, stats) {
  spinner.stop();

  if (err) {
    throw err;
  }

  rm('-rf', staticPath);
  mv(conf.output.path, staticPath);
  cp('static/*', staticPath);

  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n');
});
