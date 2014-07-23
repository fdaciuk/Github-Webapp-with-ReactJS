/** @jsx React.DOM */

define([
    'react',
    'components/SearchBar',
    'components/GithubAPIDataContainer'
], function( React, SearchBar,GithubAPIDataContainer ) {
    'use strict';

    var GithubContainer = function() {
        var $public = {};
        var $private = {};

        // ------------------------------

        $public.getInitialState = function getInitialState() {
            return {
                user: {},
                repos: []
            };
        };

        // ------------------------------

        $public.render = function render() {
            return (
                <div className="clearfix">
                    <SearchBar
                        onSearchUserSubmit={$private.onSearchUserSubmit.bind( this )}
                        onSearchReposSubmit={$private.onSearchReposSubmit.bind( this )} />

                    <GithubAPIDataContainer
                        userdata={this.state.user}
                        reposdata={this.state.repos}
                        className="ghapidata" />
                </div>
            );
        };

        // ------------------------------

        $private.onSearchUserSubmit = function onSearchUserSubmit( user ) {
            this.setState({ user: user });
        };

        // ------------------------------

        $private.onSearchReposSubmit = function onSearchReposSubmit( repos ) {
            this.setState({ repos: repos });
        };

        // ------------------------------

        return $public;
    };

    return React.createClass( GithubContainer() );
});