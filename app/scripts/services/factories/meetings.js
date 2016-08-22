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
        
//        Fixtures.getAlbum = function() {
//            return albumPicasso;
//        };
        
//        Fixtures.getCollection = function(numberOfAlbums) {
//            // return an array of objects
//            
//            var albums = [];
//            
//            for (var i = 0; i < numberOfAlbums; i++) {
//                albums.push(angular.copy(albumPicasso));
//            }
//            
//            return albums;
//        }
        
        return Meetings;
    }
    
    angular
        .module('chatstat')
        .factory('Meetings', Meetings);
})();