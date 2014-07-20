/** @jsx React.DOM */

define([ 'react' ], function( React ) {
    'use strict';

    var GithubAPIDataContainer = function() {
        var $public = {};

        // ------------------------------

        $public.render = function render() {
            return (
                <div className={this.props.className}>

                </div>
            );
        };

        // ------------------------------

        return $public;
    };

    return React.createClass( GithubAPIDataContainer() );
});