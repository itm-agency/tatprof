const   gulp            = require('gulp'),
        watch           = require('gulp-watch'),
        concat          = require('gulp-concat'),
        sass            = require('gulp-sass'),
        uglify          = require('gulp-uglify'),
        cssmin          = require('gulp-cssmin'),
        autoprefixer    = require('gulp-autoprefixer'),
        sourcemaps      = require('gulp-sourcemaps'),
        importCss       = require('gulp-import-css'),
        injectSvg       = require('gulp-inject-svg'),
        injectSvgOptions = { base: '/' },
        browserSync     = require('browser-sync').create();

const   enableSourceMaps = ['--sourcemaps', '-s', '--development', '-dev', '-d'].some(item => process.argv.includes(item));

/**
 * Browser Sync
 */
gulp.task('serve', function() {
    browserSync.init({
        server: "./"
    });
    gulp.watch(
        [
            'assets/scss/**/*.scss'
        ], gulp.parallel('css'));

    gulp.watch(
        [
            'assets/js/src/**/*.js',
            'assets/js/script/**/*.js',
            'assets/js/pages/**/*.js'
        ], gulp.parallel('js'));

    gulp.watch(
        [
            "./*.html"
        ]).on('change', browserSync.reload);
});

/**
 * Compile CSS
 */
gulp.task('css', function() {
    return gulp.src('./assets/scss/general.scss')
        .pipe(sourcemaps.init())
        .pipe(importCss())
        .pipe(sass())
        .pipe(autoprefixer({
            overrideBrowserslist:  ['last 2 versions'],
            cascade: false
        }))
        .pipe(cssmin())
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest('./assets/css/'))
        .pipe(browserSync.reload({stream: true}))
});

/**
 * Compile JS
 */
gulp.task('js', function() {
    return gulp.src(
        [
            './assets/js/src/vendor/*.js',
            './assets/js/script/*.js',
            './assets/js/pages/*.js'
        ])
        .pipe(concat('bundle.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./assets/js/'))
        .pipe(browserSync.reload({stream: true}))

});

/**
 * SVG
 */
gulp.task('svg', function() {

    return gulp.src('./*.html')
        .pipe(injectSvg(injectSvgOptions))
        .pipe(gulp.dest('./'));

});

/**
 * Default
 */
gulp.task('default', gulp.series('serve'));