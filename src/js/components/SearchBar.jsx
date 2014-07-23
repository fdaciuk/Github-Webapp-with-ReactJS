/** @jsx React.DOM */

define([
    'react',
    'modules/Ajax'
], function( React, Ajax ) {
    'use strict';

    var SearchBar = function() {
        var $public = {};
        var $private = {};

        // ------------------------------

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

        // ------------------------------

        $private.clickHandle = function clickHandle( e ) {
            var user = ( this.refs.username.getDOMNode().value || false );
            var ajaxUser = new Ajax();
            var ajaxRepos = new Ajax();

            if( ! user ) {
                console.log( 'Nothing found' );
                return this.props.onSearchUserSubmit({});
            }

            ajaxUser.get( 'https://api.github.com/users/' + user )
                .done( $private.requestSuccess.bind( this ) );

            ajaxRepos.get( 'https://api.github.com/users/' + this.refs.username.getDOMNode().value + '/repos' )
                .done( $private.requestReposSuccess.bind( this ) );
        };

        // ------------------------------

        $private.requestSuccess = function requestSuccess( data, xhr ) {
            this.props.onSearchUserSubmit( data );
        };

        // ------------------------------

        $private.requestReposSuccess = function requestReposSuccess( data, xhr ) {
            this.props.onSearchReposSubmit( data );
        };

        // ------------------------------

        return $public;
    };

    return React.createClass( SearchBar() );
});