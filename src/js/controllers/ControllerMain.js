/** @jsx React.DOM */

define([
    'react',
    'components/GithubContainer'
], function( React, GithubContainer ) {
    React.renderComponent(
        <GithubContainer />,
        document.querySelector( '.content' )
    );
});