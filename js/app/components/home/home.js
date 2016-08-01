angular.module('x-com').controller('HomeController', ['$scope', '$rootScope', '$state', 'Users', '$cookies',
    'Campaigns',
    function ($scope, $rootScope, $state, Users, $cookies, Campaigns) {

        $scope.campanha = {
            "engenheiros": 0,
            "cientistas": 0,
            "elerium": 0,
            "energia": 0,
            "max": 10,
            "ligas": 0,
            "intel": 0,
            "dinheiro": 0,
            "income": 0
        };

        $scope.initHome = function () {
            waitingCircular.show();

            var qc = {
                "users": $rootScope.currentUser._id.$oid
            };
            Campaigns.query(qc).then(function (campanhas) {
                if (campanhas[0]) {
                    $scope.campanha = campanhas[0];
                }
                waitingCircular.hide();
            });


        };

        $scope.globe = function () {
            $state.go("globe");
        };
    }]);