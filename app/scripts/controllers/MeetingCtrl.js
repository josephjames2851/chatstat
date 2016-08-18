(function() {
    function MeetingCtrl($stateParams) {
        this.roomId = $stateParams.meetingId;
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
        .controller('MeetingCtrl', ['$stateParams', MeetingCtrl]);
})();