

$(document).ready(function() {

// Variables are defined here:

    var randomNumber;

    var buttonValues = [1, 2, 5, 9];
    var randomSort;

    var button1;
    var button2;
    var button3;
    var button4;

    var sumText = 0;

    wins = 0;
    losses = 0;

// This function creates a random number from 18 to 120:
    randomNumber = Math.floor((Math.random() * (120 - 19 + 1)) + 19);


// This block of code sets the random number in the HTML page:
    $("#random-number-text").text(randomNumber);


// Here we give each button variable a random value from the buttonValues array:
    randomSort = buttonValues.sort(function(a, b){return 0.5 - Math.random()});

    button1 = randomSort[0];
    button2 = randomSort[1];
    button3 = randomSort[2];
    button4 = randomSort[3];

    console.log("Button 1 value: " + button1);
    console.log("Button 2 value: " + button2);
    console.log("Button 3 value: " + button3);
    console.log("Button 4 value: " + button4);

// Here we create a value each time a button is pressed:
    $("#button1").on("click", function(){
        sumText = sumText+ button1;
        $("#sum-text").text(sumText);
    });

    $("#button2").on("click", function(){
        sumText = sumText+ button2;
        $("#sum-text").text(sumText);
    });

    $("#button3").on("click", function(){
        sumText = sumText+ button3;
        $("#sum-text").text(sumText);
    });

    $("#button4").on("click", function(){
        sumText = sumText+ button4;
        $("#sum-text").text(sumText);
    });

    console.log("sumText value: " + sumText);


// Here we define if the player wins or loses:

    if(sumText === randomNumber){
        alert("You won!");
        wins++;
        $("#wins-text").text(wins);

    }
    if(sumText > randomNumber){
        alert("You lost! Try again.");
        losses++;
        $("#losses-text").text(losses);
    }

});