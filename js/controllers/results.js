(function(){
    angular.module("turtleFacts")
        .controller("resultsCtrl", function($scope, quizMetrics){
            $scope.quizMetrics = quizMetrics;
            $scope.activeQuestion = 0;

            $scope.setActiveQuestion = function(index){
                $scope.activeQuestion = index;
            }
            $scope.getAnswerClass = function(index){
                if(index === quizMetrics.correctAnswers[$scope.activeQuestion]){
                    return "bg-success";
                }else if(index === quizMetrics.questions[$scope.activeQuestion].selected){
                    return "bg-danger";
                }
            }
            $scope.reset = function(){
                quizMetrics.changeState("results", false);

                for(var i = 0; i < quizMetrics.questions.length; i++){
                    data = quizMetrics.questions[i];
                    data.selected = null;
                    data.correct = null;
                    data.answered = false;
                }
            }

        });
})();
