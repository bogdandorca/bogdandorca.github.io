var gulp = require('gulp'),
    inject = require('gulp-inject'),
    bowerFiles = require('main-bower-files'),
    chalk = require('chalk'),
    argv = require('yargs').argv;

// Template Variables

var templateFolder = '',
    file = gulp.src('./index.html');

// Bower injector
var bowerSources = gulp.src(bowerFiles(), {read: false, base: ''}),
    bowerConfig = {
        name: 'bower'
    };

// CSS Injector
var cssFile,
    cssLocation = './assets/styles/';
argv.production ? cssFile = cssLocation + 'global.min.css' : cssFile = cssLocation + 'global.css';
var cssSources = gulp.src(cssFile, {read: false});

// JS Injector
var jsFile,
    jsLocation = './app/';
argv.production ? jsFile = jsLocation + 'app.min.js' : jsFile = jsLocation + 'app.js';
var jsSources = gulp.src(jsFile, {read: false, relative: true});

var injector = function(){
    console.log(chalk.cyan('Injecting dependencies...'));

    file
        .pipe(inject(cssSources))
        .pipe(inject(bowerSources, bowerConfig))
        .pipe(gulp.dest(templateFolder));
    file
        .pipe(inject(jsSources))
        .pipe(inject(bowerSources, bowerConfig))
        .pipe(gulp.dest(templateFolder));

    console.log(chalk.green('Dependencies injected'));
};

module.exports = injector;