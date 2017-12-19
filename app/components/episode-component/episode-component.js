(function() {
    'use strict';

    var seriesApp = angular.module('series-app');

    var template = require('./episode-component.html');
    seriesApp.component('episodeComponent', {
        bindings: {
            episode: '='
        },
        template: template
    });

})();
