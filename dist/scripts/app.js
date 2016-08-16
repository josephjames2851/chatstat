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
                 templateUrl: '/templates/main.html'
             });
     }

angular
    .module('chatstat', ['ui.router', 'firebase'])
    .config(config);
})();