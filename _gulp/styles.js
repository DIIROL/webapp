/**
 * Created by Dirol on 07.01.2016.
 */



var sass       = require('gulp-sass'),
    gulp       = require('gulp'),
    CONST      = require('../_gulp/constants'),
    clean      = require('gulp-clean'),
    autoPrefix = require('gulp-autoprefixer');



/*  # Cleans css files
====================================================*/
gulp.task('clean:Css', function () {
    gulp.src(CONST.SRC.css).pipe(clean())
});



/*  # Compile Sass to css
====================================================*/
/**
 * Compile SASS to css
 */
gulp.task('styles', ['clean:Css'], function () {
    console.log('_______ sass _______');

    return gulp.src(CONST.SRC.mainSass)
               .pipe(sass({outputStyle : 'nested'})
                   .on('error', function (err) {
                       console.log(err);
                   }))
               .pipe(autoPrefix({browsers : ['last 10 versions', 'IE 9']}))
               // to .tmp/css
               .pipe(gulp.dest(CONST.PATH.css))
});



/*  # Copy fonts form bootstrap-sass
====================================================*/
gulp.task('fonts', function () {
    return gulp.src('./bower_components/bootstrap-sass/assets/fonts/**/*.*')
               .pipe(gulp.dest(CONST.PATH.fonts))
});

