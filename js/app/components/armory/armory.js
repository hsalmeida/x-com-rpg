angular.module('x-com').controller('ItemsController', ['$scope','Items',
    function ($scope, Items) {

        $scope.initItems = function () {
            Items.all().then(function (items) {
                $scope.items = items;
            });
        };


    }]);