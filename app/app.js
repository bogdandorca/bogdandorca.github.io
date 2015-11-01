angular.module('app', []).config(function($locationProvider){
    $locationProvider.html5Mode(true);
});
angular.module('app').controller('HomeCtrl', function($scope){
	$scope.message = "Hello world!";
});