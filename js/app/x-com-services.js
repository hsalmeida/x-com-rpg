angular.module("x-com")
    .factory('Users',function($mongolabResourceHttp){
        return $mongolabResourceHttp('users');
    })
    .factory('Campaigns',function($mongolabResourceHttp){
        return $mongolabResourceHttp('campaigns');
    })
    .factory('Researches',function($mongolabResourceHttp){
        return $mongolabResourceHttp('researches');
    })
;