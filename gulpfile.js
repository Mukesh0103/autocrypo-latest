const { src, dest, series, watch, parallel } = require('gulp');
const del = require('del');
const connect = require('gulp-connect');
const minifyCSS = require('gulp-csso');
const rename = require('gulp-rename');
const sourceMaps = require('gulp-sourcemaps')

const jsPaths = [
    'src/js/**.js'
];

const imagePaths = [
    'src/images/**'
];

const cssPaths = [
    'src/css/**.css'
];

function clean() {
    return del('dist/**');
}

function copyHtml() {
    return src('src/**.html')
        .pipe(dest('dist'))
        .pipe(connect.reload());
}

function copyJs() {
    return src(jsPaths)
        .pipe(dest('dist/js'))
        .pipe(connect.reload());
}

function copyImages() {
    return src(imagePaths)
        .pipe(dest('dist/images'));
}

function cssMinification() {
    return src(cssPaths)
        .pipe(sourceMaps.init())
        .pipe(minifyCSS())
        .pipe(rename({ extname: '.min.css' }))
        .pipe(sourceMaps.write())
        .pipe(dest('dist/css'))
        .pipe(connect.reload());
}

function watchFiles() {
    watch('src/**.html', { delay: 500 }, copyHtml)
    watch(cssPaths, { delay: 500 }, cssMinification)
    watch(jsPaths, { delay: 500 }, copyJs)
    watch(imagePaths, { delay: 500 }, copyImages)
}

function server() {
    connect.server({
        root: 'dist',
        livereload: true
    });
}

exports.default = series(clean, parallel(copyHtml, copyJs, copyImages, cssMinification), parallel(server, watchFiles));