// Filename: app.js
define([
    'jquery',
    'underscore',
    'backbone',
    'router',
    'leaflet'
], function ($, _, Backbone, Router, L) {
    var initialize = function () {
        // Pass in our Router module and call it's initialize function
        Router.initialize();
    }
    return {
        initialize: initialize
    };
});
