angular.module('app').controller('HomeCtrl', function($scope){
	$scope.content = {
		salutation: 'Hello, my name is',
		name: ' Bogdan Dorca',
		titleLabel: 'I am a',
		title: 'Web Developer',
		continueMessage: 'Scroll Down if your want to find out more about what I do.',
		contactMeButtonText: 'Contact Me'
	};
});