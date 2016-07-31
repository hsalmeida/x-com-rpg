angular.module('x-com').controller('GlobeController', ['$scope', '$rootScope', '$state', 'Users', '$cookies',
    function ($scope, $rootScope, $state, Users, $cookies) {

        $scope.initGlobe = function () {
            mapboxgl.accessToken = 'pk.eyJ1IjoiaHNhbG1laWRhIiwiYSI6ImNpZ3h2dm10MzB1cTk0bW0zaGc0MXAzMGsifQ.FhWDwRrJqmRUNRhDX1K3vg';
            $scope.xcommap = new mapboxgl.Map({
                container: 'xcomMap',
                center: [-122.420679, 37.772537],
                style: 'mapbox://styles/mapbox/dark-v9',
                zoom: 3
            });
            console.log($scope.xcommap);
        };
    }]);