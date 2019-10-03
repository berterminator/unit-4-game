

$(document).ready(function() { 

// General variables are defined here:
    var buttonValues = [1, 2, 5, 9];
    var randomNumber;

    var randomSort;

    var wins = 0;
    var losses = 0;
    
    var button1;
    var button2;
    var button3;
    var button4;


// Text variables are defined here
    var randomNumberText = $("#random-number-text");
    var sumText = $("#sum-text");
    var button1Text = $("#button1");
    var button2Text = $("#button2")
    var button3Text = $("#button3")
    var button4Text = $("#button4")

// This function creates a random number and returns sum to zero:
    function create(){
        randomNumber = Math.floor((Math.random() * (120 - 19 + 1)) + 19);
        console.log("This is the random number: " + randomNumber);
        randomNumberText.text(randomNumber);
        var sum = 0;
        
 
    // Here we give each button a random value from the array array:
        randomSort = buttonValues.sort(function(a, b){return 0.5 - Math.random()});

        button1 = randomSort[0];
        button2 = randomSort[1];
        button3 = randomSort[2];
        button4 = randomSort[3];

        console.log("Button 1 value: " + button1);
        console.log("Button 2 value: " + button2);
        console.log("Button 3 value: " + button3);
        console.log("Button 4 value: " + button4);

        // button1Text.attr("value", randomSort[0]);
        // button2Text.attr("value", randomSort[1]);
        // button3Text.attr("value", randomSort[2]);
        // button4Text.attr("value", randomSort[3]);
        
    // Here we create a value each time a button is pressed:
        $(".button").on("click", function(){
            var attVal = Number($(".button").attr("value"));  
            if(attVal == 1){
                sum += button1;
            }
            else if(attVal == 2){
                sum += button2;
            }
            else if(attVal == 3){
                sum += button3;
            }
            else if(attVal == 4){
                sum += button4;
            }
            console.log(sum);
            sumText.text(sum);
        
    // // Here we define if the player wins or loses:
        if(sumText === randomNumber){
            alert("You won!");
            wins++;
            $("#wins-text").text(wins);
            create();
        }
        if(sumText > randomNumber){
            alert("You lost! Try again.");
            losses++;
            $("#losses-text").text(losses);
            create();
        }
    });

 }   
  create();
});








// // Generate random number to reach (19 - 120) check
// // Generate random number for each of the crystalls (1 - 12) check
// // Receive the click event and sum every click associating the values from the gems check
// // Check if the user equals the scores and push a win if it does and generate new values to the gems
// // Check if the user passed the score value, push one to the losses and generate new values to the gems 

// // This will generate the random numbers for the score to reach and the 4 gems 
// var targetScore 
// var ranGem 
// var ranGem2 
// var ranGem3 
// var ranGem4 

// // Variables for the crystals
// var blueGem = 0;
// var greenGem = 0;
// var purpleGem = 0;
// var redGem = 0;

// //Variables for the scores
// var targetScore = 0;
// var currentScore = 0;
// var winCount = 0;
// var lossCount = 0;

// //This function gets javasript running once the html is ready? 
// $(document).ready(function() {

//     function start() {
//         //This will restart the current score, and generate random values for the target score and the values for the gems
//         currentScore = 0;
//         targetScore = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
//         blueGem =  Math.floor(Math.random() * 12) + 1;
//         greenGem = Math.floor(Math.random() * 12) + 1;
//         purpleGem = Math.floor(Math.random() * 12) + 1;
//         redGem = Math.floor(Math.random() * 12) + 1;


//         //Insert the values of the target and current score
//         $("#targetScoreText").html(targetScore);
//         $("#currentScoreText").html(currentScore);
//         console.log("Current Score: " + currentScore)

//         console.log("Target Score: " + targetScore)
//         console.log("Blue: " + blueGem + " | Green " + greenGem + " | Purple " + purpleGem + " | Red : " + redGem)


//     }

//     function addValues(clickId) {

//         if (event.currentTarget.id === "blueImg"){
//             console.log(currentScore);
//             console.log("I'm the blue crystal and my value now is " + blueGem);
//             currentScore = currentScore + blueGem;
//             console.log("Now the current score is " + currentScore);

//         } else if (event.currentTarget.id === "greenImg"){
//             console.log(currentScore);
//             console.log("I'm the green crystal and my value now is " + greenGem);
//             currentScore = currentScore + greenGem;
//             console.log("Now the current score is " + currentScore);

//         } else if (event.currentTarget.id === "purpleImg"){
//             console.log(currentScore);
//             console.log("I'm the purple crystal and my value now is " + purpleGem);
//             currentScore = currentScore + purpleGem;
//             console.log("Now the current score is " + currentScore);

//         } else {
//             console.log(currentScore);
//             console.log("I'm the red crystal and my value now is " + redGem);
//             currentScore = currentScore + redGem;
//             console.log("Now the current score is " + currentScore);

//         }
//         $("#currentScoreText").html(currentScore)

//         console.log("click actual score " + currentScore)
//         console.log("Click id: " + event.currentTarget.id)

//     }

//     function roundFinisher() {
//         if (currentScore === targetScore) {
//             alert("Congrats! You won");
//             winCount ++;
//             $("#winText").html(winCount);
//             start();

//         } else if (currentScore > targetScore) {
//             alert("Damn, you lost!");
//             lossCount++;
//             $("#lossText").html(lossCount);
//             start();
//         }
//     }


//     start();
    
//     $("#blueImg").click( function(event) {
//         addValues();
//         // console.log(event)
//         // console.log(event.currentTarget.id)
//         roundFinisher();
//     });

//     $("#greenImg").click( function() {
//         addValues();
//         roundFinisher();
//     });

//     $("#purpleImg").click( function() {
//         addValues();
//         roundFinisher();
//     });

//     $("#redImg").click( function() {
//         addValues();
//         roundFinisher();
//     })

// });
