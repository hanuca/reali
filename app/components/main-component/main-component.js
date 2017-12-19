(function() {
    'use strict';

    var seriesApp = angular.module('series-app');

    var template = require('./main-component.html');
    seriesApp.component('mainComponent', {
        template: template,
        controller: function (seriesService) {

         this.$onInit = function () {
          this.getSeries();
         };

         this.getSeries = function() {
             this.seriesList = [];
             var seriesPromise = seriesService.getSeries();
             seriesPromise.then((data) => {
                _.forEach(data, (item) => {
                     this.seriesList.push(item);
                });
             });
          }

          this.getEpisodes = function(series) {
              this.episodesList = [];
              var episodesPromise = seriesService.getEpisodes(series.id);
              episodesPromise.then((data) => {
                  _.forEach(data, (item) => {
                      this.episodesList.push(item);
                  });
              });
          };

          this.playEpisode = function(episode) {
              this.episodeUrl = episode.url;
          };
        },
    });

})();
