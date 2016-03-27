'use strict';

angular.module('smartapps.mysongbook', [
    'ngMaterial',
    'smartapps.mysongbook.songservice'])

        .config(function ($mdThemingProvider) {
            // Configure a dark theme with primary foreground yellow
            $mdThemingProvider.theme('docs-dark', 'default')
                    .primaryPalette('yellow')
                    .dark();
        })

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/songs/:index', {
                    templateUrl: 'modules/songs/song_view.html',
                    controller: 'smartapps.mysongbook.songListController'
                });
                $routeProvider.when('/song_add', {
                    templateUrl: 'modules/songs/song_add.html',
                    controller: 'smartapps.mysongbook.songAddController'
                });
                $routeProvider.when('/song_edit/:index', {
                    templateUrl: 'modules/songs/song_edit.html',
                    controller: 'smartapps.mysongbook.songEditController'
                });
            }])


        .controller('smartapps.mysongbook.songListController', ['$scope','$routeParams', 'Songs', function ($scope, $routeParams, songs) {

                $scope.songs = songs;
                var index = $routeParams.index;
                if(typeof index !== "undefined" && index >= 0){
                    $scope.song = $scope.songs[index];
                    $scope.song.index_no = index;
                }else{
                    $scope.song = {
                    index_no : -1,
                    songNumber: -1,
                    songTitle: '',
                    songLanguage: '',
                    stansas : [
                    {
                        no: 1,
                        lines: "empty text"
                    },
                    {
                        no: 2,
                        lines: "empty text"
                    },
                    {
                        no: 3,
                        lines: "empty text"
                    }
                    ]
                };
                }

            }])

        .controller('smartapps.mysongbook.songAddController', ['$scope', '$location', 'Songs', function ($scope, $location, songs) {
                
                $scope.songs = songs;

                $scope.languages = ["ENGLISH", "MALAYALAM", "HINDI"];
                $scope.song = {
                    songNumber: 1,
                    songTitle: 'Nuclear Missile Defense System',
                    songLanguage: 'ENGLISH',
                    stansas : [
                    {
                        no: 1,
                        lines: "empty text"
                    },
                    {
                        no: 2,
                        lines: "empty text"
                    },
                    {
                        no: 3,
                        lines: "empty text"
                    }
                    ]
                };
               
                $scope.save = function () {
                    $scope.songs.$add($scope.song);
                    $location.path('/songs');
                };



            }])

        .controller('smartapps.mysongbook.songEditController', ['$scope','$routeParams', '$location', 'Songs', function ($scope, $routeParams, $location, songs) {

                $scope.songs = songs;
                $scope.languages = ["ENGLISH", "MALAYALAM", "HINDI"];
                var index = $routeParams.index;
                if(index >= 0){
                    $scope.song = $scope.songs[index];
                }
                
                $scope.addStansa=function(){
                    if(typeof $scope.song.stansas === 'undefined'){
                        $scope.song.stansas=[{no:1, lines:""}];
                    }else {
                        var sindex = $scope.song.stansas.length;
                        $scope.song.stansas.push({no: sindex+1,lines:''});
                    }
                };
                
                $scope.update = function(){
                    $scope.songs.$save($scope.song);
                    $location.path("/songs/"+$scope.song.index_no)
                    
                };

            }])
        
        .controller('smartapps.mysongbook.songViewController', ['$scope', 'songs', function ($scope, songs) {

                $scope.songs = songs;

            }]);


