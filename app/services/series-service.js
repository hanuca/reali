(function() {
    'use strict';

     var seriesApp = angular.module('series-app');
     seriesApp.service('seriesService', function ($http) {

        this.getSeries = function() {
            return $http.get('http://tvdb.reali.com/series').then(function(data) {
                return data.data;
            });
        };

        this.getEpisodes = function (seriesId) {
            return $http.get('http://tvdb.reali.com/series/' + seriesId).then(function(data) {
                return data.data;
            });
        };

     });
})();