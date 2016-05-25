var gulp = require('gulp');
var runSequence = require('run-sequence');
var uglify = require('gulp-uglify');
var stripDebug = require('gulp-strip-debug');
var cssnano = require('gulp-cssnano');
var eslint = require('gulp-eslint');
var rename = require("gulp-rename");
var karmaServer = require('karma').Server;

var STATIC = 'source';
var RELEASE = 'release';

gulp.task('default', function() {
	runSequence(
    'test',
    'lint',
    'ugifyJs',
    function (error) {
        if (error) {
            console.log(error.message);
        } else {
            console.log('RELEASE FINISHED SUCCESSFULLY');
        }
    });	
});

gulp.task('lint', function() {
    return gulp.src(['index.js']).pipe(eslint({
    extends: "eslint:recommended",
    rules:{
        'no-console':0
    },
    envs: [
        'browser'
    ]
  }))
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task('test', function (done) {
    new karmaServer({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});

gulp.task('ugifyJs', function() {
	
	var paths = [
		"source/*.js"
	];
	
	gulp.src(paths,{base:STATIC})
		.pipe(uglify())
        .pipe(stripDebug())
        .pipe(rename('rssjs.min.js'))
		.pipe(gulp.dest(RELEASE));
});

//gulp.watch('source/*.js', ['test','lint']);