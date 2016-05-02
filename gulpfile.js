var gulp     = require('gulp'),
    gulpSync = require('gulp-sync')(gulp);

/*  # Inject
====================================================*/
require('./_gulp/inject');

/*  # preprocessors
====================================================*/
require('./_gulp/preprocessor');

/*  # Server
====================================================*/
require('./_gulp/server');

/*  # Watchers
====================================================*/
require('./_gulp/watcher');



/*  start server temporary builds
---------------------------------*/
gulp.task('server:Run', function () {
    gulp.start(gulpSync.sync([ 'jade', 'inject:Sass', 'sass', 'inject:Css', 'inject:Js', 'server', 'watch' ]));
});



