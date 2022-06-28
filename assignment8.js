// Question 1

var num = prompt("Enter positive integer number");
var numRound = Math.round(num);
var numFloor = Math.floor(num);
var numCeil = Math.ceil(num);
document.write("<h3>" + "Number : " + num + "</h3>");
document.write("<h3>" + "Round of value : " + numRound + "</h3>" );
document.write("<h3>" + "Floor value : " + numFloor + "</h3>" );
document.write("<h3>" + "Number : " + numCeil + "</h3>" );


// Question 2

var negNum = prompt("Enter negative number");
var negNumRound = Math.round(negNum);
var negNumFloor = Math.floor(negNum);
var negNumumCeil = Math.ceil(negNum);
document.write("<h3>" + "Number : " + negNum + "</h3>");
document.write("<h3>" + "Round of value : " + negNumRound + "</h3>" );
document.write("<h3>" + "Floor value : " + negNumFloor + "</h3>" );
document.write("<h3>" + "Number : " + negNumumCeil + "</h3>" );


// Question 3

var absNum = prompt("Enter absolute value of a number.");
var numToAbs = Math.abs(absNum);
document.write("<h3>" + "The absolute value of " + absNum + " is "+ numToAbs + "</h3>");


// Question 4

function disefunction() {
    var namDise = Math.random() * 6;

    var resultDise = Math.ceil(namDise);

    document.getElementById("dise").innerHTML = resultDise;
}


// Question 5

function toosefunction() {
    var namtoose = Math.random() * 2;

    var resultToose = Math.ceil(namtoose);
    if (resultToose === 2) {
        resultToose = "Heads"
    } else {
        resultToose = "Tails"
    }

    document.getElementById("tose").innerHTML = resultToose;
}


// Question 6

var randNum6 = Math.ceil(Math.random() * 100);
document.write("<h3>" + "Random number between 1 and 100: " + randNum6 + "</h3>");


// Question 7

var usrWeight = prompt("Enter your weight in kilograms");
var weightusr7 = parseFloat(usrWeight);
document.write("<h3>" + "The weight of user is: " + weightusr7 + " Kilograms" + "</h3>");



// Question 8

var ranNumUsr = prompt("Enter number between 1 to 10");
var randNum8 = Math.ceil(Math.random() * 10);


for(var i = 0; i < 11 ; i++) {
    if (ranNumUsr === randNum8) {
        alert("okay");
    } else {
        ranNumUsr = prompt("try again");
    }
}
