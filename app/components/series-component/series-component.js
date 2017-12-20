(function() {
    'use strict';

    var seriesApp = angular.module('series-app');

    seriesApp.component('seriesComponent', {
        bindings: {
            series: '='
        },
        template: `<div class="series">
                      <img ng-src="{{$ctrl.series.image}}" class="icon">
                      <span class="title">
                           {{$ctrl.series.title}}
                      <span>
                  </div>`
    });

})();
