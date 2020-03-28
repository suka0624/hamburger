var gulp = require('gulp');
var sass = require('gulp-sass');
var packageImporter = require('node-sass-package-importer');

gulp.task('sass', function () {
  return gulp
    .src('./asset/scss/**/*.scss')
    .pipe(sass({
			importer: packageImporter({
				extensions: ['.scss', '.css']
			}),
			ioutputStyle: 'expanded' 
		}))
    .pipe(gulp.dest('./asset/css'));
})
