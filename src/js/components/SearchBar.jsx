/** @jsx React.DOM */

define([
  'react',
  'Ajax'
], function( React, Ajax ) {
    'use strict';

    function SearchBar() {
      var $public = {};
      var $private = {};

      $public.render = function render() {
        return (
          <div>
            <input type="text" placeholder="Github username" ref="username" className="ghusername" />
            <button
              className="ghsubmitbtn"
              onClick={$private.clickHandle.bind( this )}>
              Pull User Data
            </button>
          </div>
        );
      };

      $private.clickHandle = function clickHandle( e ) {
        var user = ( this.refs.username.getDOMNode().value || false );
        var ajaxUser = new Ajax();
        var ajaxRepos = new Ajax();

        if( ! user ) {
          return this.props.onSearchUserSubmit({});
        }

        ajaxUser.get( 'https://api.github.com/users/' + user )
          .done( $private.requestUserSuccess.bind( this ) );

        ajaxRepos.get( 'https://api.github.com/users/' + user + '/repos' )
          .done( $private.requestReposSuccess.bind( this ) );
      };

      $private.requestUserSuccess = function requestUserSuccess( data, xhr ) {
        this.props.onSearchUserSubmit( data );
      };

      $private.requestReposSuccess = function requestReposSuccess( data, xhr ) {
        this.props.onSearchReposSubmit( data );
      };

      return $public;
    }

    return React.createClass( SearchBar() );
});