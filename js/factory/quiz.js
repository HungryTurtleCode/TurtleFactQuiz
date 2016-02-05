(function(){

    angular.module("turtleFacts")
        .factory("quizMetrics", function(){
            var quizObj = {};
            
            quizObj.questions = {};
            quizObj.correctAnswers = [];
            quizObj.quizActive = false;
            quizObj.resultsActive = false;
            quizObj.numCorrect = 0;

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
                        quizObj.numCorrect++;
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
            type: "image",
            text: "This is the questions text 0",
            possibilities: [
                {
                    answer: "https://placeholdit.imgix.net/~text?txtsize=33&txt=800%C3%97800&w=800&h=800"
                },
                {
                    answer: "https://placeholdit.imgix.net/~text?txtsize=33&txt=800%C3%97800&w=800&h=800"
                },
                {
                    answer: "https://placeholdit.imgix.net/~text?txtsize=33&txt=800%C3%97800&w=800&h=800"
                },
                {
                    answer: "https://placeholdit.imgix.net/~text?txtsize=33&txt=800%C3%97800&w=800&h=800"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
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
            selected: null,
            correct: null
        },
        {
            type: "text",
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
            selected: null,
            correct: null
        }
    ];



})();
