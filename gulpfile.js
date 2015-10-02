
var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    babelify = require('babelify'),
    buffer = require('vinyl-buffer'),
    source = require('vinyl-source-stream'),

    watch = require('gulp-watch'),
    browserSync = require('browser-sync'),

    concat = require('gulp-concat'),
    compass = require('gulp-compass'),

    minify = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    del = require('del'),

    rename = require('gulp-rename'),
    plumber = require('gulp-plumber'),
    gutil = require('gulp-util'),
    debug = require('gulp-debug');

var onError = function (err) {  
  gutil.beep();
  console.log(err);
};

gulp.task('build-dev', ['clean', 'js-dev', 'styles', 'bootstrap-fonts']);

gulp.task('build-style', ['clean-scss'], function(){
  gulp.start('styles');
});

gulp.task('clean', function(){
  del('./dest/**/*.*');
  del('./app/assets/scss/*.*');
});

gulp.task('clean-scss', function(){
  del('./dest/**/*.css');
  del('./app/assets/scss/*.*');
});

gulp.task('js-dev', function() {
  return gulp.src(['./app/app.js'])
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(browserify({
      transform: [babelify]
    }))
    .pipe(rename('app.js'))
    .pipe(gulp.dest('./dest/js/'));
});

gulp.task('styles', [], function() {
  return gulp.src(['app/**/*.scss'])
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(concat('app.scss'))
    .pipe(gulp.dest('dest/scss'))
    .pipe(compass({
      css: './dest/css',
      sass: './dest/scss'
    }))
    .pipe(gulp.dest('./dest/css'));
});

gulp.task('bootstrap-fonts', function() {
  return gulp.src(['assets/bootstrap/fonts/*.*'])
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(gulp.dest('dest/assets/fonts/'));
});

gulp.task('reload', function(){
  browserSync.reload();
});

gulp.task('watch', function(){
  // Watch .scss and js files
  gulp.watch(['app/**/*.scss','!app/assets/**/*.scss'], ['build-style']);
  gulp.watch(['app/**/*.js'], ['js-dev']); 

  // Watching changed files
  gulp.watch(['dest/**/*.css','dest/**/*.js'],['reload']);
});

// browser-sync task for starting the server.
gulp.task('browser-sync', ['watch'], function() {
  browserSync({
    open: true,
    port: 3000,
    server: {
        baseDir: "./"
       // middleware: [proxy(proxyOptions)]
    }
  });
});

gulp.task('default', ['build-dev'], function(){
  gulp.start('browser-sync');
});
