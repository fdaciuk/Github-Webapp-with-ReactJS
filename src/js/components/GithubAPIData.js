/** @jsx React.DOM */
define([ 'react' ], function( React ) {
    var GithubAPIData = function() {
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

    return React.createClass( GithubAPIData() );
});