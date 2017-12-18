import css from './main.css';

(function() {
    'use strict';

    var seriesApp = angular.module('series-app', []);
    seriesApp.controller('seriesCtrl', function($scope, seriesService) {

        function getSeries() {
            $scope.seriesList = [];
            var seriesPromise = seriesService.getSeries();
            seriesPromise.then(function(data) {
                _.forEach(data, function(item) {
                    $scope.seriesList.push(item);
                });
            });
        }

        $scope.getEpisodes = function(series) {
            $scope.episodesList = [];
            var episodesPromise = seriesService.getEpisodes(series.id);
            episodesPromise.then(function(data) {
                _.forEach(data, function(item) {
                    $scope.episodesList.push(item);
                });
            });
        };

        $scope.playEpisode = function(episode) {
            $scope.episodeUrl = episode.url;
        };

        function init() {
            getSeries();
        }

        init();
    });
})();

// Services
require('./services/series-service.js');

// Components
require('./components/series-component/series-component.js');
require('./components/episode-component/episode-component.js');
