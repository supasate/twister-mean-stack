'use strict';

angular.module('tweets').controller('FeedController', [
    '$scope',
    function($scope) {
        $scope.profile = {
            name: 'Supasate Choochaisri',
            screenName: 'kaizerwing',
            tweetCount: 2,
            followerCount: 34,
            followingCount: 140
        };

        $scope.timeline = [
            {
                name: 'Arnupharp Viratanapanu',
                screenName: 'topscores',
                tweetText: 'My name is Top'
            },
            {
                name: 'Supasate Choochaisri',
                screenName: 'kaizerwing',
                tweetText: 'Hello World'
            },
            {
                name: 'Somchai Jaidee',
                screenName: 'somchaic',
                tweetText: '555555555555555'
            },
            {
                name: 'Supasate Choochaisri',
                screenName: 'kaizerwing',
                tweetText: 'Sawasdee Thailand'
            }
        ];
    }
]);