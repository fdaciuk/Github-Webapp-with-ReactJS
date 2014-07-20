/** @jsx React.DOM */

define([ 'react' ], function( React ) {
    'use strict';

    var SearchBar = function() {
        var $public = {};

        // ------------------------------

        $public.render = function render() {
            return (
                <form>
                    <input type="text" name="ghusername" id="ghusername" placeholder="Github username..." className="ghusername" />
                    <button className="ghsubmitbtn">Pull User Data</button>
                </form>
            );
        };

        // ------------------------------

        return $public;
    };

    return React.createClass( SearchBar() );
});