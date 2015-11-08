angular.module('app', ['ngRoute', 'ngAnimate', 'ngSanitize']).config(function($routeProvider, $locationProvider){
    $routeProvider
        .when('/', {
            controller: 'HomeCtrl',
            templateUrl: '/partials/home.partial.html'
        })
        .when('/about', {
            controller: 'AboutCtrl',
            templateUrl: '/partials/about.partial.html'
        })
        .when('/skills', {
            controller: 'SkillsCtrl',
            templateUrl: '/partials/skills.partial.html'
        })
        .when('/contact', {
            controller: 'ContactCtrl',
            templateUrl: '/partials/contact.partial.html'
        })
        .otherwise({
            redirectTo: '/'
        });
    $locationProvider.html5Mode(true);
});
angular.module('app').controller('AboutCtrl', function($scope){
    $scope.content = {
        pageTitle: 'A few things about myself',
        categories: [
            {
                title: 'Experience',
                description: 'I have been working as a web developer for the past 2 years. During this time I have worked with various companies, while also participating in collaborations, and taking on freelance projects whenever opportunity showed. I invested my free time in personal projects, aiming to develop my skill set in as many areas as I could. Many of said projects are available at GitHub.',
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
angular.module('app').controller('ContactCtrl', function($scope, $sce){
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
                info: $sce.trustAsHtml('<a target="_" href="http://ro.linkedin.com/in/bogdandorca">LinkedIn</a>'),
                icon: 'fa-linkedin'
            },
            {
                info: $sce.trustAsHtml('<a target="_" href="http://github.com/bogdandorca">GitHub</a>'),
                icon: 'fa-github'
            }
        ]
    };
});
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
angular.module('app').directive('appLogo', function(){
    var linker = function(scope, element, attr){
        if(attr.fill){
            scope.fill = attr.fill;
        } else {
            scope.fill = '#FFFFFF';
        }
    };
    return {
        restrict: 'E',
        link: linker,
        template: '<?xml version="1.0" encoding="utf-8"?>' +
            '<!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->' +
        '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">' +
        '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"' +
        'width="479.94px" height="479.94px" viewBox="0 0 479.94 479.94" enable-background="new 0 0 479.94 479.94" xml:space="preserve">' +
        '<g><g><path fill-rule="evenodd" clip-rule="evenodd" fill="none" d="M267.996,0.03c70.973,0,141.945,0,212.947,0' +
        'c0,160.253,0,320.505,0,480.849c-160.186,0-320.396,0-480.761,0c0-160.223,0-320.536,0-480.849c87.215,0,174.515,0,261.815,0' +
        'c-0.314,0.309-0.61,0.866-0.945,0.892c-18.002,1.346-33.44,8.585-46.992,20.261c-1.126,0.97-2.605,1.531-4.59,2.665' +
        'c0-4.889,0-8.763-0.001-12.639c-0.31-0.06-0.654-0.235-0.92-0.152c-0.913,0.284-1.862,0.545-2.685,1.015' +
        'c-16.72,9.563-30.237,22.401-39.905,39.158c-6.409,11.108-11.332,22.801-14.069,35.377c-0.49,2.252-1.028,4.258-4.422,3.975' +
        'c-6.123-0.509-12.317-0.148-18.443-0.628c-4.179-0.327-7.227,1.075-10.25,3.784c-6.427,5.758-13.307,11.018-19.628,16.883' +
        'c-4.687,4.348-10.583,7.822-12.143,14.904c-0.256,1.164-2.154,2.188-3.501,2.856c-18.645,9.248-37.402,18.272-55.965,27.679' +
        'c-8.909,4.515-13.681,19.98-9.209,28.85c5.622,11.15,11.412,22.218,17.313,33.223c0.704,1.313,2.474,2.725,3.885,2.883' +
        'c16.1,1.793,32.214,3.484,48.354,4.852c2.925,0.247,4.237,1.309,4.775,3.791c0.571,2.64,0.927,5.326,1.384,8.038' +
        'c-16.183,0-31.901,0-47.96,0c2.37,6.593,4.796,12.822,6.788,19.185c0.625,2,0.621,4.537-0.022,6.529' +
        'c-1.998,6.178-4.441,12.213-6.705,18.285c6.678,0.537,12.942,1.041,19.472,1.566c2.152,6.738,4.33,13.563,6.624,20.746' +
        'c1.925-1.824,3.52-3.064,4.776-4.584c2.833-3.426,4.911-2.984,7.207,0.678c2.604,4.152,5.641,8.031,8.75,12.395' +
        'c2.786-3.129,5.605-5.719,7.72-8.793c4.282-6.225,11.608-10.318,13.041-18.707c2.655,0,5.333,0.195,7.962-0.076' +
        'c1.495-0.154,3.303-0.689,4.304-1.707c12.716-12.936,25.365-25.938,37.841-39.102c1.112-1.174,1.534-3.732,1.19-5.428' +
        'c-1.558-7.678-3.506-15.277-5.301-22.85c2.725-1.078,4.763-2.368,6.933-2.652c6.819-0.895,9.968-5.07,11.34-11.34' +
        'c0.871-3.979,1.619-8.091,3.262-11.768c2.3-5.152,1.697-9.53-0.713-14.518c-4.261-8.816-7.828-17.971-11.534-27.047' +
        'c-0.523-1.279-0.767-3.854-0.157-4.229c5.064-3.109,10.359-5.842,16.111-8.977c0,2.052,0.331,3.189-0.052,3.985' +
        'c-3.96,8.246-2.952,16.017,1.957,23.503c0.353,0.536,0.461,1.229,0.708,1.838c2.934,7.225,8.064,14.409,8.196,21.684' +
        'c0.133,7.342-5.148,14.646-7.222,22.197c-2.188,7.958-5.4,14.281-15.265,14.66c1.527,6.441,3.126,12.141,4.136,17.944' +
        'c0.408,2.344,0.454,5.744-0.903,7.254c-15.687,17.439-31.654,34.627-47.628,51.807c-1.015,1.092-2.996,2.492-4.019,2.164' +
        'c-4.9-1.576-7.372,0.783-10.279,4.348c-22.539,27.641-40.147,57.543-44.67,93.754c-2.446,19.58-1.716,38.91,4.806,57.676' +
        'c2.489,7.162,5.897,14.006,8.825,20.85c4.213-10.879,7.762-21.158,12.135-31.072c6.778-15.361,17.15-28.254,28.967-40.068' +
        'c1.08-1.078,2.123-3.781,1.545-4.689c-7.466-11.738-10.625-24.717-11.864-38.348c-0.767-8.43,0.205-16.617,2.701-24.756' +
        'c5.694,26.088,16.563,49.463,33.49,70.658c8.787-10.42,17.121-20.303,25.437-30.162c-13.834-18.717-22.701-38.988-21.674-62.666' +
        'c2.429,3.232,4.076,6.762,5.688,10.307c9.587,21.072,21.034,40.949,37.927,57.123c6.767,6.479,14.101,12.346,23.378,15.75' +
        'c3.818-9.68,7.606-18.947,11.032-28.348c0.494-1.355-0.235-3.828-1.286-4.955c-4.299-4.617-9.006-8.848-13.446-13.336' +
        'c-14.398-14.553-25.691-31.027-31.081-51.061c-0.674-2.506-0.936-5.123-1.389-7.689c0.479-0.236,0.958-0.475,1.438-0.713' +
        'c23.436,46.84,60.917,74.879,112.075,85.66c1.508-12.445,2.867-23.875,4.291-35.297c0.4-3.209-0.098-5.488-3.578-7.023' +
        'c-4.79-2.113-9.295-4.895-13.85-7.516c-22.021-12.678-42.433-27.398-58.435-47.436c-4.091-5.121-7.287-10.959-10.895-16.467' +
        'c0.57-0.549,1.141-1.098,1.711-1.646c40.343,39.639,86.319,68.738,141.915,78.207c-0.963-16.441-1.832-32.385-2.969-48.309' +
        'c-0.08-1.127-1.977-2.773-3.281-3.072c-22.199-5.08-44.18-10.963-65.045-20.188c-21.775-9.627-42.117-21.582-57.947-39.93' +
        'c-1.729-2.005-3.104-4.315-4.643-6.484c1.899-0.332,3.05,0.114,4.027,0.806c6.299,4.456,12.451,9.126,18.852,13.431' +
        'c34.793,23.397,73.746,34.827,114.988,39.192c15.518,1.641,31.164,2.033,46.734,3.236c7.914,0.613,15.857,1.365,23.658,2.771' +
        'c9.303,1.678,18.465,4.123,27.689,6.234c0.268,0.193,0.535,0.385,0.803,0.576c-0.139-0.326-0.275-0.65-0.414-0.977' +
        'c-0.613-1.867-0.898-3.932-1.889-5.57c-10.393-17.207-25.391-30.117-40.5-42.881c-1.104-0.932-3.119-1.107-4.707-1.094' +
        'c-35.127,0.309-70.107-1.733-104.633-8.323c-16.941-3.232-33.569-8.122-50.306-12.394c-1.845-0.471-3.468-1.81-5.194-2.745' +
        'c3.002-0.684,5.604-0.391,8.199-0.036c17.758,2.431,35.449,6.015,53.287,7.04c24.91,1.43,49.943,0.55,74.898,1.422' +
        'c19.883,0.694,39.73,2.46,59.58,3.925c3.623,0.267,7.184,1.376,10.773,2.097c0.273-0.369,0.547-0.739,0.82-1.108' +
        'c-4.607-7.386-9.059-14.874-13.852-22.136c-15.746-23.861-36.861-38.113-66.576-36.824c-23.203,1.008-46.428,1.662-69.613,2.986' +
        'c-13.986,0.799-27.917,2.596-41.878,3.879c-0.901,0.083-1.853-0.391-2.78-0.605c0.035-0.549,0.07-1.098,0.105-1.646' +
        'c62.967-17.641,126.604-18.066,191.326-6.125c-19.131-52.02-57.293-71.814-110.607-67.669c2.846-1.839,5.641-3.659,8.475-3.728' +
        'c14.404-0.351,28.818-0.212,43.229-0.33c2.758-0.023,5.859,0.305,8.203-0.801c6.557-3.096,12.801-6.857,19.471-10.522' +
        'c-14.588-12.91-31.166-21.49-49.592-26.453c-18.145-4.887-36.707-6.806-55.707-6.713c1.086-1.29,2.258-2.092,3.518-2.269' +
        'c7.977-1.12,15.953-2.743,23.965-2.977c11.924-0.348,19.842-8.367,30.393-13.31c-30.172-11.211-59.738-9-89.508-4.183' +
        'c3.867-4.743,9.294-5.619,14.492-6.507c7.826-1.337,15.125-3.345,20.623-10.402c-23.189-5.557-45.678-1.979-69.459,2.818' +
        'c1.994-3.428,3.055-5.448,4.298-7.348C263.342,6.757,265.691,3.408,267.996,0.03z"/>' +
        '<path fill-rule="evenodd" clip-rule="evenodd" d="M461.857,291.111c-9.225-2.113-18.387-4.559-27.689-6.236' +
        'c-7.801-1.406-15.744-2.158-23.658-2.771c-15.57-1.203-31.217-1.596-46.734-3.236c-41.242-4.365-80.195-15.795-114.988-39.192' +
        'c-6.4-4.305-12.553-8.975-18.852-13.431c-0.978-0.691-2.128-1.138-4.027-0.806c1.539,2.169,2.913,4.479,4.643,6.484' +
        'c15.83,18.348,36.172,30.303,57.947,39.93c20.865,9.225,42.846,15.107,65.045,20.188c1.305,0.299,3.201,1.945,3.281,3.072' +
        'c1.137,15.924,2.006,31.867,2.969,48.309c-55.596-9.469-101.572-38.568-141.915-78.207c-0.57,0.549-1.141,1.098-1.711,1.646' +
        'c3.607,5.508,6.804,11.346,10.895,16.467c16.002,20.037,36.414,34.758,58.435,47.436c4.555,2.621,9.06,5.402,13.85,7.516' +
        'c3.48,1.535,3.979,3.814,3.578,7.023c-1.424,11.422-2.783,22.852-4.291,35.297c-51.158-10.781-88.64-38.82-112.075-85.66' +
        'c-0.479,0.238-0.958,0.477-1.438,0.713c0.453,2.566,0.715,5.184,1.389,7.689c5.39,20.033,16.683,36.508,31.081,51.061' +
        'c4.44,4.488,9.147,8.719,13.446,13.336c1.051,1.127,1.78,3.6,1.286,4.955c-3.426,9.4-7.214,18.668-11.032,28.348' +
        'c-9.277-3.404-16.611-9.271-23.378-15.75c-16.894-16.174-28.34-36.051-37.927-57.123c-1.613-3.545-3.259-7.074-5.688-10.307' +
        'c-1.026,23.678,7.84,43.949,21.674,62.666c-8.315,9.859-16.65,19.742-25.437,30.162c-16.927-21.195-27.795-44.57-33.49-70.658' +
        'c-2.496,8.139-3.467,16.326-2.701,24.756c1.239,13.631,4.398,26.609,11.864,38.348c0.577,0.908-0.466,3.611-1.545,4.689' +
        'c-11.817,11.814-22.189,24.707-28.967,40.068c-4.373,9.914-7.921,20.193-12.135,31.072c-2.928-6.844-6.336-13.688-8.825-20.85' +
        'c-6.521-18.766-7.251-38.096-4.806-57.676c4.523-36.211,22.131-66.113,44.67-93.754c2.907-3.564,5.378-5.924,10.279-4.348' +
        'c1.022,0.328,3.003-1.072,4.019-2.164c15.974-17.18,31.941-34.367,47.628-51.807c1.357-1.51,1.312-4.91,0.903-7.254' +
        'c-1.01-5.803-2.608-11.502-4.136-17.944c9.864-0.379,13.077-6.702,15.265-14.66c2.073-7.551,7.354-14.855,7.222-22.197' +
        'c-0.132-7.274-5.263-14.459-8.196-21.684c-0.247-0.609-0.355-1.302-0.708-1.838c-4.909-7.486-5.917-15.257-1.957-23.503' +
        'c0.383-0.796,0.052-1.934,0.052-3.985c-5.752,3.135-11.047,5.867-16.111,8.977c-0.61,0.375-0.366,2.949,0.157,4.229' +
        'c3.706,9.076,7.273,18.23,11.534,27.047c2.41,4.987,3.013,9.365,0.713,14.518c-1.643,3.677-2.391,7.789-3.262,11.768' +
        'c-1.372,6.27-4.521,10.445-11.34,11.34c-2.169,0.284-4.208,1.574-6.933,2.652c1.795,7.572,3.743,15.172,5.301,22.85' +
        'c0.344,1.696-0.078,4.254-1.19,5.428c-12.476,13.164-25.125,26.166-37.841,39.102c-1.001,1.018-2.809,1.553-4.304,1.707' +
        'c-2.629,0.271-5.307,0.076-7.962,0.076c-1.433,8.389-8.758,12.482-13.041,18.707c-2.114,3.074-4.934,5.664-7.72,8.793' +
        'c-3.109-4.363-6.146-8.242-8.75-12.395c-2.295-3.662-4.374-4.104-7.207-0.678c-1.256,1.52-2.851,2.76-4.776,4.584' +
        'c-2.294-7.184-4.472-14.008-6.624-20.746c-6.53-0.525-12.794-1.029-19.472-1.566c2.264-6.072,4.707-12.107,6.705-18.285' +
        'c0.644-1.992,0.648-4.529,0.022-6.529c-1.992-6.363-4.418-12.592-6.788-19.185c16.059,0,31.777,0,47.96,0' +
        'c-0.458-2.712-0.813-5.398-1.384-8.038c-0.538-2.482-1.85-3.544-4.775-3.791c-16.14-1.367-32.255-3.059-48.354-4.852' +
        'c-1.411-0.158-3.182-1.57-3.885-2.883c-5.901-11.005-11.691-22.072-17.313-33.223c-4.472-8.869,0.3-24.335,9.209-28.85' +
        'c18.563-9.406,37.32-18.431,55.965-27.679c1.347-0.669,3.245-1.692,3.501-2.856c1.56-7.082,7.456-10.557,12.143-14.904' +
        'c6.321-5.865,13.201-11.125,19.628-16.883c3.023-2.709,6.07-4.111,10.25-3.784c6.126,0.479,12.321,0.119,18.443,0.628' +
        'c3.394,0.283,3.932-1.723,4.422-3.975c2.737-12.576,7.66-24.269,14.069-35.377c9.667-16.756,23.185-29.594,39.905-39.158' +
        'c0.822-0.47,1.771-0.731,2.685-1.015c0.266-0.083,0.61,0.093,0.92,0.152c0.001,3.876,0.001,7.75,0.001,12.639' +
        'c1.984-1.133,3.464-1.694,4.59-2.665c13.552-11.676,28.99-18.915,46.992-20.261c0.335-0.025,0.631-0.583,0.945-0.892' +
        'c2,0,3.999,0,5.999,0c-2.305,3.378-4.654,6.727-6.896,10.147c-1.243,1.9-2.304,3.919-4.298,7.348' +
        'c23.781-4.798,46.27-8.375,69.459-2.818c-5.498,7.057-12.797,9.065-20.623,10.402c-5.198,0.888-10.625,1.765-14.492,6.507' +
        'c29.77-4.817,59.336-7.028,89.508,4.183c-10.551,4.943-18.469,12.962-30.393,13.31c-8.012,0.234-15.988,1.857-23.965,2.977' +
        'c-1.26,0.177-2.432,0.979-3.518,2.269c19-0.093,37.563,1.826,55.707,6.713c18.426,4.963,35.004,13.542,49.592,26.453' +
        'c-6.67,3.665-12.914,7.427-19.471,10.522c-2.344,1.105-5.445,0.777-8.203,0.801c-14.41,0.118-28.824-0.021-43.229,0.33' +
        'c-2.834,0.068-5.629,1.889-8.475,3.728c53.314-4.146,91.477,15.649,110.607,67.669c-64.723-11.941-128.359-11.516-191.326,6.125' +
        'c-0.035,0.549-0.07,1.098-0.105,1.646c0.928,0.215,1.879,0.688,2.78,0.605c13.961-1.283,27.892-3.08,41.878-3.879' +
        'c23.186-1.324,46.41-1.979,69.613-2.986c29.715-1.289,50.83,12.963,66.576,36.824c4.793,7.262,9.244,14.75,13.852,22.136' +
        'c-0.273,0.369-0.547,0.739-0.82,1.108c-3.59-0.721-7.15-1.83-10.773-2.097c-19.85-1.465-39.697-3.23-59.58-3.925' +
        'c-24.955-0.872-49.988,0.008-74.898-1.422c-17.838-1.025-35.529-4.609-53.287-7.04c-2.596-0.354-5.197-0.647-8.199,0.036' +
        'c1.727,0.936,3.35,2.274,5.194,2.745c16.736,4.271,33.364,9.161,50.306,12.394c34.525,6.59,69.506,8.631,104.633,8.323' +
        'c1.588-0.014,3.604,0.162,4.707,1.094c15.109,12.764,30.107,25.674,40.5,42.881c0.99,1.639,1.275,3.703,1.889,5.57' +
        'C462.117,290.846,461.988,290.979,461.857,291.111z M199.63,126.386c14.456,0.914,12.122,2.263,17.716-8.871' +
        'c8.479-16.878,8.984-34.821,5.351-53.042c-1.414-7.085-2.846-7.974-9.265-4.319c-13.82,7.871-24.646,19.033-33.6,32.079' +
        'c-0.371,0.541-0.789,1.159-0.855,1.777c-0.13,1.203-0.026,2.431-0.02,3.648c1.226-0.112,2.701,0.175,3.635-0.406' +
        'c3.949-2.458,7.715-5.208,11.591-7.786c5.031-3.348,10.103-6.634,15.97-10.479C208.96,96.088,207.431,111.839,199.63,126.386z' +
        'M119.47,132.757c-0.204-0.297-0.407-0.594-0.61-0.891c-10.645,3.148-21.29,6.297-32.754,9.688' +
        'c4.125,5.441,7.765,10.244,11.795,15.562C105.287,148.775,112.379,140.766,119.47,132.757z M35.667,196.626' +
        'c0.485,0.029,0.969,0.058,1.454,0.087c2.745-7.101,5.49-14.202,8.696-22.495c-6.901,1.869-12.543,3.396-18.7,5.063' +
        'C30.155,185.443,32.911,191.035,35.667,196.626z"/>' +
        '<path fill-rule="evenodd" clip-rule="evenodd" d="M462.246,290.709c0.139,0.326,0.275,0.65,0.414,0.977' +
        'c-0.268-0.191-0.535-0.383-0.803-0.576C461.988,290.979,462.117,290.846,462.246,290.709z"/>' +
        '<path fill-rule="evenodd" clip-rule="evenodd" fill="none" d="M199.63,126.386c7.801-14.547,9.33-30.298,10.522-47.399' +
        'c-5.867,3.845-10.938,7.131-15.97,10.479c-3.876,2.578-7.642,5.328-11.591,7.786c-0.934,0.581-2.409,0.294-3.635,0.406' +
        'c-0.007-1.218-0.11-2.445,0.02-3.648c0.066-0.618,0.484-1.236,0.855-1.777c8.953-13.045,19.779-24.208,33.6-32.079' +
        'c6.419-3.655,7.851-2.766,9.265,4.319c3.634,18.221,3.129,36.164-5.351,53.042C211.752,128.649,214.086,127.3,199.63,126.386z"/>' +
        '<path fill-rule="evenodd" clip-rule="evenodd" fill="none" d="M119.47,132.757c-7.091,8.009-14.183,16.018-21.568,24.358' +
        'c-4.03-5.317-7.67-10.12-11.795-15.562c11.464-3.391,22.109-6.539,32.754-9.688C119.063,132.164,119.267,132.46,119.47,132.757z"' +
        '/>' +
        '<path fill-rule="evenodd" clip-rule="evenodd" fill="none" d="M35.667,196.626c-2.756-5.592-5.513-11.184-8.55-17.345' +
        'c6.157-1.667,11.799-3.194,18.7-5.063c-3.206,8.293-5.951,15.395-8.696,22.495C36.637,196.684,36.152,196.656,35.667,196.626z"/>' +
        '</g>' +
        '</g>' +
        '</svg>'
    };
});
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