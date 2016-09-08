(function() {
    function MeetingCtrl(Room, $stateParams, $firebaseArray, $cookies) {
        this.roomId = $stateParams.meetingId;

        var ref = firebase.database().ref().child("messages").orderByChild("roomId").equalTo(this.roomId);
        this.messages = $firebaseArray(ref);
        
        function createRoom(name) {
            console.log(name);
        }
        
        this.room = Room.getRoomById($stateParams.meetingId);
        
        this.addMessage = function() {
            this.messages.$add({
                user: $cookies.get('chatStatCurrentUser'),
                message: this.message,
                roomId: this.roomId
            }).then(function() {
                console.log("it worked!");
                this.message = "";
            });

    }
    
    angular
        .module('chatstat')
        .controller('MeetingCtrl', ['Room', '$stateParams', '$firebaseArray', '$cookies', MeetingCtrl]);
})();