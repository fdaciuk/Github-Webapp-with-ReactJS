define(function() {
    'use strict';

    var Promise = function() {
        var $private = {};
        var $public = {};

        // ------------------------------

        $private.callbacks = {};

        // ------------------------------

        $public.done = function done( callback ) {

        };

        // ------------------------------

        $public.error = function error( callback ) {

        };

        // ------------------------------

        return $public;
    };

    return Promise;
});