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

        var visOptions = {
            zoom: 12,
            scrollwheel: true,
            search : false,
            share: false,
            center:[48.1441,17.1462]
        };
       $('.vis-control').on('click', function(event){
            $('.active').not($(this)).removeClass('active');
            $(this).toggleClass('active');
            event.stopPropagation();
        });
        cartodb.createVis('map', 'https://blankearth.cartodb.com/api/v2/viz/3beee460-fe5a-11e5-b0a3-0e674067d321/viz.json',visOptions);
        window.onload = function () {
            $('#fun-but').on('click', function () {
                $('#map').empty();
                cartodb.createVis('map', 'https://blankearth.cartodb.com/api/v2/viz/69c6c832-fe80-11e5-889a-0ecd1babdde5/viz.json',visOptions);
            });
            $('#family-but').on('click', function () {
                $('#map').empty();
                cartodb.createVis('map', 'https://blankearth.cartodb.com/api/v2/viz/3beee460-fe5a-11e5-b0a3-0e674067d321/viz.json',visOptions);
            });
            $('#parks-but').on('click', function () {
                $('#map').empty();
                cartodb.createVis('map', 'https://blankearth.cartodb.com/api/v2/viz/c1b62b40-fe72-11e5-a981-0e5db1731f59/viz.json',visOptions);
            });
            $('#pollution-but').on('click', function () {
                $('#map').empty();
                cartodb.createVis('map', 'https://blankearth.cartodb.com/api/v2/viz/87be4e60-fe75-11e5-9557-0ea31932ec1d/viz.json',visOptions);
            });
            $('#school-but').on('click', function () {
                $('#map').empty();
                cartodb.createVis('map', 'https://blankearth.cartodb.com/api/v2/viz/80aad60e-fe73-11e5-9e92-0e5db1731f59/viz.json',visOptions);
            });


        }
    }
    return {
        initialize: initialize
    };
});
