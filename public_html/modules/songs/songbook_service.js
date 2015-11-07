'use strict';

var customerServices = angular.module('smartapps.mysongbook.songservice', [
    'firebase'
])
        .value('version', '0.1')

        .factory("songs", ["$firebase", function ($firebase) {

                // create a reference to the user's profile
                var ref = new Firebase("https://devthomas.firebaseio.com/songs/");
                // return it as a synchronized object
                var sync = $firebase(ref);

                return sync.$asArray();
            }
        ]);