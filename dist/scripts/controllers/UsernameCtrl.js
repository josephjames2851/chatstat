(function () {
  function ChatStatCookies($cookies, $uibModal) {
      var currentUser = $cookies.get('chatStatCurrentUser');
      
      if (!currentUser || currentUser === '') {
          $uibModal.open({
              templateUrl: '../templates/username-modal.html',
              controller: 'UsernameCtrl',
              controllerAs: '$ctrl'
          })
      }
  }
    
    angular
        .module('chatstat')
        .run(['$cookies', '$uibModal', ChatStatCookies]);
    
})();