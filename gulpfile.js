/**************************************
*
*   REQUIRE
*
***************************************/
gulp = require('gulp');

// Utilities
watch = require('gulp-watch');

// HTML
jade = require('gulp-jade');

// CSS
stylus = require('gulp-stylus');

// Optimization
imagemin = require('gulp-imagemin');
minify = require('gulp-minify');
uglify = require('gulp-uglify');

// Webserver
webserver = require('gulp-webserver');

/**************************************
*
*   PATHS
*
***************************************/
paths = {
    app:       'app',
    dist:      'dist',
    jade:      'app/views/*.jade',
    index:     'dist/*.html',
    stylus:    'app/static/styles/*.styl',
    css:       'dist/static/styles/',
    imageSrc:  'app/static/img/**/*',
    imageDist: 'dist/static/img/**/*',
    fontsSrc:  'app/static/fonts/**/*',
    fontsDist: 'dist/static/fonts/**/*'
}


/**************************************
*
*   TASKS
*
***************************************/

// Jade task
gulp.task('jade',function(){
    gulp.src(paths.jade)
        .pipe(jade({pretty: true}))
        .pipe(gulp.dest(paths.dist));
});


// Stylus task
gulp.task('stylus',function(){
    gulp.src(paths.stylus)
        .pipe(stylus())
        .pipe(gulp.dest(paths.css))
});



// Watch task
gulp.task('watch',function(){
    gulp.watch(paths.jade, ['jade']);
    gulp.watch(paths.stylus, ['stylus']);
});

gulp.task('webserver',function(){
    gulp.src(paths.dist)
        .pipe(webserver({
            livereload: true,
            port: 9000
        }));
});

// Default task
gulp.task('default',[
    'jade',
    'stylus',
    'webserver',
    'watch'
]);
