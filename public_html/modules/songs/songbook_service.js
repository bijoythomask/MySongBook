'use strict';

var customerServices = angular.module('smartapps.mysongbook.songservice', [
    'firebase'
])
        .value('version', '0.1')

        .factory("Songs", ["$firebaseArray", function ($firebaseArray) {

                // create a reference to the user's profile
                var ref = new Firebase("https://devthomas.firebaseio.com/songs/");
                // return it as a synchronized object
                var songs = $firebaseArray(ref);

                return songs;
            }
        ]);