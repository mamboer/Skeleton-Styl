module.exports = function() {
    var gulp = this.gulp,
        dirs = this.opts.dirs,
        cfg = this.opts.cfg,
        $ = this.opts.$;

    return gulp.src(dirs.entries)
        .pipe($.sourcemaps.init())
        .pipe($.stylus({
            compress: true
        }))
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest(dirs.dist));
};
