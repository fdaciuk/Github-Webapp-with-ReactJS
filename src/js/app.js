;(function( window ) {
    'use strict';

    var getLocation = function getLocation() {
        var url = window.location.href;
        if( url.indexOf( 'index.html' ) > -1 ) {
            return url.split( '/index.html' ).join( '' );
        }

        return '.';
    };

    requirejs.config({
        baseUrl: getLocation() + '/public/js',
        paths : {
            react          : 'vendor/react.min',
            modules        : 'modules',
            components     : 'components'
        }
    });

    requirejs([ 'react' ], function() {
        requirejs([ 'components/MainComponent' ]);
    });
})( window );