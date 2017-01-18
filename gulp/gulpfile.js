/**
 * Created by Administrator on 2017/1/13.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('copy',function () {
    gulp.src('src/index.html').pipe(gulp.dest('dist')).pipe(connect.reload());
});
gulp.task('copy-img',function () {
    gulp.src('src/images/*.jpg').pipe(gulp.dest('dist/images'));
});
gulp.task('copy-all',function () {
    gulp.src('src/images/**/*.jpg').pipe(gulp.dest('dist/images'));
});
gulp.task('copy-all-jpg-png',function () {
    gulp.src('src/images/**/*.{jpg,png}').pipe(gulp.dest('dist/images'));
});
gulp.task('copy-some',function () {
    gulp.src(['src/images/**/*.jpg','!src/images/open1.jpg']).pipe(gulp.dest('dist/images'));
});
gulp.task('copy-some-jpg',function () {
    gulp.src(['src/images/**/*.jpg','!src/images/open*.jpg']).pipe(gulp.dest('dist/images'));
});
gulp.task('sass',function () {
    gulp.src('src/sass/style.scss').pipe(sass()).pipe(gulp.dest('dist/css')).pipe(connect.reload());
});

gulp.task('watch',function () {
    gulp.watch('src/index.html',['copy']);
    gulp.watch('src/sass/style.scss',['sass'])
});

gulp.task('sever',function () {
    connect.server({
        root:'dist',/*文件夹名 找index.html*/
        port:8888,
        livereload:true
    });
});
gulp.task('watch-html',['sever','watch']);
gulp.task('concat',function () {
    gulp.src(['src/js/test1.js','src/js/test2.js'])
        .pipe(concat('main.js')).pipe(gulp.dest('dist/js'))/*合并两个文件*/
        .pipe(uglify()).pipe(rename('main.min.js')).pipe(gulp.dest('dist/js'));
});




