var gulp = require('gulp');

gulp.task('build', ['images', 'scss', 'nunjucks' , 'bower', 'fonts', 'scripts', 'ie8']);
