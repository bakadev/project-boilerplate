// Dependencies
var autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    del = require('del'),
    gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    plumber = require('gulp-plumber'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    images = require('gulp-imagemin');

// Paths
var scssSrc = 'assets/scss/*.scss',
    cssSrc = 'assets/css/*.css',
    jsSrc = 'assets/js/*.js',
    vendorSrc = 'assets/js/vendors/*.js',
    styleDest = 'css/',
    scriptDest = 'js/';

// Compiles all SASS files
gulp.task('scss', function() {
    gulp.src(scssSrc)
        .pipe(plumber())
        .pipe(sass({
            style: 'compressed'
        }))
        .pipe(rename({
            basename: 'styles',
            suffix: '.min'
          }))
        .pipe(gulp.dest(styleDest));
});

// Concat and Compress .js files
gulp.task('scripts', function() {
    gulp.src(jsSrc)
        .pipe(plumber())
        .pipe(concat('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(scriptDest));
});

// Concat and Compress Vendor .js files
gulp.task('vendors', function() {
    gulp.src(vendorSrc)
        .pipe(plumber())
        .pipe(concat('vendors.js'))
        .pipe(uglify())
        .pipe(gulp.dest(scriptDest));
});

// Default Task
gulp.task('default', ['scss', 'scripts']);

// Watch for changes
gulp.task('watch', function(){
    gulp.watch(scssSrc,['scss']);
    gulp.watch(jsSrc,['scripts']);
});