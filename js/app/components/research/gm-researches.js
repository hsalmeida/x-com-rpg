angular.module('x-com').controller('GmResearchesController', ['$scope', '$rootScope', '$state', 'Users', '$cookies',
    '$modal', 'Researches',
    function ($scope, $rootScope, $state, Users, $cookies, $modal, Researches) {
        $scope.pesquisa = {
            "name": "",
            "description": "",
            "cost": {},
            "prerequisite": "",
            "unlockResearch": "",
            "unlockItems": [],
            "unlockFacilities": ""
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
                ]}
        ];
        
        $scope.initGmResearch = function () {
            Researches.all().then(function (pesquisas) {
                $scope.pesquisas = pesquisas;
            });

        };

        $scope.novaPesquisa = function () {
            $modal.open({
                templateUrl: 'views/research/new-gm-research.html',
                controller: 'NewGmResearchController',
            }).result.then(function () {
                    $scope.reload();
                }, function () {
                });
        };
    }]);


angular.module('x-com').controller('NewGmResearchController', ['$scope', '$rootScope',
    'Researches',
    function ($scope, $rootScope, Researches) {
        $scope.novaPesquisa = {
            "name": "",
            "description": "",
            "cost": "",
            "prerequisite": "",
            "unlockResearch": "",
            "unlockItems": [],
            "unlockFacilities": ""
        };
        $scope.initNovaPesquisa = function () {
            Researches.all().then(function (pesquisas) {
                $scope.pesquisas = pesquisas;
            });
        };
    }]);