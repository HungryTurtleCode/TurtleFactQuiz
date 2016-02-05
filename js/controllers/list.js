(function(){
    
    angular.module("turtleFacts")   
        .controller("listCtrl", function($scope, quizMetrics){

            $scope.data = turtlesData;
            $scope.activeTurtle = {};
            $scope.search = "";
            $scope.quizMetrics = quizMetrics;

            $scope.changeActiveTurtle = function(data){
                $scope.activeTurtle = data;
            }
            $scope.activateQuiz = function(state){
                quizMetrics.changeState("quiz", state);
            }
        });
















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
