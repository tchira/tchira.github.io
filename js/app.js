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
        window.onload = function () {
            $('#fun-but').on('click', function () {
                $('#map').empty();
                cartodb.createVis('map', 'https://blankearth.cartodb.com/api/v2/viz/3beee460-fe5a-11e5-b0a3-0e674067d321/viz.json');
            });
            $('#family-but').on('click', function () {
                $('#map').empty();
                cartodb.createVis('map', 'https://blankearth.cartodb.com/api/v2/viz/3beee460-fe5a-11e5-b0a3-0e674067d321/viz.json');
            });
            $('#parking-but').on('click', function () {
                $('#map').empty();
                cartodb.createVis('map', 'https://blankearth.cartodb.com/api/v2/viz/3c4307ac-fe64-11e5-a29a-0ecd1babdde5/viz.json');
            });

        }
    }
    return {
        initialize: initialize
    };
});
