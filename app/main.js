import css from './main.css';

(function() {
    'use strict';
    var seriesApp = angular.module('series-app', []);
})();

// Services
require('./services/series-service.js');

// Components
require('./components/main-component/main-component.js');
require('./components/series-component/series-component.js');
require('./components/episode-component/episode-component.js');
