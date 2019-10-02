
// Variables are defined here:

var randomNumber;

var buttonValues = [1, 2, 5, 9];
var randomSort;

var button1;
var button2;
var button3;
var button4;

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

// Here we give each 


$("#button1").value(button1);
$("#button1").value(button2);
$("#button1").value(button3);
$("#button1").value(button4);