var BOWER = '/bower_components/';
requirejs.config({
    paths: {
        // Vendor libraries
        'backbone': BOWER + 'backbone/backbone',
        'underscore': BOWER + 'lodash/lodash',
        'jquery': BOWER + 'jquery/dist/jquery',
        'bootstrap': BOWER + 'bootstrap/dist/js/bootstrap',
        'marionette': BOWER + 'marionette/lib/backbone.marionette',

        // Require.js plugins
        'text': BOWER + 'requirejs-text/text'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery']
        }
    }
});

require(['jquery', 'AppView'], function ($, AppView) {
    $(function () {
        console.log('Loaded with Require.js');
        AppView.start();
    });
});
