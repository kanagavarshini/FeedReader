var gulp = require('gulp');
var jasmineBrowser = require('gulp-jasmine-browser');
gulp.task('tests', function() {
            gulp.src('jasmine/spec/feedreader.js')
            .pipe(jasmineBrowser.specRunner())
            .pipe(jasmineBrowser.server({port:8888}));
          });