/**
 * Created by Dirol on 07.01.2016.
 */

var browserSync = require('browser-sync').create(),
    gulp        = require('gulp'),
    CONST       = require('../_gulp/constants');


/*  # Server settings
====================================================*/
gulp.task('server', function () {
    browserSync.init({
        startPath: '/',
        server   : {
            baseDir: CONST.PATH.app,
            routes : {
                '/bower_components': 'bower_components',
                '/test'            : 'test',
                '/src'             : 'src'
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
