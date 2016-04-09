require.config({
  paths: {
    jquery: 'libs/jquery/jquery-min',
    underscore: 'libs/underscore/underscore-min',
    backbone: 'libs/backbone/backbone-min',
    templates: '../templates',
    leaflet :'libs/leaflet/leaflet',
    turf: 'libs/turf/turf'
  }
});

require([
  'app',
], function(App){
  App.initialize();
});
