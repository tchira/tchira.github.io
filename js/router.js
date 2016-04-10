// Filename: router.js
define([
    'jquery',
    'underscore',
    'backbone',
], function ($, _, Backbone) {

    var AppRouter = Backbone.Router.extend({
        routes: {
            // Default
            'visualize/:city': 'visualize',
            '*actions': 'defaultAction'
        },
        defaultAction: function () {
            this.navigate('visualize/cluj', {trigger: true});
        },
        visualize: function (city) {
            var visOptions = {
                zoom: 12,
                scrollwheel: true,
                search: false,
                shareable: false,
                center: [48.1441, 17.1462]
            };

            var visOptionsC = {
                zoom: 13,
                scrollwheel: true,
                search: false,
                shareable: false,
                center: [46.7691, 23.6058]
            };

            $('#map').empty();
            switch (city) {
                case 'cluj':
                    $('#map').empty();
                    try {
                        cartodb.createVis('map', 'https://bratuionutz.cartodb.com/api/v2/viz/2d38895e-ff03-11e5-bd91-0e31c9be1b51/viz.json', visOptionsC);
                    } catch (ex) {
                        console.log(ex);
                    }

                    $('#fun-but').off('click');
                    $('#fun-but').on('click', function () {
                        $('#map').empty();
                        cartodb.createVis('map', 'https://bratuionutz.cartodb.com/api/v2/viz/69e63e06-ff02-11e5-b4f2-0e5db1731f59/viz.json', visOptionsC);
                    });
                    $('#family-but').off('click');
                    $('#family-but').on('click', function () {
                        $('#map').empty();
                        cartodb.createVis('map', 'https://bratuionutz.cartodb.com/api/v2/viz/2d38895e-ff03-11e5-bd91-0e31c9be1b51/viz.json', visOptionsC);
                    });
                    $('#parks-but').off('click');
                    $('#parks-but').on('click', function () {
                        $('#map').empty();
                        cartodb.createVis('map', 'https://bratuionutz.cartodb.com/api/v2/viz/e0ecdb8c-ff01-11e5-8b83-0e3ff518bd15/viz.json', visOptionsC);
                    });
                    $('#pollution-but').off('click');
                    $('#pollution-but').on('click', function () {
                        $('#map').empty();
                        cartodb.createVis('map', 'https://bratuionutz.cartodb.com/api/v2/viz/629db008-ff01-11e5-a981-0e5db1731f59/viz.json', visOptionsC);
                    });
                    $('#school-but').off('click');
                    $('#school-but').on('click', function () {
                        $('#map').empty();
                        cartodb.createVis('map', 'https://bratuionutz.cartodb.com/api/v2/viz/26548396-ff02-11e5-a981-0e5db1731f59/viz.json', visOptionsC);
                    });

                    $('.vis-control').on('click', function (event) {
                        $('.active').not($(this)).removeClass('active');
                        $(this).toggleClass('active');
                        event.stopPropagation();
                    });
                    break;


                case 'bratislava':
                    $('#map').empty();
                    $('#family-but').addClass('disabled');
                    $('#family-but').addClass('disabled');

                    try {
                        cartodb.createVis('map', 'https://blankearth.cartodb.com/api/v2/viz/69c6c832-fe80-11e5-889a-0ecd1babdde5/viz.json', visOptions);
                    } catch (ex) {
                        console.log(ex);
                    }
                    $('#fun-but').off('click');
                    $('#fun-but').on('click', function () {
                        $('#map').empty();
                        cartodb.createVis('map', 'https://blankearth.cartodb.com/api/v2/viz/69c6c832-fe80-11e5-889a-0ecd1babdde5/viz.json', visOptions);
                    });
                    $('#family-but').off('click');
                    $('#family-but').on('click', function () {
                        $('#map').empty();
                        cartodb.createVis('map', 'https://blankearth.cartodb.com/api/v2/viz/69c6c832-fe80-11e5-889a-0ecd1babdde5/viz.json', visOptions);
                    });
                    $('#parks-but').off('click');
                    $('#parks-but').on('click', function () {
                        $('#map').empty();
                        cartodb.createVis('map', 'https://blankearth.cartodb.com/api/v2/viz/c1b62b40-fe72-11e5-a981-0e5db1731f59/viz.json', visOptions);
                    });
                    $('#pollution-but').off('click');
                    $('#pollution-but').on('click', function () {
                        $('#map').empty();
                        cartodb.createVis('map', 'https://blankearth.cartodb.com/api/v2/viz/87be4e60-fe75-11e5-9557-0ea31932ec1d/viz.json', visOptions);
                    });
                    $('#school-but').off('click');
                    $('#school-but').on('click', function () {
                        $('#map').empty();
                        cartodb.createVis('map', 'https://blankearth.cartodb.com/api/v2/viz/80aad60e-fe73-11e5-9e92-0e5db1731f59/viz.json', visOptions);
                    });

                    $('.vis-control').on('click', function (event) {
                        $('.active').not($(this)).removeClass('active');
                        $(this).toggleClass('active');
                        event.stopPropagation();
                    });
                    break;
            }
        }

    });

    var initialize = function () {
        var app_router = new AppRouter;
        Backbone.history.start();
    };
    return {
        initialize: initialize
    };
});
