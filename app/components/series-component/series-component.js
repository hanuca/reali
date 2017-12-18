(function() {
    'use strict';

    var seriesApp = angular.module('series-app');

    seriesApp.component('seriesComponent', {
        bindings: {
            series: '='
        },
        template: `<div class="series">
                      <img src="{{$ctrl.series.image}}" class="icon">
                      <span class="title">
                           {{$ctrl.series.title}}
                      <span>
                  </div>`
         //templateUrl: require('./section-component.html').name
    });

})();
