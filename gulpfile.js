const elixir = require('laravel-elixir');

require('laravel-elixir-vue-2');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(mix => {
    mix.sass('app.scss')
       .webpack('app.js');
});

var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var prettyError = require('gulp-prettyerror');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var browserSync = require('browser-sync').create();

var autoprefixerOptions = {
  browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};

gulp.task('lint', function() {
  return gulp.src('public/js/main.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

// gulp.task('pack-js', function () {  
//   return gulp.src(['public/js/jquery.js', 'public/js/*.js'])
//     .pipe(prettyError())
//     .pipe(concat('app.js'))
//     .pipe(minify({
//       ext: {
//         min:'.js'
//       },
//       noSource: true
//     }))
//     .pipe(gulp.dest('public/js/'));
// });

gulp.task('sass', function () {
  return gulp.src('resources/assets/sass/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest('public/css/'))
    .pipe(browserSync.stream());
});

gulp.task('sync', function() {
    browserSync.init({
        server: "./"
    });
});

gulp.task('php-sync', function() {
  browserSync.init({
    proxy: "http://localhost:1337/"
  });
});

gulp.task('watch', function () {
  gulp.watch('public/js/main.js', ['lint']);
  // gulp.watch('public/js/*.js', ['pack-js']);
  gulp.watch('resources/assets/sass/**/*.scss', ['sass']);
  gulp.watch('resources/views/*.php').on('change', browserSync.reload);
});

gulp.task('default', ['php-sync', 'watch']);
