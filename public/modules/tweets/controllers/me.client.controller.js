'use strict';

angular.module('tweets').controller('MeController', [
    '$scope',
    'Authentication',
    '$http',
    function($scope, Authentication, $http) {
        $scope.profile = {
            name: Authentication.user.displayName,
            screenName: Authentication.user.username,
            tweetCount: 2,
            followerCount: 34,
            followingCount: 140
        };

        $http.get('/statuses/me_timeline')
        .success(function(response) {
            $scope.tweets = response;
        })
        .error(function(response) {
            $scope.error = response.message;
        });
    }
]);