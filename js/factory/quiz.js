(function(){

    angular.module("turtleFacts")
        .factory("quizMetrics", function(){
            var quizObj = {};
            
            quizObj.questions = {};
            quizObj.correctAnswers = [];
            quizObj.quizActive = false;
            quizObj.resultsActive = false;

            quizObj.changeState = function(metric, state){
                if(metric === "quiz"){
                    quizObj.quizActive = state;
                    quizObj.questions = quizQuestions;
                }else if(metric === "results"){
                    quizObj.resultsActive = state;
                }else{
                    return false;
                }
            }
            
            quizObj.markQuiz = function(){
                quizObj.correctAnswers = correctAnswers;
                for(var i = 0; i < quizObj.questions.length; i++){
                    if(quizObj.questions[i].selected === quizObj.correctAnswers[i]){
                        quizObj.questions[i].correct = true;
                    }else{
                        quizObj.questions[i].correct = false;
                    }
                }
            }

            return quizObj;
        });











    var correctAnswers = [1, 3, 0];

    var quizQuestions  = [
        {
            text: "This is the questions text 0",
            possibilities: [
                {
                    answer: "Hello this is question 0"
                },
                {
                    answer: "Hello this is question 1"
                },
                {
                    answer: "Hello this is question 2"
                },
                {
                    answer: "Hello this is question 3"
                }
            ],
            answered: false,
            selected: null,
            correct: null
        },
        {
            text: "This is the questions text 1",
            possibilities: [
                {
                    answer: "Hello this is question 0"
                },
                {
                    answer: "Hello this is question 1"
                },
                {
                    answer: "Hello this is question 2"
                },
                {
                    answer: "Hello this is question 3"
                }
            ],
            answered: false,
            selected: null,
            correct: null
        },
        {
            text: "This is the questions text 2",
            possibilities: [
                {
                    answer: "Hello this is question 0"
                },
                {
                    answer: "Hello this is question 1"
                },
                {
                    answer: "Hello this is question 2"
                },
                {
                    answer: "Hello this is question 3"
                }
            ],
            answered: false,
            selected: null,
            correct: null
        }
    ];



})();
