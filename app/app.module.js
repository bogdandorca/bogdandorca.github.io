angular.module('app', ['ngRoute', 'ngAnimate', 'ngSanitize']).config(function($routeProvider, $locationProvider){
    $routeProvider
        .when('/', {
            controller: 'HomeCtrl',
            templateUrl: '/partials/home.partial.html'
        })
        .when('/about', {
            controller: 'AboutCtrl',
            templateUrl: '/partials/about.partial.html'
        })
        .when('/skills', {
            controller: 'SkillsCtrl',
            templateUrl: '/partials/skills.partial.html'
        })
        .when('/contact', {
            controller: 'ContactCtrl',
            templateUrl: '/partials/contact.partial.html'
        })
        .otherwise({
            redirectTo: '/'
        });
    $locationProvider.html5Mode(true);
});