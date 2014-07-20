/** @jsx React.DOM */

define([
    'react',
    'components/GithubContainer'
], function( React, GithubContainer ) {
    'use strict';

    React.renderComponent(
        <GithubContainer />,
        document.querySelector( '.content' )
    );
});