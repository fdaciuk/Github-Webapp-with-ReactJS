/** @jsx React.DOM */

define([ 'react' ], function( React ) {
    'use strict';

    var GithubAPIDataContainer = function() {
        var $public = {};

        // ------------------------------

        $public.render = function render() {
            return (
                <div className={this.props.className}>
                    <h2>
                        Fernando Daciuk
                        <span className="smallname">
                            (@<a href="https://github.com/fdaciuk" target="_blank">fdaciuk</a>)
                        </span>
                    </h2>

                    <div className="ghcontent">
                        <div className="avi">
                            <a href="https://github.com/fdaciuk" target="_blank">
                                <img src="https://avatars.githubusercontent.com/u/487669?" width="80" height="80" alt="fdaciuk" />
                            </a>
                        </div>

                        <p>
                            Followers: 73 - Following: 128
                            <br />
                            Repos: 59
                        </p>
                    </div>

                    <div className="repolist clearfix">
                        <p>
                            <strong>Repos list:</strong>
                        </p>

                        <ul>
                            <li>
                                <a href="https://github.com/fdaciuk/adm-zip" target="_blank">adm-zip</a>
                            </li>
                        </ul>
                    </div>
                </div>
            );
        };

        // ------------------------------

        return $public;
    };

    return React.createClass( GithubAPIDataContainer() );
});