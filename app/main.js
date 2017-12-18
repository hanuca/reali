import css from './main.css';

(function() {
    'use strict';

    var seriesApp = angular.module('series-app', []);
    seriesApp.controller('seriesCtrl', function(seriesService) {

        function getSeries() {
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

        function init() {
            getSeries.call(this);
        }

        init.call(this);
    });
})();

// Services
require('./services/series-service.js');

// Components
require('./components/series-component/series-component.js');
require('./components/episode-component/episode-component.js');
