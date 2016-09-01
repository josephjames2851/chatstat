(function() {
    function UsernameCtrl($scope, $cookies, Room, Meetings) {
        console.log("Hello from the username controller");
        
        this.setUsername = function() {
            console.log($scope.username);
            $cookies.put("chatStatCurrentUser", $scope.username);
        }
        
    }
    
    function ModalInstanceCtrl($scope, $cookies, $modalInstance) {
        $scope.setUsername = function () {
            $modalInstance.close('username');
        };
    }
    
    angular
        .module('chatstat')
        .controller('UsernameCtrl', ['$scope', '$cookies', 'Room', 'Meetings', UsernameCtrl]);
        
})();