(function() {
    function MainCtrl($scope, Room, Meetings) {
        console.log("Hello from the main controller");
        this.room = Room;
        this.roomList = Room.all;
        
    }
    
    angular
        .module('chatstat')
        .controller('MainCtrl', ['$scope', 'Room', 'Meetings', MainCtrl]);
        
})();