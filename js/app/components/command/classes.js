angular.module('x-com').controller('ClassesController', ['$scope', '$rootScope', '$state',
    '$uibModal', '$filter', 'DefaultObjects', 'Classes',
    function ($scope, $rootScope, $state, $uibModal, $filter, DefaultObjects, Classes) {

        $scope.initClasses = function () {
            waitingCircular.show();
            Classes.all().then(function (classes) {
                $scope.classes = classes;
                waitingCircular.hide();
            });

        };

        $scope.detalhes = function (classe) {
            $state.go('classe', {id : classe._id.$oid});
        };

    }]);


angular.module('x-com').controller('ClasseController', ['$scope', '$rootScope', '$state', '$stateParams',
    '$uibModal', '$filter', 'DefaultObjects', 'Classes',
    function ($scope, $rootScope, $state, $stateParams, $uibModal, $filter, DefaultObjects, Classes) {

        $scope.initClasse = function () {
            waitingCircular.show();
            Classes.getById($stateParams.id).then(function (classe) {
                $scope.classe = classe;
                waitingCircular.hide();
            });

        };

    }]);