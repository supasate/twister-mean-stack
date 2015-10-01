'use strict';

angular.module('tweets').controller('UserTimelineController', [
    '$scope',
    '$http',
    '$stateParams',
    function($scope, $http, $stateParams) {

        $http.get('/friendships/show/' + $stateParams.username)
        .success(function(response) {
            $scope.profile = {
                name: '',
                screenName: $stateParams.username,
                tweetCount: 4,
                followerCount: 342,
                followingCount: 13,
                isFollowing: response.is_following,
                isFollowed: response.is_followed
            };
        })
        .error(function(response) {
            $scope.error = response.message;
        });

        $http.get('/statuses/user_timeline/' + $stateParams.username)
        .success(function(response) {
            $scope.tweets = response;
        })
        .error(function(response) {
            $scope.error = response.message;
        });

        $scope.follow = function(followUsername) {
            $http.post('/friendships/follow', {
                follow_username: followUsername
            })
            .success(function(response) {
                $scope.profile.isFollowing = response.is_following;
            })
            .error(function(response) {
                $scope.error = response.message;
            });
        };

        $scope.unfollow = function(unfollowUsername) {
            $http.post('/friendships/unfollow', {
                unfollow_username: unfollowUsername
            })
            .success(function(response) {
                $scope.profile.isFollowing = response.is_following;
            })
            .error(function(response) {
                $scope.error = response.message;
            });
        };
    }
]);