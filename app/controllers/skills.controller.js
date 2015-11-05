angular.module('app').controller('SkillsCtrl', function($scope){
    $scope.content = {
        pageTitle: 'Key Skills',
        skills: [
            {
                name: 'HTML',
                icon: '/assets/images/skills/html5.png'
            },
            {
                name: 'CSS',
                icon: '/assets/images/skills/css3.png'
            },
            {
                name: 'JavaScript',
                icon: '/assets/images/skills/js.png'
            },
            {
                name: 'AngularJS',
                icon: '/assets/images/skills/angular.png'
            },
            {
                name: 'Sass',
                icon: '/assets/images/skills/sass.png'
            },
            {
                name: 'Gulp',
                icon: '/assets/images/skills/gulp.png'
            },
            {
                name: 'Node',
                icon: '/assets/images/skills/node.png'
            },
            {
                name: 'Jade',
                icon: '/assets/images/skills/jade.png'
            },
            {
                name: 'MongoDB',
                icon: '/assets/images/skills/mongo.png'
            }
        ]
    };
});