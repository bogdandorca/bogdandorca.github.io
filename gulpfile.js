var gulp = require('gulp'),
    watch = require('gulp-watch'),
    chalk = require('chalk'),
    argv = require('yargs').argv;

// Personal modules
var clientScripts = require('./gulp_tasks/clientScripts.js'),
    lint = require('./gulp_tasks/lint.js'),
    specs = require('./gulp_tasks/specs.js'),
    styles = require('./gulp_tasks/styles.js'),
    injector = require('./gulp_tasks/injector.js'),
    clean = require('./gulp_tasks/clean.js');

gulp.task('default', ['clean', 'lint', 'clientScripts', 'styles', 'build'], function(){
    /*  Flags:
     none: Task automation for development (JSLinter, JSConcat, Sass, CSS-Prefixer), starts the server and livereload
     --production: Adds to the default suite: JS Uglify, JS Strip Debug, CSS Minify
     --browse: Opens the browser with the website
     */
    console.log(chalk.cyan('Getting ready for the environment...'));

    // Scripts
    watch(['./app/**/*.js', '!./app/app.js', '!./app/app.min.js'], lint);
    watch(['./app/**/*.js', '!./app/app.js', '!./app/app.min.js'], clientScripts);
    // Styles
    watch('./assets/styles/**/*.scss', styles);

    console.log(chalk.green('The environment is ready.'));
});

// Clean
gulp.task('clean', clean);
// Scripts
gulp.task('lint', lint);
gulp.task('clientScripts', clientScripts);
// Styles
gulp.task('styles', styles);
// Injector
gulp.task('build', injector);
// Test
gulp.task('test', specs);