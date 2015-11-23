var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');



gulp.task('default', ['watch']);

gulp.task('watch', function() {
  gulp.watch('./public/assets/sass/**/*.scss', ['styles']);
  gulp.watch('./public/app/**/*.scss', ['styles.app']);
});


gulp.task('styles', function() {
  return gulp.src('./public/assets/sass/style.scss')
    .pipe(sourcemaps.init())
    .pipe(rename('style.min.css'))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({ browsers: ['last 2 versions'] }))
    .pipe(minifyCss())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public/assets/css/'));
});

gulp.task('styles.app', function() {
  return gulp.src('./public/app/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({ browsers: ['last 2 versions'] }))
    .pipe(minifyCss())
    .pipe(gulp.dest(function(file) {
      return file.base;
    }));
});