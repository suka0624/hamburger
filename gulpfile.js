'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var packageImporter = require('node-sass-package-importer');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src('./asset/scss/**/*.scss')
    .pipe(sass({
      importer: packageImporter({
        extensions: ['.scss', '.css']
      })
    }).on('error', sass.logError))
    .pipe(gulp.dest('./asset/css'));
});
gulp.task('sass:watch', () => {
  gulp.watch('./asset/scss/**/*.scss', gulp.series('sass'));
})