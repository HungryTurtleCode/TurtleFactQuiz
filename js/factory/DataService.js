/*
 * IIFE to keep code safe and outside the global namespace
 */
(function(){

    /*
     * Declaring a factory service as part of the existing turtleFacts Module.
     */
    angular
        .module("turtleFacts")
        .factory("DataService", DataFactory);

    /*
     * Actual definition of the function used for this factory
     */
    function DataFactory(){
        
        /*
         * dataObj is used to simulate getting the data from a backend server
         * The object will hold data which will then be returned to the other
         * factory declared in js/factory/quiz.js which has this factory
         * as a dependency
         */
        var dataObj = {
            correctAnswers: correctAnswers,
            quizQuestions: quizQuestions,
            turtlesData: turtlesData
        };

        // returning the dataObj to anything that uses this factory as a dependency
        return dataObj;
    }

    /*
     * all of the below variables are simulating data that would typically be retrieved 
     * using an HTTP call to an API endpoint.
     *
     * For simplicity sake this data is hardcoded into the app as this tutorial is about 
     * building the angular app, not the backend.
     *
     * The correctAnswers variable would be retrieved when the user has finished the quiz
     * and would be used to mark the users answers against the correct answers
     *
     * the quizQuestions is an array of objects, each containing data pertaining to a single
     * question. This includes:
     *                          - The type of question: image or text
     *                          - Text of the question (aka the actual question)
     *                          - A set of 4 possible answers, either text or images as indicated above
     *                          - a selected flag which will be used to know if the user has selected 
     *                          an answer yet.
     *                          - Whether the user got the question correct or not
     *
     * The final turtleData variable hold the information that will be displayed in the list view when 
     * the app loads. This includes the name and an image of each turtle as well as other information 
     * such as the location and the size of the turtles
     *
     */
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

    var turtlesData = [
        {
            type: "African Side Neck Turtle",
            image_url: "https://c2.staticflickr.com/8/7151/6566869583_0274c54e12_b.jpg",
            locations: "Atlantic Coast of USA",
            size: "Up to 1m",
            lifespan: "15 years",
            diet: "Food",
            description: "Dolor possimus voluptas hic aliquam rem doloremque minus maiores accusantium? Laborum perferendis harum blanditiis quod quia? Aspernatur sunt et fuga delectus ab rem excepturi. Ipsa quibusdam facere consequuntur magnam vitae? Consectetur consectetur necessitatibus beatae delectus quibusdam in! Est nobis omnis iusto illum fugiat maxime! Neque fugiat reiciendis sequi corrupti minima facere distinctio aliquam est voluptatibus. Sint incidunt soluta atque ducimus."
        },
        {
            type: "Alligator Snapping Turtle",
            image_url: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Alligator_snapping_turtle_-_Geierschildkr%C3%B6te_-_Alligatorschildkr%C3%B6te_-_Macrochelys_temminckii_01.jpg",
            locations: "Atlantic Coast of USA",
            size: "Up to 1m",
            lifespan: "15 years",
            diet: "Food",
            description: "This is a fucking descripting"
        },
        {
            type: "Common Snapping Turtle",
            image_url: "https://www.marshall.edu/herp/images/SNAPPERHEAD.JPG",
            locations: "Atlantic Coast of USA",
            size: "Up to 1m",
            lifespan: "15 years",
            diet: "Food",
            description: "This is a fucking descriptsodfhjlskdfjsdlkfjsklfjskfjslfjslkjing"
        },
        {
            type: "Box Turtle",
            image_url: "http://www.corhs.org/uploaded/20110925-130952_DSC_3378small.jpg",
            locations: "Atlantic Coast of USA",
            size: "Up to 1m",
            lifespan: "15 years",
            diet: "Food",
            description: "This is a fucking descripting"
        },
        {
            type: "Eastern Snake Necked Turtle",
            image_url: "https://c1.staticflickr.com/3/2182/2399413165_bcc8031cac_z.jpg?zz=1",
            locations: "Atlantic Coast of USA",
            size: "Up to 1m",
            lifespan: "15 years",
            diet: "Food",
            description: "This is a fucking descripting"
        },
        {
            type: "Diamondback Terrapin",
            image_url: "http://ncpedia.org/sites/default/files/diamondbackTerrapin1.jpg",
            locations: "Atlantic Coast of USA",
            size: "Up to 1m",
            lifespan: "15 years",
            diet: "Food",
            description: "This is a fucking descripting"
        },
        {
            type: "Indian Peacock Softshell Turtle",
            image_url: "http://www.turtlesurvival.org/storage/images/species/chitra_indica4.jpg",
            locations: "Atlantic Coast of USA",
            size: "Up to 1m",
            lifespan: "15 years",
            diet: "Food",
            description: "This is a fucking descripting"
        },
        {
            type: "Eastern River Cooter",
            image_url: "https://c1.staticflickr.com/9/8294/7513837434_ab9cdb7432.jpg",
            locations: "Atlantic Coast of USA",
            size: "Up to 1m",
            lifespan: "15 years",
            diet: "Food",
            description: "This is a fucking descripting"
        },
    ];
})();
