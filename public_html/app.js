'use strict';

// Declare app level module which depends on views, and components
angular.module('smartapps.mysongbook.app', [
    'ngRoute',
    'ngMaterial',
    'ngAnimate',
    'smartapps.mysongbook'
])
        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.otherwise({redirectTo: '/songs'});
            }]);

        
