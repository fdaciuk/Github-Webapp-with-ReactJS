'use strict';

var gulp = require( 'gulp' );
var react = require( 'gulp-react' );
var notify = require( 'gulp-notify' );
var changed = require( 'gulp-changed' );
var uglify = require( 'gulp-uglify' );
var plumber = require( 'gulp-plumber' );
var minifycss = require( 'gulp-minify-css' );
var jshint = require( 'gulp-jshint' );

var paths = {
  src_js : './src/js/**/*.{js,jsx}',
  dest_js : './public/js',
  src_css : './src/css/**/*.css',
  dest_css : './public/css'
};

gulp.task( 'react', function() {
  gulp.src( paths.src_js )
  .pipe(
    plumber({
      errorHandler: notify.onError( 'Error: <%= error.message %>' )
    })
  )
  .pipe( react() )
  .pipe( changed( paths.dest_js ) )
  .pipe( jshint() )
  .pipe( notify(function( file ) {
    if( file.jshint.success ) {
      return false;
    }

    var errors = file.jshint.results.map(function (data) {
      if (data.error) {
        return '(' + data.error.line + ':' + data.error.character + ') ' + data.error.reason;
      }
    }).join('\n');

    return file.relative + ' (' + file.jshint.results.length + ' errors)\n' + errors;
  }) )
  .pipe( uglify() )
  .pipe( gulp.dest( paths.dest_js ) )
  .pipe( notify( 'File <%= file.relative %> compiled!' ) );
});

gulp.task( 'css', function() {
  gulp.src( paths.src_css )
  .pipe( minifycss() )
  .pipe( gulp.dest( paths.dest_css ) )
  .pipe( notify( 'File <%= file.relative %> compiled!' ) );
});

gulp.task( 'watch', function() {
  var watchers = [
    gulp.watch( paths.src_js, [ 'react' ] ),
    gulp.watch( paths.src_css, [ 'css' ] )
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

gulp.task( 'default', [ 'watch' ] );