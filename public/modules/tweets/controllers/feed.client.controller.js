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
                tweetText: 'My name is Top',
                tweetTime: '2015-01-29T15:37:26+07:00'
            },
            {
                name: 'Supasate Choochaisri',
                screenName: 'kaizerwing',
                tweetText: 'Hello World',
                tweetTime: '2015-02-29T15:37:26+07:00'
            },
            {
                name: 'Somchai Jaidee',
                screenName: 'somchaic',
                tweetText: '555555555555555',
                tweetTime: '2015-06-29T15:37:26+07:00'
            },
            {
                name: 'Supasate Choochaisri',
                screenName: 'kaizerwing',
                tweetText: 'Sawasdee Thailand',
                tweetTime: '2015-02-29T15:37:26+07:00'
            }
        ];

        $scope.postTweet = function(tweetText, name, screenName) {
            $scope.timeline.push({
                name: name,
                screenName: screenName,
                tweetText: tweetText,
                tweetTime: new Date().toISOString()
            });

            $scope.tweetText = '';
        };
    }
]);