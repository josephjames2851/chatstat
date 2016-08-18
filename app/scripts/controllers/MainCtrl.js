(function() {
    function MainCtrl() {
        console.log("Hello from the main controller");
        this.categoryList = ["General Health", "Medicine", "Mental Health"];
    }
    
    angular
        .module('chatstat')
        .controller('MainCtrl', MainCtrl);
})();