angular.module("x-com", [
    'ui.router', 'ngResource', 'mongolabResourceHttp', 'ngAnimate', 'ui.bootstrap', 'ngMessages',
    'ngCookies'
])
    .run(function ($rootScope, $state, $cookies) {

        $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {

            var requireLogin = toState.data.requiredlogin;
            //ver se esta no cookie
            var angularCookieUsrObj = $cookies.getObject('xcom-user');
            if (angularCookieUsrObj) {
                $rootScope.currentUser = angularCookieUsrObj;
            }
            if (requireLogin && typeof $rootScope.currentUser === 'undefined') {
                event.preventDefault();
                $state.go('login');
            }
        });
    })
    .constant('MONGOLAB_CONFIG', {API_KEY: 'YXgR-q92vuVCKlSm-ji3nplDTE7rHIQh', DB_NAME: 'xcom'});
