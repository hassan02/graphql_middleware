var gulp = require('gulp'),
    mocha = require('gulp-mocha');

gulp.task('watch', function() {
    gulp.watch(['server.js', 'queries/*.js', 'schema/*.js', 'types/*.js', 'tests/*.js', 'tests/**/*.js'], ['test'])
});

gulp.task('test', function() {
    return gulp.src(['tests/*.js', 'tests/**/*.js'])
        .pipe(mocha({}));
})