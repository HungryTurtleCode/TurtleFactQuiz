(function(){
    
    angular
        .module("turtleFacts")   
        .controller("listCtrl", ListController);

    ListController.$inject = ['$scope', 'quizMetrics', 'DataService'];

    function ListController($scope, quizMetrics, dataService){

        $scope.quizMetrics = quizMetrics;
        $scope.data = dataService.turtlesData;
        $scope.changeActiveTurtle = changeActiveTurtle;
        $scope.activateQuiz = activateQuiz;
        $scope.activeTurtle = {};
        $scope.search = "";

        function changeActiveTurtle(data){
            $scope.activeTurtle = data;
        }
        function activateQuiz(state){
            quizMetrics.changeState("quiz", state);
        }
    }

})();
