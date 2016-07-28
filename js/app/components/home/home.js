angular.module('x-com').controller('HomeController', ['$scope', '$rootScope', '$state', 'Users', '$cookies',
    function ($scope, $rootScope, $state, Users, $cookies) {

        $scope.initHome = function () {
            waitingCircular.show();
            $scope.isAdmin = $rootScope.currentUser.admin;
            waitingCircular.hide();
        };

        $scope.globe = function () {
            $state.go("globe");
        };
    }]);