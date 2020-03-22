'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
<<<<<<< HEAD
var packageImporter = require('node-sass-package-importer');
=======
var postcss		= require("gulp-postcss");
var cssImport		= require("postcss-import");
>>>>>>> feature/step2_1

sass.compiler = require('node-sass');

gulp.task('sass', function () {
  const plugins = [
		cssImport({
			path: [ 'node_modules' ]
		})
	];
  return gulp.src('./asset/scss/**/*.scss')
<<<<<<< HEAD
    .pipe(sass({
      importer: packageImporter({
        extensions: ['.scss', '.css']
      })
    }).on('error', sass.logError))
=======
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(plugins))
>>>>>>> feature/step2_1
    .pipe(gulp.dest('./asset/css'));
});
gulp.task('sass:watch', () => {
  gulp.watch('./asset/scss/**/*.scss', gulp.series('sass'));
})