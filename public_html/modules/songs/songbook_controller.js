'use strict';

angular.module('smartapps.mysongbook', [
    'ngMaterial', 
    'smartapps.mysongbook.songservice'])

.config( function($mdThemingProvider){
    // Configure a dark theme with primary foreground yellow
    $mdThemingProvider.theme('docs-dark', 'default')
        .primaryPalette('yellow')
        .dark();
  })

.config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/songs', {
                    templateUrl: 'modules/songs/index.html',
                    controller: 'smartapps.mysongbook.songListController'
                });
                $routeProvider.when('/song_add', {
                    templateUrl: 'modules/songs/song_add.html',
                    controller: 'smartapps.mysongbook.songAddController'
                });
                $routeProvider.when('/song_edit/:index', {
                    templateUrl: 'modules/songs/customer_edit.html',
                    controller: 'smartapps.mysongbook.songEditController'
                });
            }])
        

        .controller('smartapps.mysongbook.songListController', ['$scope','songs', function ($scope, songs) {
            
            $scope.todo = "songs";

        }])
        
        .controller('smartapps.mysongbook.songAddController', ['$scope', 'songs', function ($scope, songs) {
                
                $scope.languages = ["ENGLISH", "MALAYALAM", "HINDI"];
                $scope.song = {
                    songNumber: 1,
                    songTitle: 'Nuclear Missile Defense System',
                    songLanguage : 'ENGLISH'
                };
                $scope.stansas = [
                    {
                        no:1,
                        stansa:"empty text"
                    },
                    {
                        no:2,
                        stansa:"empty text"
                    },  
                    {
                        no:3,
                        stansa:"empty text"
                    }
                ];
    
        }])
        
        .controller('smartapps.mysongbook.songEditController', ['$scope', 'songs', function ($scope, songs) {

            $scope.songs = songs;
    
        }]);


