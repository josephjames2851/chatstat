(function() {
    function MainCtrl() {
        console.log("Hello from the main controller");
        this.categoryList = [
            {
                title: "General Health",
                startTime: "9:00am",
                endTime: "11:00am"
            },
            {
                title: "Medicine",
                startTime: "9:00am",
                endTime: "11:00am"
            },
            {
                title: "Mental Health",
                startTime: "9:00am",
                endTime: "11:00am"
            }
        ];
    }
    
    angular
        .module('chatstat')
        .controller('MainCtrl', MainCtrl);
})();