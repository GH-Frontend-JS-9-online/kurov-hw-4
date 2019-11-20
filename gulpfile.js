'use strict';
var gulp = require('gulp'),
	watch = require('gulp-watch'),
	sass = require('gulp-sass'),
	rimRaf = require('rimraf'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload;

var path = {
	build: {
		html: 'build/',
		js: 'build/js/',
		css: 'build/css/'
	},
	src: {
		html: 'src/*.html',
		js: 'src/js/main.js',
		css: 'src/style/*.*'		
	},
	clean: '.build'
};

gulp.task("webserver", function (){
	browserSync({
		server: {
			baseDir: "./build"
		},
		host: 'localhost',
		port: 5000,
		tunnel: true
	});
});

gulp.task('html:build', function(){
	gulp.src(path.src.html)
	//.pipe(rigger())
	.pipe(gulp.dest(path.build.html))
	.pipe(reload({stream:true}))
});