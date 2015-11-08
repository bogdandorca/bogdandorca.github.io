/**
 * The partialNav directive is used to navigate through the pages
 * It detects the user's scroll using the HamsterJS library
 */
angular.module('app').directive('partialNav', function($window, $location, $timeout, $animate){
    var linker = function(scope, element, attr){
        var partials = ['/', '/about', '/skills', '/contact'];

        /**
         * The scroll should be disabled while the page is in transition
         * This is set in the $window object so that if the directive is reset,
         * the scroll delay will still be set
         */
        var scrollPause = function(){
            // The scrollSensitivity determines the timeout between the scroll checks
            var scrollSensitivity = 500;

            $window.scrollDisabled = true;
            $timeout(function(){
                $window.scrollDisabled = false;
            }, scrollSensitivity);
        };

        Hamster($window).wheel(function(event, delta, deltaX, deltaY){
            // The scroll is disabled while the page is in transition
            if(!$window.scrollDisabled){
                var currentIndex = partials.indexOf($location.path());
                // Check if the scroll is negative(down) or positive(up)
                if(delta < 1){
                    // If the next page is not out of bounds
                    if(currentIndex < partials.length-1){
                        scrollPause();

                        // Indent index and change page
                        $timeout(function(){
                            console.log(currentIndex);
                            currentIndex++;
                            $location.path(partials[currentIndex]);
                        }, 0);
                    }
                } else if(delta >= 1){
                    // If the current page is not the first one
                    if(currentIndex > 0){
                        scrollPause();

                        // Indent index and change page
                        $timeout(function(){
                            currentIndex--;
                            $location.path(partials[currentIndex]);
                        }, 0);
                    }
                }
                scope.$apply();
            }
        });

        /**
         * Add the specific class (next-page/prev-page) to the ng-view parent
         * in order to determine the animation type (page up/page down
         */
        scope.$on('$routeChangeStart', function(event, next, current){
            var nextRoute = next.$$route.originalPath;
            var currentRoute = current.$$route.originalPath;
            var pageEl = angular.element( document.querySelector( '#page' ) );
            /**
             * If the next partial is one of the "next" pages
             */
            if(partials.indexOf(nextRoute) > partials.indexOf(currentRoute)){
                $animate.addClass(pageEl, 'next-page');
                $animate.removeClass(pageEl, 'prev-page');
            } else {
                $animate.addClass(pageEl, 'prev-page');
                $animate.removeClass(pageEl, 'next-page');
            }
        });
    };
    return {
        restrict: 'A',
        link: linker
    };
});