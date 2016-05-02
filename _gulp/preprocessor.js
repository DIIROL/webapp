var jade       = require('gulp-jade'),
    gulp       = require('gulp'),
    sass       = require('gulp-sass'),
    clean      = require('gulp-clean'),
    autoPrefix = require('gulp-autoprefixer'),
    CONST      = require('./constants');


/*
    # Jade
\* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */

gulp.task('jade', function () {

    gulp.src(CONST.SRC.jade)
        .pipe(jade({ pretty : true }))
        .pipe(gulp.dest(CONST.PATH.tmp));
});

/*
    # Sass
\* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */


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
gulp.task('sass', [ 'clean:Css' ], function () {
    console.log('_______ sass _______');

    return gulp.src(CONST.SRC.mainSass)
               .pipe(sass({ outputStyle : 'nested' })
                   .on('error', function (err) {
                       console.log(err);
                       this.emit('end');
                   }))
               .pipe(autoPrefix({ browsers : [ 'last 10 versions', 'IE 9' ] }))
               // to .tmp/css
               .pipe(gulp.dest(CONST.PATH.css))
});



/*  # Copy fonts form bootstrap-sass
====================================================*/
gulp.task('fonts', function () {
    return gulp.src('./bower_components/bootstrap-sass/assets/fonts/**/*.*')
               .pipe(gulp.dest(CONST.PATH.fonts))
});

