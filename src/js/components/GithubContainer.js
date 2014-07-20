/** @jsx React.DOM */

define([
    'react',
    'components/SearchBar',
    'components/GithubAPIData'
], function( React, SearchBar,GithubAPIData ) {
    'use strict';

    var GithubContainer = function() {
        var $public = {};

        // ------------------------------

        $public.render = function render() {
            return (
                <div class="clearfix">
                    <SearchBar />
                    <GithubAPIData className="ghapidata" />
                </div>
            );
        };

        // ------------------------------

        return $public;
    };

    return React.createClass( GithubContainer() );
});