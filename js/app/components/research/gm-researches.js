angular.module('x-com').controller('GmResearchesController', ['$scope', '$rootScope', '$state', 'Users', '$cookies',
    '$modal',
    function ($scope, $rootScope, $state, Users, $cookies, $modal) {
        $scope.pesquisa = {
            "nome": "",
            "tipo": "",
            "proxima": "",
            "anterior": "",
            "requisitos": [],
            "custo": {}
        };
        
        $scope.resources = [
            {name: "Alloy", total: 0},
            {name: "Intel", total: 0},
            {name: "Engineers", total: 0},
            {name: "Scientists", total: 0},
            {name: "Supplies", total: 0},
            {name: "Elerium", total: 0},
            {name: "Allies", types: [
                    {name: "Sectoid", total: 0},
                    {name: "Sectoid Commander", total: 0},
                    {name: "Drone", total: 0},
                    {name: "Muton", total: 0},
                    {name: "Muton Elite", total: 0}
                ]},
        ];
        
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
            "custo": {}
        };
        $scope.initNovaPesquisa = function () {

        };
    }]);