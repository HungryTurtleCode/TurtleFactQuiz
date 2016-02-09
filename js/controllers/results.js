/*
 * IIFE to encapsulate code and avoid global variables
 */
(function(){

    /*
     * attaching results controller function to the turtleFacts module 
     */
    angular
        .module("turtleFacts")
        .controller("resultsCtrl", ResultsController);

    /*
     * injecting the angular service $scope and custom service quizMetrics into
     * the results controller using the $inject method.
     *
     * Injecting dependencies like this is done so as to avoid issues when 
     * uglifying the code. Function arguments will get shortened during the 
     * uglify process but strings will not. Therefore by injecting the argument
     * as strings in an array using the $inject method we can be sure angular 
     * still knows what we want to do.
     */
    ResultsController.$inject = ['$scope', 'quizMetrics'];

    /*
     * definition of the results controller function itself. Taking $scope and 
     * quizMetrics as arguments
     */
    function ResultsController($scope, quizMetrics){
        /*
         * The pattern used in the controllers in this app puts all the 
         * properties and methods available to the view at the top of the 
         * function. Any methods are referenced as named functions which are 
         * defined at the bottom.
         *
         * This allows the interface of the controller to be seen at a glance. 
         * Which is not usually the case when defining methods as anon 
         * functions inline.
         */
        $scope.quizMetrics = quizMetrics;   // binding the object from factory to $scope.
        $scope.setActiveQuestion = setActiveQuestion;   // named function defined below
        $scope.getAnswerClass = getAnswerClass; // named function defined below
        $scope.reset = reset; // named function defined below
        $scope.calculatePerc = calculatePerc; // named function defined below
        $scope.activeQuestion = 0; 

        function setActiveQuestion(index){
            /*
             * setting active question on the results page
             */
            $scope.activeQuestion = index;
        }
        function getAnswerClass(index){
            /*
             * returning the class to style the answer depending on whether it 
             * is right or wrong quizMetrics can be referenced here without 
             * $scope as the object is passed by reference. We can manipulate 
             * the object directly here. $scope is only needed when it is being
             * manipulated by the view as the view does not have direct access
             * to the quizMetrics service.
             */
            if(index === quizMetrics.correctAnswers[$scope.activeQuestion]){
                return "bg-success";
            }else if(index === quizMetrics.questions[$scope.activeQuestion].selected){
                return "bg-danger";
            }
        }
        function reset(){
            /*
             * reseting all the data. This includes reverting the results state
             * back to false which will return the view to the lists.
             *
             * Also all the variables on each question object is returned to 
             * the default state using the for loop to iterate through all 
             * questions.
             */
            quizMetrics.changeState("results", false);

            for(var i = 0; i < quizMetrics.questions.length; i++){
                data = quizMetrics.questions[i]; //binding the current question to data to keep code clean
                data.selected = null;
                data.correct = null;
                data.answered = false;
            }
        }
        function calculatePerc(){
            /*
             * simply calculating the percentage of correct answers and returning the number
             */
            return quizMetrics.numCorrect / quizMetrics.questions.length * 100;
        }

    }

})();
