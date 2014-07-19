;(function() {
    requirejs.config({
        baseUrl: 'public/js/',
        paths : {
            react          : 'vendor/react.min',
            controllers    : 'controllers/',
            models         : 'models/',
            modules        : 'modules/',
            components     : 'components/'
        }
    });

    requirejs([ 'react' ], function() {
        requirejs([ 'controllers/ControllerMain' ]);
    });
})();