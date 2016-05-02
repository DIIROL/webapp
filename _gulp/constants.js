/**
 * Created by Dirol on 02.01.2016.
 *
 * It's could be ugly but i think it's useful
 */

const app        = 'app',
      tmp        = `${app}/.tmp`,
      css        = `${app}/.tmp/css`,
      components = `${app}/components`,
      assets     = `${app}/assets`,
      styles     = `${assets}/styles`,
      js         = `${assets}/js`,
      fonts      = `${assets}/fonts`,
      images     = `${assets}/images`;




module.exports.PATH = {
    tmp        : tmp,
    app        : app,
    css        : css,
    assets     : assets,
    styles     : styles,
    js         : js,
    fonts      : fonts,
    components : components
};

module.exports.SRC = {
    sass     : [ styles + '/*.scss', '!' + styles + '/main.scss', components + '/**/*.scss' ],
    css      : [ css + '/*.css' ],
    js       : [ js + '/*.js' ],
    mainSass : styles + '/main.scss',
    index    : app + '/index.jade',
    jade     : app + '/**/*.jade'
};

