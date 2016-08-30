(function() {
    function MeetingCtrl(Room, $stateParams, $firebaseArray) {
        this.roomId = $stateParams.meetingId;

        var ref = firebase.database().ref().child("messages").orderByChild("roomId").equalTo(this.roomId);
        this.messages = $firebaseArray(ref);
        
        function createRoom(name) {
            console.log(name);
        }
        
        // use the room id to request the room data from the Room service
        this.room = Room.getRoomById($stateParams.meetingId);
        
        this.addMessage = function() {
            this.messages.$add({
                user: "Joe",
                message: this.message,
                roomId: this.roomId
            }).then(function() {
                console.log("it worked!");
                this.message = "";
            });
//            this.messages.push({ user: "Joe", message: this.message });
        
        }
        
//        this.messages = [
//            {
//                user: "Kevin",
//                message: "Hey!"
//            },
//            {
//                user: "Joe",
//                message: "Hello!"
//            }
//        ];

    }
    
    angular
        .module('chatstat')
        .controller('MeetingCtrl', ['Room', '$stateParams', '$firebaseArray', MeetingCtrl]);
})();