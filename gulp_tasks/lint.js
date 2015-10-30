var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    chalk = require('chalk');

var lint = function(){
    console.log(chalk.cyan('Processing JavaScript files...'));

    gulp.src(['./app/**/*.js', '!./app/app.js', '!./app/app.min.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
};

module.exports = lint;