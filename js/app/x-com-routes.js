angular.module("x-com").config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('login', {
            url: "/",
            templateUrl: "views/login/login.html",
            controller: 'LoginController',
            data: {
                requiredlogin: false
            }
        });
});