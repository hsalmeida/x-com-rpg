angular.module('x-com').controller('GmResearchesController', ['$scope', '$rootScope', '$state', 'Users', '$cookies',
    '$modal',
    function ($scope, $rootScope, $state, Users, $cookies, $modal) {
        $scope.pesquisa = {
            "nome": "",
            "tipo": "",
            "proxima": "",
            "anterior": "",
            "requisitos": [],
            "custo": ""
        };
        
        $scope.resources = {
        	alloy: 0,
        	intel: 0,
        	engineers: 0,
        	scientist: 0,
        	supplies: 0,
        	elerium: 0,
        	aliens: {
        		sectoid: 0,
        		sectoidCommander: 0,
        		drone: 0,
        		muton: 0,
        		mutonElite: 0,
        		berserker: 0
        	}
        }
        
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
        $scope.pesquisa = {
            "nome": "",
            "tipo": "",
            "proxima": "",
            "anterior": "",
            "requisitos": [],
            "custo": ""
        };
        $scope.initNovaPesquisa = function () {

        };
    }]);