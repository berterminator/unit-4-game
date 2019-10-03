

$(document).ready(function() { 

// General variables are defined here:
    var buttonValues = [1, 2, 5, 9];
    var randomNumber;

    var randomSort;
    var userSumText = 0;

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
        userSumText = 0;
        sumText.text(userSumText);
        
 
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

        button1Text.attr("value", randomSort[0]);
        button2Text.attr("value", randomSort[1]);
        button3Text.attr("value", randomSort[2]);
        button4Text.attr("value", randomSort[3]);
        
    // Here we create a value each time a button is pressed:

 }
   
 $(".button").on("click", function(){
    var attVal = Number($(this).attr("value")); 
    userSumText += attVal;
    sumText.text(userSumText);
    console.log(userSumText); 
    
// // Here we define if the player wins or loses:
if(userSumText === randomNumber){
    alert("You won!");
    wins++;
    $("#wins-text").text(wins);
    create();
}
if(userSumText > randomNumber){
    alert("You lost! Try again.");
    losses++;
    $("#losses-text").text(losses);
    create();
}
}); 
  create();
});




