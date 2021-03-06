(function() {
     function config($stateProvider, $locationProvider) {
         $locationProvider
             .html5Mode({
                 enabled: true,
                 requireBase: false
             });
         
         $stateProvider
             .state('main', {
                 url: '/',
                 templateUrl: '/templates/main.html',
                 controller: 'MainCtrl as main'
             })
         
            .state('meeting', {
                 url: '/meeting/:meetingId',
                 templateUrl: '/templates/meeting.html',
                 controller: 'MeetingCtrl as meeting'
             });
     }

angular
    .module('chatstat', ['ui.router', 'firebase', 'ngCookies', 'ui.bootstrap'])
    .config(config);
})();