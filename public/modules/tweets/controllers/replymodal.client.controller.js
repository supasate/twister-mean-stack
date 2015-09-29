'use strict';

angular.module('tweets').controller('ReplyModalController', [
    '$scope',
    '$modalInstance',
    'tweetText',
    function($scope, $modalInstance, tweetText) {
        $scope.tweetText = tweetText;

        $scope.reply = function() {
            $modalInstance.close($scope.tweetText);
        };

        $scope.close = function() {
            $modalInstance.dismiss();
        };
    }
]);