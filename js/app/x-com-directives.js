angular.module('x-com')
    .directive(
    "mAppLoading",
    function ($animate) {
        return ({
            link: link,
            restrict: "C"
        });
        function link(scope, element, attributes) {
            $animate.leave(element.children().eq(1)).then(
                function cleanupAfterAnimation() {
                    // Remove the root directive element.
                    element.remove();
                    // Clear the closed-over variable references.
                    scope = element = attributes = null;
                }
            );
        }
    }
)
    .directive('header', function () {
        return {
            restrict: 'A',
            replace: true,
            templateUrl: 'views/directives/header.html'
        };
    });