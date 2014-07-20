/** @jsx React.DOM */

define([
    'react',
    'modules/Ajax'
], function( React, Ajax ) {
    'use strict';

    var SearchBar = function() {
        var $public = {};
        var $private = {};

        // ------------------------------

        $public.render = function render() {
            return (
                <div>
                    <input type="text" name="ghusername" placeholder="Github username..." className="ghusername" />
                    <button
                        className="ghsubmitbtn"
                        onClick={$private.clickHandle}>
                        Pull User Data
                    </button>
                </div>
            );
        };

        // ------------------------------

        $private.clickHandle = function clickHandle( e ) {
            console.log( 'click handle' );
            var getUserData = Ajax.get( 'https://api.github.com/users/fdaciuk' );

            getUserData
                .done( $private.requestSuccess )
                .error( $private.requestError );
        };

        // ------------------------------

        $private.requestSuccess = function requestSuccess( data, xhr ) {
            console.log( 'success:', data );
        };

        // ------------------------------

        $private.requestError = function requestError( data, xhr ) {
            console.log( 'error:', data );
        };

        // ------------------------------

        return $public;
    };

    return React.createClass( SearchBar() );
});