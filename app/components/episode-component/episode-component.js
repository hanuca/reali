(function() {
    'use strict';

    var seriesApp = angular.module('series-app');

    seriesApp.component('episodeComponent', {
        bindings: {
            episode: '='
        },
        template: `<div class="episode">

                      <span class="title">
                           {{$ctrl.episode.title}}
                      <span>
                  </div>`
         //templateUrl: require('./section-component.html').name
    });

})();
