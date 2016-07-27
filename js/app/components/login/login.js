angular.module('x-com').controller('LoginController', ['$scope', '$rootScope', '$state',
    function ($scope, $rootScope, $state, Usuarios) {
        $rootScope.bodybg = {
            "background-image": "url(img/bg_notvideo.jpg)",
            "background-position": "center",
            "background-repeat": "repeat-y",
            "background-size": "100%",
            "background-attachment": "fixed"
        };
    }]);