/**
 * Created by Dirol on 02.01.2016.
 *
 * It's could be ugly but i think it's useful
 */


var _ = (function () {
    var self = {
        app        : 'app',
        tmp        : 'app/.tmp',

        css        : function () {
            return this.tmp + '/css'
        },
        components : function () {
            return this.app + '/components'
        },
        assets     : function () {
            return this.app + '/assets'
        },
        styles     : function () {
            return this.assets() + '/styles'
        },
        js         : function () {
            return this.assets() + '/js'
        },
        fonts      : function () {
            return this.assets() + '/fonts'
        }
    };
    return {
        app        : self.app,
        tmp        : self.tmp,
        css        : self.css(),
        components : self.components(),
        assets     : self.assets(),
        styles     : self.styles(),
        js         : self.js(),
        fonts      : self.fonts()
    }
})();


module.exports.PATH = {
    tmp        : _.tmp,
    app        : _.app,
    css        : _.css,
    assets     : _.assets,
    styles     : _.styles,
    js         : _.js,
    fonts      : _.fonts,
    components : _.components
};

module.exports.SRC = {
    sass      : [_.styles + '/*.scss', '!' + _.styles + '/main.scss', _.components + '/**/*.scss'],
    css       : [_.css + '/*.css'],
    js        : [_.js + '/*.js'],
    mainSass  : _.styles + '/main.scss',
    indexHtml : _.app + '/index.html'
};

