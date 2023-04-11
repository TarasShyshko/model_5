'use strict';
const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass')(require('sass'));
const rename = require("gulp-rename");

sass.compiler = require('sass');

gulp.task('styles', () => {
  return gulp.src([
    './scss/*.scss',
    './global/scss//*.scss',
  ])
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .on('error', sass.logError)
    .pipe(rename({dirname: ''}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
  gulp.watch(['scss/*'], { ignoreInitial: false }, gulp.series(['styles']));
});
