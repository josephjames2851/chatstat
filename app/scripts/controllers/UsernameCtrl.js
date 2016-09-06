(function() {
    function UsernameCtrl($scope, $cookies, $uibModalInstance, Room, Meetings) {
        console.log("Hello from the username controller");
        
        this.setUsername = function() {
            console.log($scope.username);
            $cookies.put("chatStatCurrentUser", $scope.username);
            $uibModalInstance.close('username');
        }
        
    }
//    
//        $scope.setUsername = function () {
//            $uibModalInstance.close('username');
//        };
    
    
    angular
        .module('chatstat')
        .controller('UsernameCtrl', ['$scope', '$cookies', '$uibModalInstance', 'Room', 'Meetings', UsernameCtrl]);
        
})();