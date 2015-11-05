angular.module('app').directive('appHeader', function($rootScope, $location){
    var getLogoFill = function(validator){
        if(validator){
            return '#FFFFFF';
        } else {
            return '#222222';
        }
    };
    var linker = function(scope, element, attr){
        scope.isHome = ($location.path() === '/');
        scope.logoFill = getLogoFill(scope.isHome);
        $rootScope.$on( "$routeChangeStart", function(event, next, current) {
            scope.isHome = (next.$$route.originalPath === '/');
            scope.logoFill = getLogoFill(scope.isHome);
        });
    };
    return {
        restrict: 'E',
        link: linker,
        templateUrl: '/partials/header.partial.html'
    };
});