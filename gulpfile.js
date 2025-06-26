const gulp = require('gulp');
const less = require('gulp-less');
const {watch} = require("gulp");



exports.less = function () {
    console.log('1')
    return gulp.src('./css/src/*.less')
        .pipe(less())
        .pipe(gulp.dest('dist'))


};
exports.watch = function () {
    gulp.watch('./css/*.less', gulp.series('less'))

}