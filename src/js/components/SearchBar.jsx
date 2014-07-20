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

        $private.clickHandle = function clickHandle( e ) {
            console.log( 'click handle' );
            Ajax.get( 'https://api.github.com/users/fdaciuk' )
                .done(function( data, xhr ) {
                    console.log( data );
                })
                .error(function( data, xhr ) {

                });
        };

        // ------------------------------

        $public.render = function render() {
            return (
                <div>
                    <input type="text" name="ghusername" id="ghusername" placeholder="Github username..." className="ghusername" />
                    <button
                        className="ghsubmitbtn"
                        onClick={$private.clickHandle}>
                        Pull User Data
                    </button>
                </div>
            );
        };

        // ------------------------------

        return $public;
    };

    return React.createClass( SearchBar() );
});