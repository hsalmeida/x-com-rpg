angular.module('x-com').controller('GmResearchesController', ['$scope', '$rootScope', '$state', 'Users', '$cookies',
    '$modal', 'Researches', '$filter',
    function ($scope, $rootScope, $state, Users, $cookies, $modal, Researches, $filter) {
        $scope.filtraPesquisa = function (input) {
            var filtro = $filter('filter')($scope.pesquisas, input, function (a, b) {
                if(a && a._id) {
                    return a._id.$oid === b;
                }
            });
            if(filtro.length > 0) {
                return filtro[0].name
            } else {
                return "";
            }
        };

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