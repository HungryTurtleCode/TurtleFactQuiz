(function(){

    angular
        .module("turtleFacts")
        .factory("quizMetrics", QuizFactory);

        QuizFactory.$inject = ['DataService'];

        function QuizFactory(dataService){

            var quizObj = {
                changeState : changeState,
                markQuiz : markQuiz,
                questions : {},
                correctAnswers : [],
                quizActive : false,
                resultsActive : false,
                numCorrect : 0
            };
           
            return quizObj;

            function changeState(metric, state){
                if(metric === "quiz"){
                    quizObj.quizActive = state;
                    quizObj.questions = dataService.quizQuestions;
                }else if(metric === "results"){
                    quizObj.resultsActive = state;
                }else{
                    return false;
                }
            }
            
            function markQuiz(){
                quizObj.correctAnswers = dataService.correctAnswers;
                for(var i = 0; i < quizObj.questions.length; i++){
                    if(quizObj.questions[i].selected === quizObj.correctAnswers[i]){
                        quizObj.questions[i].correct = true;
                        quizObj.numCorrect++;
                    }else{
                        quizObj.questions[i].correct = false;
                    }
                }
            }

        }

})();
