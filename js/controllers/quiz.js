(function(){
    angular.module("turtleFacts")
        .controller("quizCtrl", function($scope, quizMetrics){
            $scope.quizMetrics = quizMetrics;
            $scope.activeQuestion = 0;
            $scope.finalise = false;
            $scope.error = false;
            var numQuestionsAnswered = 0;
            
            $scope.setActiveQuestion = function(data){
                if(!data){
                    var breakOut = false;
                    var quizLength = quizMetrics.questions.length - 1;
                    while(!breakOut){
                        $scope.activeQuestion = $scope.activeQuestion < quizLength?++$scope.activeQuestion:0;
                        if(!quizMetrics.questions[$scope.activeQuestion].selected){
                            breakOut = true;
                        }else if($scope.activeQuestion === quizLength){
                            // trigger display error here
                            $scope.error = true;
                        }
                    }
                }else{
                    $scope.activeQuestion = data; 
                }
            };
            $scope.questionAnswered = function(){
                var quizLength = quizMetrics.questions.length; 
                if(quizMetrics.questions[$scope.activeQuestion].selected !== null){
                    numQuestionsAnswered++;
                    if(numQuestionsAnswered >= quizLength){
                        $scope.finalise = true;
                        $scope.error = false;
                        return;
                    }
                }
                if($scope.activeQuestion < quizLength - 1){
                    $scope.setActiveQuestion();
                }else if($scope.activeQuestion === quizLength - 1){
                    for(var i = 0; i < quizLength; i++){
                        data = quizMetrics.questions[i];

                        if(!data.selected){
                            // trigger display error here
                            $scope.error = true;
                            $scope.setActiveQuestion(i);
                            break;
                        }
                    }
                }
            };
            $scope.selectAnswer = function(index){
                quizMetrics.questions[$scope.activeQuestion].selected = index;
            };
            $scope.finaliseAnswers = function(){
                $scope.finalise = false;
                numQuestionsAnswered = 0;
                $scope.activeQuestion = 0;
                quizMetrics.markQuiz();
                quizMetrics.changeState("quiz", false);
                quizMetrics.changeState("results", true);
            };
        });

})();
