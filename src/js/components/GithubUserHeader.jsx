/** @jsx React.DOM */

define([ 'react' ], function( React ) {
  'use strict';

  function GithubUserHeader() {
    var $public = {};

    $public.render = function render() {
      var user = this.props.userdata;

      return (
        <h2>
          {user.name}
          <span className="smallname">
            (@<a href={user.html_url} target="_blank">{user.login}</a>)
          </span>
        </h2>
      );
    };

    return $public;
  }

  return React.createClass( GithubUserHeader() );
});