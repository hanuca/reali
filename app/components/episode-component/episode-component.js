(function() {
    'use strict';

    var seriesApp = angular.module('series-app');

    var template = require('./episode-component.html');
    seriesApp.component('episodeComponent', {
        bindings: {
            episode: '='
        },
        require: {
          parent: '^mainComponent'
        },
        template: template,
        controller: function () {
          this.play = function() {
            this.parent.playEpisode(this.episode);
          };
        },
    });

})();
