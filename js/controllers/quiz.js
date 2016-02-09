/*
 * Immediately Invoked Function Expression (IIFE) to avoid creating global 
 * variables and keep code safe
 */
(function(){

    /*
     * Call the angular module called turtleFacts that was created in js/app.js
     * then attach the controller quizCtrl to it.
     *
     * The quiz controller is added as a named function instead of an anon func
     * to keep the code clean and readable.
     */
    angular
        .module("turtleFacts")
        .controller("quizCtrl", QuizController);

    /*
     * Angular dependency injection to avoid issues when uglifying the code
     * Passing the dependencies as strings avoids them being changed when 
     * uglified.
     */
    QuizController.$inject = ['$scope', 'quizMetrics'];

    /*
     * function defintion of the quiz controller with $scope and quizMetrics as
     * args. 
     *
     * $scope is a angular service and quizMetrics is a service we created that
     * is defined in js/factory/quiz.js
     */
    function QuizController($scope, quizMetrics){

        /*
         * All the properties and methods that will be exposed to the view are 
         * declared below. Declaring them like this allows you to take a quick 
         * look at the code and be able to see what this controller does 
         * without having to scroll through all the code.
         *
         * Any methods declared below are done so by using named functions. 
         * These functions are then defined further down the page
         */
        $scope.quizMetrics = quizMetrics; // Attaching the quizMetrics object to the $scope object
        $scope.setActiveQuestion = setActiveQuestion; // setActiveQuestion is a named function below
        $scope.questionAnswered = questionAnswered; // also a named function defined below
        $scope.selectAnswer = selectAnswer; // also a named function
        $scope.finaliseAnswers = finaliseAnswers; //also a named function
        $scope.activeQuestion = 0; // currently active question in the quiz
        $scope.finalise = false; // finalise flag. Will be set to show prompt to end quiz
        $scope.error = false; // error flag. Will be set when user tries to finish quiz with 
                              // all questions answered

        var numQuestionsAnswered = 0; // This is not needed by the view so is only declared using var
        
        /*
         * setActiveQuestion takes one optional argument.
         * 
         * If no argument is passed it will set the active question in the quiz
         * to the next question that has yet to be answered. This allows the 
         * user to skip questions and come back to them later, even by clicking
         * the "continue" button. It will still take them to the unanswered 
         * question.
         *
         * If an argument is passed into the function then it will simply set
         * the activeQuestion to the number that was passed in as an argument
         */
        function setActiveQuestion(data){
            // no argument passed, data = undefined.
            if(data === undefined){
                var breakOut = false;
                var count = 0;
                /*
                 * quizLength is set to 1 less than the length of the quiz as it
                 * is always referenced against the variable activeQuestion 
                 * which is 0 index. Therefore the length needs to be one less.
                 */
                var quizLength = quizMetrics.questions.length - 1;
                /*
                 * This while loop will loop continuously until an unanswered 
                 * question is found. Going back to the first question if the 
                 * last question is reached witout finding an unanswered question
                 */
                while(!breakOut){
                    // check if last question is reach, if not increment. If it
                    // has go back to start.
                    $scope.activeQuestion = 
                      $scope.activeQuestion < quizLength?++$scope.activeQuestion:0;
                    
                    /*
                     * activeQuestion has looped back to start. Meaning user has
                     * skipped past questions without answering them. Therefore
                     * show a warning. This is done by setting the error flag to
                     * true.
                     */
                    if($scope.activeQuestion === 0){
                        $scope.error = true;
                    }

                    // if current active question has not been selected, break 
                    // out the while loop
                    if(quizMetrics.questions[$scope.activeQuestion].selected === null){
                        breakOut = true;
                    }
                }
            }else{
                // Data was passed into the function therefore
                // Set activeQuestion to the index of the button pressed
                $scope.activeQuestion = data;
            }
        }

        /*
         * This method will be triggered everytime the user clicks continue in
         * the quiz.
         *
         * It will then check if the current question as been answered, if it 
         * has it will increment the local numQuestionsAnswered variable. Then 
         * it checks if the numQuestionsAnswered is equal to the total number
         * of questions in the quiz, meaning the user has complected the quiz.
         *
         * If the quiz has been completed then it sets the finalise flag to 
         * true, which removes the quiz from the view and displays a prompt to 
         * ensure the user is finished. Then returns from the function
         *
         * If all the questions have not been answered or the current question 
         * has not been selected the setActiveQuestion method is called to 
         * increment the active question to the next unanswered question. If 
         * the current question is the only unanswered question then it will 
         * remain on that question
         */
        function questionAnswered(){
            // set quizLength variable to keep code clean
            var quizLength = quizMetrics.questions.length; 
            if(quizMetrics.questions[$scope.activeQuestion].selected !== null){
                numQuestionsAnswered++;
                if(numQuestionsAnswered >= quizLength){
                    // final check to ensure all questions are actuall answered
                    for(var i = 0; i < quizLength; i++){
                        /*
                         * if find a question that is not answered, set it to 
                         * active question then return from this function 
                         * to ensure finalise flag is not set
                         */
                        if(quizMetrics.questions[i].selected === null){
                            setActiveQuestion(i);
                            return;
                        }
                    }
                    // set finalise flag and remove any existing warnings
                    $scope.finalise = true;
                    $scope.error = false;
                    return;
                }
            }
            /*
             * There are still questions to answer so increment to next 
             * unanswered question using the setActiveQuestion method
             */
            $scope.setActiveQuestion();
        }

        /*
         * When a user clicks an answer, this method will set that answer as 
         * their selection for that question on the quizMetrics object. This 
         * then allows the view to add classes to the answer to indicate it is 
         * the current selection
         */
        function selectAnswer(index){
            quizMetrics.questions[$scope.activeQuestion].selected = index;
        }

        /*
         * When the final prompt is shown to the user, if they decide they are 
         * finished and click yes, this method is called.
         *
         * This method: 
         *          -removes the finalise flag, which will remove the prompt 
         *              from the screen. 
         *          -Resets the local numQuestionsAnswered variable
         *          -Sets the active question back to 0 (for future use)
         *          -Calls the markQuiz method from the quizMetrics Object 
         *              created in the factory
         *          -removes quiz from the view by changing quiz state to false
         *          -displays the results in the view by setting the results 
         *              state to true
         */
        function finaliseAnswers(){
            $scope.finalise = false;
            numQuestionsAnswered = 0;
            $scope.activeQuestion = 0;
            quizMetrics.markQuiz();
            quizMetrics.changeState("quiz", false);
            quizMetrics.changeState("results", true);
        }
    }

})();
