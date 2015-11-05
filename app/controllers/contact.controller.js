angular.module('app').controller('ContactCtrl', function($scope){
    $scope.content = {
        pageTitle: 'Get in touch',
        contactInfo: [
            {
                info: 'Cluj-Napoca, Romania',
                icon: 'fa-home'
            },
            {
                info: '+40 741 655 917',
                icon: 'fa-mobile'
            },
            {
                info: 'bogdandorca@gmail.com',
                icon: 'fa-envelope'
            },
            {
                info: '<a target="_" href="http://ro.linkedin.com/in/bogdandorca">LinkedIn</a>',
                icon: 'fa-linkedin'
            },
            {
                info: '<a target="_" href="http://github.com/bogdandorca">GitHub</a>',
                icon: 'fa-github'
            }
        ]
    };
});