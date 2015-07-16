/** @jsx React.DOM */

define([
  'react',
  'components/SearchBar',
  'components/GithubAPIDataContainer'
], function( React, SearchBar,GithubAPIDataContainer ) {
  'use strict';

  function GithubContainer() {
    var $public = {};
    var $private = {};

    $public.getInitialState = function getInitialState() {
      return {
        user: {},
        repos: []
      };
    };

    $public.render = function render() {
      return (
        <div className="clearfix">
          <SearchBar
            onSearchUserSubmit={$private.handleSearchUserSubmit.bind( this )}
            onSearchReposSubmit={$private.handleSearchReposSubmit.bind( this )} />

          <GithubAPIDataContainer
            userdata={this.state.user}
            reposdata={this.state.repos}
            className="ghapidata" />
        </div>
      );
    };

    $private.handleSearchUserSubmit = function handleSearchUserSubmit( user ) {
      this.setState({ user: user });
    };

    $private.handleSearchReposSubmit = function handleSearchReposSubmit( repos ) {
      this.setState({ repos: repos });
    };

    return $public;
  }

  return React.createClass( GithubContainer() );
});