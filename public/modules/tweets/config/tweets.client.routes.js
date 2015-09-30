'use strict';

angular.module('tweets')
.config([
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
        .state('usertimeline', {
            url: '/u/:username',
            templateUrl: '/modules/tweets/views/usertimeline.client.view.jade'
        });
    }
])
.run([
    '$rootScope',
    '$state',
    'Authentication',
    function($rootScope, $state, Authentication) {
        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
            if ( (( toState.name !== 'signup') && ( toState.name !== 'signin')) &&
                    !Authentication.user) {
                event.preventDefault();
                $state.go('signup');
            }
        });
    }
]);