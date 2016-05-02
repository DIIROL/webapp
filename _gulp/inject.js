/**
 * Created by Dirol on 07.01.2016.
 */
var wiredep = require('wiredep').stream,
    gulp    = require('gulp'),
    inject  = require('gulp-inject'),
    plumber = require('gulp-plumber');
CONST       = require('../_gulp/constants');


var _ = require('lodash');


// common options for all injects
var options = {
    empty        : false,
    addRootSlash : false,
    relative     : false
    //ignorePath  : '.tmp'
};



/*  # Javascript injection
====================================================*/
gulp.task('inject:Js', function () {
    console.log('_______ inject:js _______');

    var js = gulp.src(CONST.SRC.js, { read : false });
    return gulp.src(CONST.SRC.index)
               .pipe(plumber(function (err) {
                   console.log(err);
               }))
               .pipe(wiredep({ devDependencies : false }))
               // Custom scripts from assets/ja
               .pipe(inject(js, { relative : false }))
               // To the same
               .pipe(gulp.dest(CONST.PATH.app));
});



/*  # Css injection
====================================================*/
gulp.task('inject:Css', function () {
    console.log('_______ inject:Css _______');

    var css = gulp.src(CONST.SRC.css, { read : false });
    return gulp.src(CONST.SRC.index)
               .pipe(inject(css, { relative : false }))
               // To src/index.html
               .pipe(gulp.dest(CONST.PATH.app))
});




/*  # Scss injection
====================================================*/
gulp.task('inject:Sass', function () {
    console.log('_______ inject:Sass _______');

    var sass      = gulp.src(CONST.SRC.sass, { read : false });
    var sassMixin = gulp.src(CONST.PATH.styles + '/mixins/*.scss', { read : false });

    return gulp.src(CONST.SRC.mainSass)
               .pipe(inject(sass, { empty : true, relative : true }))
               .pipe(inject(sassMixin, { empty : true, relative : true, starttag : '/* inject:mixin:scss */' }))
               // Return to the same place (it's same file)
               .pipe(gulp.dest(CONST.PATH.styles))
});




//TODO: не красиво
/**
 * Inject into karma.config
 * Bower dependency should inject manually
 */
gulp.task('inject:Karma', function () {
    var jsAngular = gulp.src(CONST.PATH.src + '/app/**/*.js');
    var unitTests = gulp.src('test/unit/**/*.js');
    return gulp.src('test/karma.conf.js')
               .pipe(wiredep({ devDependencies : false, ignorePath : '../' }))
               .pipe(inject(jsAngular.pipe(angularFileSort()), {
                   starttag  : '//custom:angular:js',
                   endtag   : '//endcustom',
                   transform : function (filepath, file, i, length) {
                       return '  "' + filepath.slice(1) + '"' + (i + 1 < length ? ',' : ',');
                   }
               }))
               .pipe(inject(unitTests, {
                   starttag  : '//unit:tests',
                   endtag   : '//endunit',
                   transform : function (filepath, file, i, length) {
                       return '  "' + filepath.slice(1) + '"' + (i + 1 < length ? ',' : ',');
                   }
               }))
               .pipe(gulp.dest('test'))
});



