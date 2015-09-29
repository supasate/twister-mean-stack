'use strict';

angular.module('tweets').controller('MeController', [
    '$scope',
    function($scope) {
        $scope.profile = {
            name: 'Supasate Choochaisri',
            screenName: 'kaizerwing',
            tweetCount: 2,
            followerCount: 34,
            followingCount: 140
        };

        $scope.tweets = [
            {
                name: 'Supasate Choochaisri',
                screenName: 'kaizerwing',
                tweetText: 'Hello World'
            },
            {
                name: 'Supasate Choochaisri',
                screenName: 'kaizerwing',
                tweetText: 'Sawasdee Thailand'
            }
        ];
    }
]);