var app = angular.module('app', ['ui.router']);
app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/landing');
    $stateProvider
        .state('landing', {
            url: 'landing',
            templateUrl: '../templates/landing.html'
        })
        .state('about', {
            url: 'about',
            templateUrl: '../templates/about.html'
        })
        .state('projects', {
            url: 'projects',
            templateUrl: '../templates/projects.html'
        })
        .state('contact', {
            url: 'contact',
            templateUrl: '../templates/contact.html'
        });
});