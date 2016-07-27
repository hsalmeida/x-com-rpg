angular.module("x-com")
    .factory('Users',function($mongolabResourceHttp){
        return $mongolabResourceHttp('users');
    });