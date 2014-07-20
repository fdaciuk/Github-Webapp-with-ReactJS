/** @jsx React.DOM */

define([
    'react',
    'components/SearchBar',
    'components/GithubAPIDataContainer'
], function( React, SearchBar,GithubAPIDataContainer ) {
    'use strict';

    var GithubContainer = function() {
        var $public = {};

        // ------------------------------

        $public.render = function render() {
            return (
                <div className="clearfix">
                    <SearchBar />
                    <GithubAPIDataContainer className="ghapidata" />
                </div>
            );
        };

        // ------------------------------

        return $public;
    };

    return React.createClass( GithubContainer() );
});