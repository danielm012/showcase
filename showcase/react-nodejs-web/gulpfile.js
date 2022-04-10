var gulp = require('gulp');
var liveServer = require('gulp-live-server');
var browserSync = require('browser-sync').create();
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

gulp.task('live-server', function(done) {
    var server = new liveServer('server/main.js');
    server.start();
    done();
});

gulp.task('bundle', function(done) {
    return browserify({
        entries: 'app/main.jsx',
        debug: true
    })
    .transform(reactify)
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./.tmp'));
    done();
});

gulp.task('serve', function() {
    var server = new liveServer('server/main.js');
    server.start();
    browserSync.init(null, {
        proxy:"http://localhost:7777",
        port: 9001
});
});


gulp.task('serve2', gulp.series(['bundle', 'live-server'], function(done) {
    browserSync.init(null, {
        proxy:"http://localhost:7777",
        port: 9001
});
done()
}));
