define(function() {
    'use strict';

    var Ajax = function() {
        var $public = {};
        var $private = {};

        // ------------------------------

        $private.callbacks = {};
        $private.methods = {};

        // ------------------------------

        $public.get = function( url ) {
            return $private.XHRConnection( 'GET', url );
        };

        // ------------------------------

        $public.post = function( url, data ) {
            return $private.XHRConnection( 'POST', url, data );
        };

        // ------------------------------

        $public.put = function( url, data ) {
            return $private.XHRConnection( 'PUT', url, data );
        };

        // ------------------------------

        $public[ 'delete' ] = function( url ) {
            return $private.XHRConnection( 'DELETE', url );
        };

        // ------------------------------

        $private.XHRConnection = function XHRConnection( type, url, data ) {
            var XHR = new XMLHttpRequest();

            XHR.open( type, url, true );
            XHR.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded' );
            XHR.addEventListener( 'readystatechange', $private.readyStateChange, false );
            XHR.send( data );

            return $private.promises();
        };

        // ------------------------------

        $private.readyStateChange = function readyStateChange() {
            var XHR = this;

            if( XHR.readyState === 4 ) {
                if( XHR.status >= 200 && XHR.status < 300 ) {
                    $private.methods.done.apply( $private.methods, $private.parseResponse( XHR ) );
                }
                else {
                    $private.methods.error.apply( $private.methods, $private.parseResponse( XHR ) );
                }
            }
        };

        // ------------------------------

        $private.promises = function promises() {
            var callbacks = $private.callbacks;

            $private.methods = {
                done  : function() {},
                error : function() {}
            };

            callbacks.done = function( callback ) {
                $private.methods.done = callback;
                return callbacks;
            };

            callbacks.error = function( callback ) {
                $private.methods.error = callback;
                return callbacks;
            };

            return callbacks;
        };

        // ------------------------------

        $private.parseResponse = function parseResponse( xhr ) {
            var result;

            try {
                result = JSON.parse( xhr.responseText );
            }
            catch( e ) {
                result = xhr.responseText;
            }

            return [ result, xhr ];
        };

        // ------------------------------

        return $public;
    };

    return Ajax;
});