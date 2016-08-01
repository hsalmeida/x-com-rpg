angular.module("x-com").config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('login', {
            url: "/",
            templateUrl: "views/login/login.html",
            controller: 'LoginController',
            data: {
                requiredlogin: false,
                requiredGM: false
            }
        })
        .state('home', {
            url: "/home",
            templateUrl: "views/home/home.html",
            controller: 'HomeController',
            data: {
                requiredlogin: true,
                requiredGM: false
            }
        })
        .state('globe', {
            url: "/globe",
            templateUrl: "views/globe/globe.html",
            controller: 'GlobeController',
            data: {
                requiredlogin: true,
                requiredGM: false
            }
        })
        .state('items', {
            url: "/items",
            templateUrl: "views/armory/items.html",
            controller: 'ItemsController',
            data: {
                requiredlogin: true,
                requiredGM: false
            }
        })
        .state('gmresearch', {
            url: "/gmresearch",
            templateUrl: "views/research/gm-researches.html",
            controller: 'GmResearchesController',
            data: {
                requiredlogin: true,
                requiredGM: true
            }
        });
});