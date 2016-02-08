(function(){
    angular
        .module("turtleFacts")
        .controller("resultsCtrl", ResultsController);

    ResultsController.$inject = ['$scope', 'quizMetrics'];

    function ResultsController($scope, quizMetrics){
        $scope.quizMetrics = quizMetrics;
        $scope.setActiveQuestion = setActiveQuestion;
        $scope.getAnswerClass = getAnswerClass;
        $scope.reset = reset;
        $scope.calculatePerc = calculatePerc;
        $scope.activeQuestion = 0;

        function setActiveQuestion(index){
            $scope.activeQuestion = index;
        }
        function getAnswerClass(index){
            if(index === quizMetrics.correctAnswers[$scope.activeQuestion]){
                return "bg-success";
            }else if(index === quizMetrics.questions[$scope.activeQuestion].selected){
                return "bg-danger";
            }
        }
        function reset(){
            quizMetrics.changeState("results", false);

            for(var i = 0; i < quizMetrics.questions.length; i++){
                data = quizMetrics.questions[i];
                data.selected = null;
                data.correct = null;
                data.answered = false;
            }
        }
        function calculatePerc(){
            return quizMetrics.numCorrect / quizMetrics.questions.length * 100;
        }

    }

})();
