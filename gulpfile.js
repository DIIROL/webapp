
var gulp = require('gulp'),
    gulpSync = require('gulp-sync')(gulp);

/*  # Inject
====================================================*/
require('./_gulp/inject');

/*  # Styles (SCSS)
====================================================*/
require('./_gulp/styles');

/*  # Server
====================================================*/
require('./_gulp/server');

/*  # Watchers
====================================================*/
require('./_gulp/watcher');


/*===================================================================*\
    # Api tasks
\*===================================================================*/

/*  start server temporary builds
---------------------------------*/
gulp.task('server:Run', function () {
    gulp.start(gulpSync.sync(['inject:Sass', 'styles','inject:Css', 'inject:Js', 'server', 'watch']));
});



