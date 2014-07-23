/** @jsx React.DOM */

define([
    'react',
    'components/GithubUserHeader',
    'components/GithubUserData',
    'components/GithubUserRepos'
], function( React, GithubUserHeader, GithubUserData, GithubUserRepos ) {
    'use strict';

    var GithubAPIDataContainer = function() {
        var $public = {};
        var $private = {};

        // ------------------------------

        $public.render = function render() {
            var user = this.props.userdata;
            var repos = this.props.reposdata;
            var renderHTML = $private.renderOk.call( this, user, repos );

            if( ! user.name ) {
                renderHTML = <h2>No User Info Found</h2>;
            }

            return (
                <div className={this.props.className}>
                    {renderHTML}
                </div>
            );
        };

        // ------------------------------

        $private.renderOk = function renderOk( user, repos ) {
            return (
                <div>
                    <GithubUserHeader userdata={user} />
                    <GithubUserData userdata={user} />
                    <GithubUserRepos reposdata={repos} />
                </div>
            );
        };

        // ------------------------------

        return $public;
    };

    return React.createClass( GithubAPIDataContainer() );
});