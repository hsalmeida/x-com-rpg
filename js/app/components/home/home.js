angular.module('x-com').controller('HomeController', ['$scope', '$rootScope', '$state', 'Users', '$cookies',
    'Campaigns',
    function ($scope, $rootScope, $state, Users, $cookies, Campaigns) {

        $scope.initHome = function () {
            waitingCircular.show();
            $scope.isAdmin = $rootScope.currentUser.admin;
            var qc = {

            };
            Campaigns.query(qc).then(function (campanhas) {
               if(campanhas[0]) {

               }
            });

            waitingCircular.hide();
        };

        $scope.globe = function () {
            $state.go("globe");
        };
    }]);