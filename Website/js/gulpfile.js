var gulp = require('gulp');
var watchify = require('gulp-watchify');
var less = require('gulp-less');
var configs = require('./gulpoptions');

gulp.task('app', watchify(function(watchify) {
    // Single entry point to browserify 
    return gulp.src( configs.app.entryPoint )
        .pipe(watchify({
          insertGlobals : true,
          debug : !gulp.env.production
        }))
        .pipe(gulp.dest( configs.app.destinationPoint ))
}));

// Build CSS
gulp.task('css', function(){
    return gulp.src( configs.css.entryPoint )
        .pipe(less())
        .pipe(gulp.dest( configs.css.destinationPoint ));
});

gulp.task('csswatch', function () {
    gulp.watch( configs.csswatch.entryPoint, ['css']);
});

gulp.task('default', [ 'app', 'csswatch' ] );














