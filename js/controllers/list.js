/*
 * IIFE to avoid polution of the global namespace.
 */
(function(){
    /*
     * Creating List controller and attaching it to the main turtleFacts module
     */
    angular
        .module("turtleFacts")
        .controller("listCtrl", ListController);
    
    /*
     * Dependency injection. This allows the script to be minified and uglified
     * without breaking the code. This is acheived by passing the dependencies 
     * as strings in an array through the $inject method to the controller.
     */
    ListController.$inject = ['quizMetrics', 'DataService'];

    /*
     * Definition for the List controller. quizMetrics and dataService are two
     * services that are created in js/factory/quiz.js and js/factory/dataService.js
     * respectively. 
     */
    function ListController(quizMetrics, DataService){
        var vm = this;

        /*
         * The interface for the controller. The below code shows all the 
         * variables that are available from inside the view. References to 
         * named functions are used instead of inline anon functions. This 
         * increases readability of the code.
         *
         * The interface is at the top to provide a quick overview of what is 
         * available in the controller while the implementation remains at the 
         * bottom.
         */
        vm.quizMetrics = quizMetrics; // Controllers reference to the quiz data from factory
        vm.data = DataService.turtlesData; // Controller reference to the turtle info created in the factory
        vm.activeTurtle = {}; // will be used in the view to hold the data of currently active turtle
        vm.changeActiveTurtle = changeActiveTurtle; // reference to a named function below
        vm.activateQuiz = activateQuiz; // reference to named function below
        vm.search = ""; // will hold the search query when user uses search bar in view

        function changeActiveTurtle(index){
            // simple function to attach the data of the turtle clicked on to 
            // the active turtle object
            vm.activeTurtle = index;
        }

        function activateQuiz(){
            /*
             * changeState is a function attached onto the quizMetrics object 
             * returned from the factory It takes two arguments. 1. what to 
             * change state of (quiz or results) 2. what new state should be.
             */
            quizMetrics.changeState("quiz", true);
        }
    }


})();
