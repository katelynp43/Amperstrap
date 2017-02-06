var gulp                = require('gulp');
var scss                = require('gulp-sass');
var prefix              =  require('gulp-autoprefixer');
var notify              = require('gulp-notify');
var handleErrors        = require('../util/handleErrors');
var sourcemaps          = require('gulp-sourcemaps');
var plumber             = require('gulp-plumber');
// var Promise             = require("es6-promise").Promise


// Sass
gulp.task('scss', function() {
  return gulp.src('src/scss/**/*.*')
    .pipe(plumber({
      errorHandler: function (err) {
        console.log(err);
      }
    }))
    .pipe(sourcemaps.init())
    .pipe(scss())
    .pipe(prefix())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public/css/'))
});