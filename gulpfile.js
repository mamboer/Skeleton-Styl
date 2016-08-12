'use strict';

var gulp    = require('gulp'),
    $       = require('gulp-load-plugins')(),
    fs      = require('fs'),
	dirs = {
		files: 'src/**/*.styl',
		entries: ['src/skeleton.styl', 'src/skeleton.lite.styl'],
		dist: 'dist',
		src: 'src'
	};

require('gulp-task-loader')({
	$: $,
	dirs: dirs
});

gulp.task('default', ['watch']);

