'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss		= require("gulp-postcss");
var cssImport		= require("postcss-import");

sass.compiler = require('node-sass');

gulp.task('sass', function () {
  const plugins = [
		cssImport({
			path: [ 'node_modules' ]
		})
	];
  return gulp.src('./asset/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(plugins))
    .pipe(gulp.dest('./asset/css'));
});
gulp.task('sass:watch', () => {
  gulp.watch('./asset/scss/**/*.scss', gulp.series('sass'));
})