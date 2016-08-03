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
            var researchId = "";
            $uibModal.open({
                templateUrl: 'views/research/new-gm-research.html',
                controller: 'GmResearchControllerDialog',
                resolve: {
                    researchOid: function () {
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
                    researchOid: function () {
                        return researchId;
                    }
                }
            }).result.then(function () {
                    $state.reload();
                }, function () {
                });
        };

    }]);

angular.module('x-com').controller('GmResearchControllerDialog',
    ['$scope', 'Researches', 'DefaultObjects', 'Research', 'researchOid', '$filter',
    function ($scope, Researches, DefaultObjects, Research, researchOid, $filter) {
        function initForm () {
            getResearches();
            $scope.newResearch = new Research();
            $scope.resources = DefaultObjects.resourceObj;

            $scope.data = {
                tempcost: {},
                tempPreReq: {},
                tempUnlockRes: {},
                tempItem: "",
                tempFacilitie: ""
            };
        }

        function getResearches() {
            Researches.all().then(function (pesquisas) {
                $scope.pesquisas = pesquisas;
            });
        }

        $scope.removeFromForm = function (index, obj) {
            $scope.newResearch[obj].splice(index, 1);
        };

        $scope.addToForm = function (temp, obj) {
            console.log($scope.data[temp]);
            if ($scope.data[temp]) {
                if ($.inArray($scope[temp], $scope.newResearch[obj]) === -1) {
                    $scope.newResearch[obj].push($scope.data[temp]);
                }
            }
        };

        $scope.initEditResearchDialog = function () {
            initForm();
            Researches.getById(researchOid).then(function (pesquisa) {
                pesquisa.prerequisite = preReqUnlocksToList('prerequisite', pesquisa);
                pesquisa.unlockResearch = preReqUnlocksToList('unlockResearch', pesquisa);
                $scope.newResearch = pesquisa;
            });
        };

        $scope.initResearchDialog = function () {
            initForm();
            $scope.newResearch = new Research();
        };

        $scope.saveResearch = function () {

            if ($scope.newResearch.name !== '') {
                var researchDB = new Researches();
                researchDB = angular.merge(researchDB, $scope.newResearch);
                researchDB.prerequisite = ajustaListasPreReqUnlocks('prerequisite', researchDB);
                researchDB.unlockResearch = ajustaListasPreReqUnlocks('unlockResearch', researchDB);
                waitingCircular.show();
                researchDB.$saveOrUpdate().then(function () {
                    waitingCircular.hide();
                    $scope.$close('ok');
                });
            }
        };

        function preReqUnlocksToList(atributo, obj) {
            var retlista = [];
            var lista = obj[atributo];
            if (lista.length > 0) {
                for (var i = 0; i < lista.length; i++) {
                    var filtro = $filter('filter')($scope.pesquisas, lista[i], function (a, b) {
                        if (a && a._id) {
                            return a._id.$oid === b;
                        }
                    });
                    if(filtro && filtro.length > 0) {
                        retlista.push(filtro[0]);
                    }
                }
            }
            return retlista;
        }

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
            $scope.$dismiss('cancel');
        };
    }]);