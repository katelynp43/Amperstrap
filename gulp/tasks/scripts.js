var browserify   = require('browserify');
var watchify     = require('watchify');
var bundleLogger = require('../util/bundleLogger');
var config       = require('../config');
var gulp         = require('gulp');
var runSequence = require('run-sequence');
var handleErrors = require('../util/handleErrors');
var source       = require('vinyl-source-stream');

gulp.task('scripts', function() {

  var bundler = browserify({
  	cache: {}, packageCache: {}, fullPaths: true,
    entries: ['./src/js/app.js'],
    extensions: ['.js', '.js'],
    debug: true
  });

  var bundle = function() {
    bundleLogger.start();
    return bundler
      .bundle()
      .on('error', handleErrors)
      .pipe(source('app.js'))
      .pipe(gulp.dest('./public/js/'))
      .on('end', bundleLogger.end);
  }
  // add environment check
	bundler = watchify(bundler);
  bundler.on('update', function(){
  	bundle();
  });

  return bundle();
});