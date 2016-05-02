/**
 * Created by Dirol on 07.01.2016.
 */

var browserSync = require('browser-sync').create(),
    gulp        = require('gulp'),
    CONST       = require('../_gulp/constants');


/*  # Server settings
====================================================*/
gulp.task('server', function () {
    console.log('Server start');
    browserSync.init({
        startPath: '/',
        server   : {
            baseDir: CONST.PATH.tmp,
            routes : {
                '/bower_components': 'bower_components',
                '/test'            : 'test',
                '/src'             : 'src',
                '/app' : 'app'
            }
        },
        notify   : false
    });
});



/*  # Server reload
====================================================*/
gulp.task('server:Reload', function () {
    browserSync.reload();
});
