'use strict';

angular.module('tweets').controller('MeController', [
    '$scope',
    'Authentication',
    function($scope, Authentication) {
        $scope.profile = {
            name: Authentication.user.displayName,
            screenName: Authentication.user.username,
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