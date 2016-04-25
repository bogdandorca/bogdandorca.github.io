angular.module('app').controller('AboutCtrl', function($scope){
    var startDate = moment('1365406455', 'X');
    var currentDate = moment();
    $scope.yearsOfExperience = currentDate.diff(startDate, 'years');

    $scope.content = {
        pageTitle: 'A few things about myself',
        categories: [
            {
                title: 'Experience',
                description: 'I have been working as a web developer for the past '+$scope.yearsOfExperience+' years. During this time I have worked with various companies, while also participating in collaborations, and taking on freelance projects whenever opportunity showed. I invested my free time in personal projects, aiming to develop my skill set in as many areas as I could. Many of said projects are available at GitHub.',
                iconClass: 'fa-clock-o'
            },
            {
                title: 'Motivation',
                description: 'I seek new challenges for myself in everything I do, always setting my expectation of both myself and my work higher. My goal is to give the best of me, no matter the project I\'m working on, and I will not set for anything less than perfect. Everything has to run smoothly and then I shall declare myself satisfied with my work.',
                iconClass: 'fa-bolt'
            },
            {
                title: 'Education',
                description: 'Currently, I am studying in Cluj-Napoca, Romania, at Faculty of Economics and Business Administration (Babes-Bolyai University), in the IT Economics department. Here I have acquired knowledge in both programming technologies and the economic/business fields of activity.',
                iconClass: 'fa-university'
            }
        ]
    };
});