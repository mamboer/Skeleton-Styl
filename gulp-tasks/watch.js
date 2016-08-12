module.exports = function() {

    var gulp = this.gulp,
        dirs = this.opts.dirs,
        cfg = this.opts.cfg,
        $ = this.opts.$;

    return gulp.watch(dirs.files, ['stylus']);
};
