// Filename: router.js
define([
    'jquery',
    'underscore',
    'backbone',
], function ($, _, Backbone) {

    var AppRouter = Backbone.Router.extend({
        initialize: function () {
            var _this = this;

            $('#donate-but').on('click', function () {
                ga('send', 'event', 'metrics', 'donated');
                alert("Thanks!");
            });

            $('.vis-control').on('click', function (event) {
                $('.active').not($(this)).removeClass('active');
                $(this).toggleClass('active');
                event.stopPropagation();
            });

            $('#family').on('click', function () {
                _this.navigate('visualize/cluj/family', {trigger: true});
            });
            $('#parks').on('click', function () {
                _this.navigate('visualize/cluj/parks', {trigger: true});
            });
            $('#education').on('click', function () {
                _this.navigate('visualize/cluj/education', {trigger: true});
            });
            $('#pubs').on('click', function () {
                _this.navigate('visualize/cluj/pubs', {trigger: true});
            });
            $('#pollution').on('click', function () {
                _this.navigate('visualize/cluj/pollution', {trigger: true});
            });
        },
        vizUrls: {
            'cluj': {
                'education': 'https://bratuionutz.cartodb.com/api/v2/viz/26548396-ff02-11e5-a981-0e5db1731f59/viz.json',
                'pubs': 'https://bratuionutz.cartodb.com/api/v2/viz/69e63e06-ff02-11e5-b4f2-0e5db1731f59/viz.json',
                'parks': 'https://bratuionutz.cartodb.com/api/v2/viz/e0ecdb8c-ff01-11e5-8b83-0e3ff518bd15/viz.json',
                'pollution': 'https://bratuionutz.cartodb.com/api/v2/viz/629db008-ff01-11e5-a981-0e5db1731f59/viz.json',
                'family': 'https://bratuionutz.cartodb.com/api/v2/viz/2d38895e-ff03-11e5-bd91-0e31c9be1b51/viz.json'
            }
        },
        routes: {
            // Default
            'visualize/:city/:map': 'visualize',
            '*actions': 'defaultAction'
        },
        defaultAction: function () {
            this.navigate('visualize/cluj/family', {trigger: true});
        },

        visualize: function (city, mapType) {
            var visOptionsC = {
                zoom: 13,
                scrollwheel: true,
                search: false,
                shareable: false,
                center: [46.7691, 23.6058]
            };
            $('#map').empty();
            $('.active').removeClass('active');
            $('#'+mapType).addClass('active');
            cartodb.createVis('map', (this.vizUrls[city])[mapType], visOptionsC);
        }
    });

    var initialize = function () {
        var app_router = new AppRouter;
        Backbone.history.start();
    };
    return {
        initialize: initialize
    };
})
;
