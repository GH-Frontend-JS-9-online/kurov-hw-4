'use strict';
var gulp = require('gulp'),
	watch = require('gulp-watch'),
	preFixer = require('gulp-autoprefixer'),
	uglify = require('gulp-uglify'),
	rigger = require('gulp-rigger'),
	sass = require('gulp-sass'),
	sourceMap = require('gulp-soursemaps'),
	rimRaf = require('rimraf'),
	cssMin = ('gulp-minify-css'),
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
	watch: {
		html: 'src/*.html',
		js: 'src/js/main.js',
		style: 'src/style/*.*',
	},
	clean: './build'
};

gulp.task("webserver", function (){
	browserSync({
		server: {
			baseDir: "build"
		},
		host: 'localhost',
		port: 5000,
		tunnel: true
	});
});

gulp.task('html:build', function(){
	gulp.src(path.src.html)
	.pipe(rigger())
	.pipe(gulp.dest(path.build.html))
	.pipe(reload({stream:true}))
});

gulp.task('js:build', function(){
	gulp.src(path.src.js)
	.pipe(rigger())
	.pipe(soursemaps.init())
	.pipe(uglify())
	.pipe(sourcemaps.write())
	.pipe(gulp.dest(path.build.js))
	.pipe(reload({stream: true}));
});

gulp.task('style:build', function(){
	gulp.src(path.src.style)
	.pipe(sourcemaps.init())
	.pipe(saas())
	.pipe(prefixer())
	.pipe(cssmin())
	.pipe(sourcemaps.write())
	.pipe(gulp.dest(path.build.css))
	.pipe(reload({stream: true}));
});

gulp.task('build', [
	'html:build',
	'js:build',
	'style:build'
	]);

gulp.task('watch', function(){
	watch([path.watch.js], function (ev, callback) {
		gulp.start('js:build');
	});
	watch([path.watch.html], function(ev, callback){
		
	})
})