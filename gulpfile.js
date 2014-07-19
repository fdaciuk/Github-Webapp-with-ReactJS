var gulp    = require( 'gulp' );
var react   = require( 'gulp-react' );
var notify  = require( 'gulp-notify' );
var changed = require( 'gulp-changed' );
var uglify  = require( 'gulp-uglify' );
var plumber = require( 'gulp-plumber' );
var minifycss = require( 'gulp-minify-css' );

var SRC = './src/js/**/*.js';
var DEST = './public/js';
var SRC_CSS = './src/css/**/*.css';
var DEST_CSS = './public/css';

gulp.task( 'react', function() {
    gulp.src( SRC )
    .pipe( changed( DEST ) )
    .pipe(
        plumber({
            errorHandler: notify.onError( 'Error: <%= error.message %>' )
        })
    )
    .pipe( react() )
    .pipe( uglify() )
    .pipe( gulp.dest( DEST ) )
    .pipe( notify( 'File <%= file.relative %> compiled!' ) );
});

gulp.task( 'css', function() {
    gulp.src( SRC_CSS )
    .pipe( minifycss() )
    .pipe( gulp.dest( DEST_CSS ) )
    .pipe( notify( 'File <%= file.relative %> compiled!' ) );
});

gulp.task( 'default', function() {
    var watchers = [
        gulp.watch( SRC, [ 'react' ] ),
        gulp.watch( SRC_CSS, [ 'css' ] )
    ];

    watchers.forEach(function( watch ) {
        watch.on( 'change', function( e ) {
            // Get just filename
            var filename = e.path.split( '/' ).pop();
            var bars = '\n================================================';

            console.log( ( bars + '\nFile ' + filename + ' was ' + e.type + ', runing tasks...' + bars ).toUpperCase() );
        });
    });
});