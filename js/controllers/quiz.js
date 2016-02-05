(function(){
    angular.module("turtleFacts")
        .controller("quizCtrl", function($scope, quizMetrics){
            $scope.quizMetrics = quizMetrics;
            $scope.activeQuestion = 0;
            $scope.finalise = false;
            $scope.error = false;
            var numQuestionsAnswered = 0;
            

            $scope.setActiveQuestion = function(data){
                if(typeof data === "undefined"){
                    var breakOut = false;
                    var origActiveQuestion = $scope.activeQuestion;
                    while(!breakOut){
                        $scope.activeQuestion++;
                        if(quizMetrics.questions[$scope.activeQuestion].selected === null){
                            breakOut = true;
                        }else if($scope.activeQuestion === quizMetrics.questions.length - 1 && numQuestionsAnswered === quizMetrics.questions.length - 1){
                            $scope.activeQuestion = origActiveQuestion;
                            // trigger display error here
                            $scope.error = true;
                            breakOut = true;
                        }else{
                            $scope.questionsAnswered();
                        }
                    }
                }else{
                    $scope.activeQuestion = data; 
                }
                
            }
            $scope.questionAnswered = function(){
                if(quizMetrics.questions[$scope.activeQuestion].selected != null){
                    numQuestionsAnswered++;
                }
                if(numQuestionsAnswered >= quizMetrics.questions.length){
                    $scope.finalise = true;
                    $scope.error = false;
                    return;
                }
                
                if($scope.activeQuestion < quizMetrics.questions.length - 1){
                    $scope.setActiveQuestion();
                }else if($scope.activeQuestion === quizMetrics.questions.length - 1){
                    for(var i = 0; i < quizMetrics.questions.length; i++){
                        data = quizMetrics.questions[i];

                        if(data.selected === null){
                            // trigger display error here
                            $scope.error = true;
                            $scope.setActiveQuestion(i);
                            break;
                        }
                    }
                }
            }
            $scope.selectAnswer = function(index){
                quizMetrics.questions[$scope.activeQuestion].selected = index;
            }
            $scope.finaliseAnswers = function(){
                $scope.finalise = false;
                numQuestionsAnswered = 0;
                $scope.activeQuestion = 0;
                quizMetrics.markQuiz();
                quizMetrics.changeState("quiz", false);
                quizMetrics.changeState("results", true);
            } 
        });

})();
