(function() {
    function Room($firebaseArray, $firebaseObject) {
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        
        function getRoomById(roomId) {
            // make a firebase request for the room by id
            var roomRef = firebase.database().ref('rooms/' + roomId);
            var roomData = $firebaseObject(roomRef);
            console.log(roomData);
            return roomData;
        }
        
        function createRoom(name) {
            console.log(name);
            rooms.$add({ 
                name: name
            }).then(function() {
                console.log("it worked!");
            })
        }
                
        return {
            all: rooms,
            createRoom: createRoom,
            getRoomById: getRoomById
        };
    }
    
    angular
        .module('chatstat')
        .factory('Room', ['$firebaseArray', '$firebaseObject', Room]);
    
})();