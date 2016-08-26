(function() {
    function MeetingCtrl(Room, $stateParams) {
        this.roomId = $stateParams.meetingId;
        // use the room id to request the room data from the Room service
        this.room = Room.getRoomById($stateParams.meetingId);
        console.log(this.room);
        console.log("Hello from the meeting controller");
        
        this.messages = [
            {
                user: "Kevin",
                message: "Hey!"
            }
        ];

    }
    
    angular
        .module('chatstat')
        .controller('MeetingCtrl', ['Room', '$stateParams', MeetingCtrl]);
})();