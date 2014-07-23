/** @jsx React.DOM */

define([ 'react' ], function( React ) {
    'use strict';

    var GithubUserRepos = function() {
        var $public = {};
        var $private = {};

        // ------------------------------

        $public.render = function render() {
            var repos = this.props.reposdata;
            var reposNode;

            if( ! repos ) {
                return null;
            }

            reposNode = $private.getRepos( repos );

            return (
                <div className="repolist clearfix">
                    <p><strong>Repos list:</strong></p>
                    <ul>{reposNode}</ul>
                </div>
            );
        };

        // ------------------------------

        $private.getRepos = function getRepos( repos ) {
            return repos.map(function( repo ) {
                return ( <li><a href={repo.html_url} target="_blank">{repo.name}</a></li> );
            });
        };

        // ------------------------------

        return $public;
    };

    return React.createClass( GithubUserRepos() );
});