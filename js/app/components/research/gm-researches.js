angular.module('x-com').controller('GmResearchesController', ['$scope', '$rootScope', '$state', 'Users', '$cookies',
    '$modal',
    function ($scope, $rootScope, $state, Users, $cookies, $modal) {
        $scope.pesquisa = {
            "nome": "",
            "proxima": "",
            "anterior": "",
            "requisitos": []
        };
        $scope.initGmResearch = function () {
            $scope.pesquisas = [];
        };

        $scope.novaPesquisa = function () {
            $modal.open({
                templateUrl: 'views/research/new-gm-research.html',
                controller: 'NewGmResearchController',
                resolve: {
                    parentScope: function () {
                        return $scope;
                    }
                }
            }).result.then(function () {
                    $scope.reload();
                }, function () {
                });
        };
    }]);


angular.module('x-com').controller('NewGmResearchController', ['$scope', '$rootScope', 'parentScope',
    function ($scope, $rootScope, parentScope) {
        $scope.initNovaPesquisa = function () {

        };
    }]);