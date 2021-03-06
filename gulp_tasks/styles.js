var gulp = require('gulp'),
    minifyCss = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    chalk = require('chalk'),
    argv = require('yargs').argv, 
    sass = require('gulp-sass'),
    gulpif = require('gulp-if'),
    rev = require('gulp-rev');
    
    var parseStylesheets = function(){
        return sass().on('error', sass.logError);
    };
var filename;
argv.production ? filename = 'global.min.css' : filename = 'global.css';

var stylingFileLocation = './assets/styles/global.scss';

var styles = function(){
    console.log(chalk.cyan('Processing style files...'));

    gulp.src(stylingFileLocation)
        .pipe(parseStylesheets())
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(gulpif(argv.production, minifyCss()))
        //.pipe(rev())
        .pipe(gulpif(argv.production, rename(filename)))
        .pipe(gulp.dest('./assets/styles/'));

    console.log(chalk.green('Style files processed'));
};

module.exports = styles;