angular.module('x-com').controller('GmResearchesController', ['$scope', '$rootScope', '$state', 'Users', '$cookies',
    '$uibModal', 'Researches', '$filter', 'DefaultObjects', 'Research',
    function ($scope, $rootScope, $state, Users, $cookies, $uibModal, Researches, $filter, DefaultObjects, Research) {
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

        $scope.pesquisa = new Research();
        $scope.resources = DefaultObjects.resourceObj;

        $scope.initGmResearch = function () {
            waitingCircular.show();
            Researches.all().then(function (pesquisas) {
                $scope.pesquisas = pesquisas;
                waitingCircular.hide();
            });

        };

        $scope.novaPesquisa = function () {
            var researchId = 0;
            $uibModal.open({
                templateUrl: 'views/research/new-gm-research.html',
                controller: 'GmResearchControllerDialog',
                resolve: {
                    researchId: function () {
                        return researchId;
                    }
                }
            }).result.then(function () {
                    $scope.reload();
                }, function () {
                });
        };

        $scope.editResearch = function (pesquisa) {
            var researchId = pesquisa._id.$oid;
            $uibModal.open({
                templateUrl: 'views/research/edit-gm-research.html',
                controller: 'GmResearchControllerDialog',
                resolve: {
                    researchId: function () {
                        return researchId;
                    }
                }
            }).result.then(function () {
                    $scope.reload();
                }, function () {
                });
        };

    }]);

angular.module('x-com').controller('GmResearchControllerDialog', ['$scope', '$rootScope',
    'Researches', 'DefaultObjects', 'Research', 'researchId',
    function ($scope, $rootScope, Researches, DefaultObjects, Research, researchId) {
        $scope.newResearch = new Research();
        $scope.resources = DefaultObjects.resourceObj;
        $scope.tempcost = {};
        $scope.tempPreReq = {};
        $scope.tempUnlockRes = {};
        $scope.tempItem = "";
        $scope.tempFacilitie = "";
        Researches.all().then(function (pesquisas) {
            $scope.pesquisas = pesquisas;
        });

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

        $scope.initEditResearchDialog = function () {
            Researches.getById(researchId).then(function (pesquisa) {
                $scope.newResearch = pesquisa;
                console.log($scope.newResearch);
            });
        };

        $scope.initResearchDialog = function () {
            $scope.newResearch = new Research();

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