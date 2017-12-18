(function() {
    'use strict';

    var seriesApp = angular.module('series-app');

    seriesApp.component('sectionComponent', {
        bindings: {
            title: '@',
            list: '='
        },
        controller: function () {
//            function increment() {
//              this.count++;
//            }
//            function decrement() {
//              this.count--;
//            }
//            this.increment = increment;
//            this.decrement = decrement;
          },
          template: `<div class="section">

                        <h2 class="title">
                            {{$ctrl.title}}
                        </h2>

                        <ul class="list" >

                            <li ng-repeat="item in $ctrl.list">
                                {{item.title}}
                            </li>

                        </ul>

                    </div>`
          //templateUrl: require('./section-component.html').name
    });

})();



