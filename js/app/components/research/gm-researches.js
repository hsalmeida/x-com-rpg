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
        $scope.tempItem = "";
        $scope.tempFacilitie = "";

        $scope.removeFromForm = function (index, obj) {
            $scope.newResearch[obj].splice(index, 1);
        };

        $scope.addToForm = function (temp, obj) {
            if ($scope[temp]) {
                if ($.inArray($scope[temp], $scope.newResearch[obj]) === -1) {
                    $scope.newResearch[obj].push($scope[temp]);
                }
            }
        };

        $scope.initNovaPesquisa = function () {
            $scope.newResearch = angular.copy(DefaultObjects.researchObj);
            Researches.all().then(function (pesquisas) {
                $scope.pesquisas = pesquisas;
            });
        };

        $scope.saveNew = function () {

            if ($scope.newResearch.name !== '') {
                var researchDB = new Researches();
                researchDB = angular.merge({}, researchDB, $scope.newResearch);
                researchDB.prerequisite = ajustaListasPreReqUnlocks('prerequisite', researchDB);
                researchDB.unlockResearch = ajustaListasPreReqUnlocks('unlockResearch', researchDB);

                console.log(researchDB);
            }
        };

        function ajustaListasPreReqUnlocks(atributo, obj) {
            var retlista = [];
            var lista = obj[atributo];
            if (lista.length > 0) {
                for (var i = 0; i < lista.length; i++) {
                    if (lista[i]._id) {
                        retlista.push(lista[i]._id.$oid);
                    }
                }
            }
            return retlista;
        }

        $scope.cancel = function () {
            $scope.$dismiss();
        };
    }]);