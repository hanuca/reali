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

        function init() {
            getSeries();
        }

        init();
    });
})();

// Services
require('./services/series-service.js');

// Components
require('./components/section-component/section-component.js');