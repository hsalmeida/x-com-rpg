angular.module('x-com').controller('GmResearchesController', ['$scope', '$rootScope', '$state', 'Users', '$cookies',
    '$modal', 'Researches', '$filter', 'DefaultObjects',
    function ($scope, $rootScope, $state, Users, $cookies, $modal, Researches, $filter, DefaultObjects) {
        $scope.filtraPesquisa = function (input) {
            var filtro = $filter('filter')($scope.pesquisas, input, function (a, b) {
                if (a && a._id) {
                    return a._id.$oid === b;
                }
            });
            if (filtro.length > 0) {
                return filtro[0].name
            } else {
                return "";
            }
        };

        $scope.pesquisa = DefaultObjects.researchObj;
        $scope.resources = DefaultObjects.resourceObj;

        $scope.initGmResearch = function () {
            Researches.all().then(function (pesquisas) {
                $scope.pesquisas = pesquisas;
            });

        };

        $scope.novaPesquisa = function () {
            $modal.open({
                templateUrl: 'views/research/new-gm-research.html',
                controller: 'NewGmResearchController'
            }).result.then(function () {
                    $scope.reload();
                }, function () {
                });
        };
    }]);


angular.module('x-com').controller('NewGmResearchController', ['$scope', '$rootScope',
    'Researches', 'DefaultObjects',
    function ($scope, $rootScope, Researches, DefaultObjects) {
        $scope.newResearch = DefaultObjects.researchObj;
        $scope.resources = DefaultObjects.resourceObj;
        $scope.tempcost = {};
        $scope.tempPreReq = {};
        $scope.tempUnlockRes = {};

        $scope.addPreReq = function () {
            if($scope.tempPreReq) {
                if($.inArray($scope.tempPreReq, $scope.newResearch.prerequisite) === -1) {
                    $scope.newResearch.prerequisite.push($scope.tempPreReq);
                }
            }
        };

        $scope.removePreReq = function (index) {
            $scope.newResearch.prerequisite.splice(index, 1);
        };

        $scope.addNextRes = function () {
            if($scope.tempUnlockRes) {
                if($.inArray($scope.tempUnlockRes, $scope.newResearch.unlockResearch) === -1) {
                    $scope.newResearch.unlockResearch.push($scope.tempUnlockRes);
                }
            }
        };

        $scope.removeNextRes = function (index) {
            $scope.newResearch.unlockResearch.splice(index, 1);
        };

        $scope.addCost = function () {
            if($scope.tempcost) {
                if($.inArray($scope.tempcost, $scope.newResearch.cost) === -1) {
                    $scope.newResearch.cost.push($scope.tempcost);
                }
            }
        };

        $scope.removeCost = function (index) {
            $scope.newResearch.cost.splice(index, 1);
        };

        $scope.initNovaPesquisa = function () {
            $scope.newResearch = DefaultObjects.researchObj;
            Researches.all().then(function (pesquisas) {
                $scope.pesquisas = pesquisas;
            });
        };
    }]);