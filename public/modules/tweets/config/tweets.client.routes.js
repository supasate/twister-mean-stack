'use strict';

angular.module('tweets').config([
    '$stateProvider',
    function($stateProvider) {
        $stateProvider
        .state('me', {
            url: '/me',
            templateUrl: '/modules/tweets/views/me.client.view.jade'
        })
        .state('feed', {
            url: '/',
            templateUrl: '/modules/tweets/views/feed.client.view.jade'
        })
    }
]);