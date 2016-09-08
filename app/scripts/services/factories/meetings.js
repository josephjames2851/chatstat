(function() {
    function Meetings() {
        var Meetings = {};
        
        var generalHealth = {
            title: 'General Health',
            host: 'Dr. John Anderson',
            startTime: 900,
            endTime: 1100,
            duration: 2
        };

        var medicine = {
            title: 'Medicine',
            host: 'Dr. Susan Anthony',
            startTime: 900,
            endTime: 1100,
            duration: 2
        };
        
        var mentalHealth = {
            title: 'Mental Health',
            host: 'Dr. Greg Best',
            startTime: 900,
            endTime: 1100,
            duration: 2
        };
        
        return Meetings;
    }
    
    angular
        .module('chatstat')
        .factory('Meetings', Meetings);
})();