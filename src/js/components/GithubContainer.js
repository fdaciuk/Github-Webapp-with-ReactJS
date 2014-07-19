/** @jsx React.DOM */

define([
    'react',
    'components/SearchBar'
], function( React, SearchBar ) {
    'use strict';

    var GithubContainer = function() {
        var $public = {};

        // ------------------------------

        $public.render = function render() {
            return (
                <div>
                    <input type="text" name="ghusername" id="ghusername" placeholder="Github username..." />
                    <a href="#" id="ghsubmitbtn">Pull User Data</a>
                    <div id="ghapidata" class="clearfix"></div>
                </div>
            );
        };

        // ------------------------------

        return $public;
    };

    return React.createClass( GithubContainer() );
});