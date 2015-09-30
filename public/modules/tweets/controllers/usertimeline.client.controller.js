'use strict';

angular.module('tweets').controller('UserTimelineController', [
    '$scope',
    '$http',
    '$stateParams',
    function($scope, $http, $stateParams) {
        $scope.profile = {
            name: '',
            screenName: $stateParams.username,
            tweetCount: 4,
            followerCount: 342,
            followingCount: 13
        };

        $http.get('/statuses/user_timeline/' + $stateParams.username)
        .success(function(response) {
            $scope.tweets = response;
        })
        .error(function(response) {
            $scope.error = response.message;
        });
    }
]);