angular.module('app').directive('partialNav', function($window, $location, $timeout){
    var linker = function(scope, element, attr){
        var partials = ['/', '/about', '/skills', '/contact'];

        var currentIndex = partials.indexOf($location.path());

        Hamster($window).wheel(function(event, delta, deltaX, deltaY){
            if(delta < 1){
                scope.nextPage = true;
                if(currentIndex < partials.length-1){
                    currentIndex++;
                    $location.path(partials[currentIndex]);
                }
                //$timeout(function(){
                //    scope.nextPage = false;
                //}, 1000);
            } else if(delta >= 1){
                scope.prevPage = true;
                if(currentIndex > 0){
                    currentIndex--;
                    $location.path(partials[currentIndex]);
                }
                $timeout(function(){
                    scope.prevPage = false;
                }, 1000);
            }
            scope.$apply();
        });
    };
    return {
        restrict: 'A',
        link: linker
    };
});