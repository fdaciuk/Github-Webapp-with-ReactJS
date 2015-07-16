/** @jsx React.DOM */

define([ 'react' ], function( React ) {
  'use strict';

  function GithubUserData() {
    var $public = {};

    $public.render = function render() {
      var user = this.props.userdata;

      return (
        <div className="ghcontent">
          <div className="avi">
            <a href={user.html_url} target="_blank">
              <img src={user.avatar_url} width="80" height="80" alt={user.name} />
            </a>
          </div>

          <p>
            Followers: {user.followers} - Following: {user.following}
            <br />
            Repos: {user.public_repos}
          </p>
        </div>
      );
    };

    return $public;
  }

  return React.createClass( GithubUserData() );
});