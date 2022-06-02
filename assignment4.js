// chap 9-11

var city = prompt("Enter your city")

if (city === "karachi" || city === "Karachi") {
    alert("welcome to city of light")
}


var gender = prompt("What's your gender")

if (gender === "male" || gender === "Male") {
    alert("Good Morning Sir")
}
else if (gender === "female" || gender === "Female") {
    alert("Good Morning Ma'am")
}


var trafficSignal = prompt("Enter Traffic Signal Color")

if (trafficSignal === "Red" || trafficSignal === "red") {
    alert("Must Stop")
}
else if (trafficSignal === "Yellow" || trafficSignal === "yellow") {
    alert("Ready to move")
}
else if (trafficSignal === "Green" || trafficSignal === "green") {
    alert("Move now")
}


var remainingFuel = prompt("Enter your remaining fuel in litres")

if (remainingFuel <= 0.25) {
    alert("Please refill the fuel in your car")
}



var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}

if (true) {
    alert("True");
}
if (false) {
    alert("False");
}

if ("car" < "cat") {
    alert("car is smaller than cat");
}



var totalMarks = 300;
var marksObtained = prompt("Enter your obtained marks");
var percentage = marksObtained / totalMarks * 100;
var grade;
var remarks;

if (percentage >= 80) {
    grade = "A-one"
    remarks = "Excellent"
}
else if (percentage >= 70) {
    grade = "A"
    remarks = "Good"
}
else if (percentage >= 60) {
    grade = "B"
    remarks = "You need to improve"
}
else if (percentage < 60) {
    grade = "Fail"
    remarks = "Sorry"
}

document.write("<h2>" + "Marks Sheet" + "</h2>");
document.write("Total marks : " + totalMarks + "<br>");
document.write("Marks obtained : " + marksObtained + "<br>");
document.write("Percentage : " + percentage + "%" + "<br>");
document.write("Grade : " + grade + "<br>");
document.write("Remarks : " + remarks + "<br>");

var secretNumber = +prompt("Enter secret number 1 to 10");

if (secretNumber === 8) {
    alert("Bingo! Correct answer")
} else {
    alert("Close enough to the correct answer")
}



var eoNumber = +prompt("Enter any number 0 to 9")

if (eoNumber === 0 || eoNumber === 2 || eoNumber === 4 || eoNumber === 6 || eoNumber === 8 ) {
    alert("Even Number")
}
else if (eoNumber === 1 || eoNumber === 3 || eoNumber === 5 || eoNumber === 7 || eoNumber === 9) {
    alert("Odd Number")
}



// chap 13-14


// question 2
var a= prompt("enter the integers");
var b=prompt("enter the integers");
if(a < b){
    alert(b + " " + "is larger")
}else if(a > b){
    alert(a + " " + "is larger")
}
else if(a===b){
    alert( "equal")
}

// question 3
var a=prompt("enter the integers")
if(a>0){
    alert("the number is +ve");
}else if(a<0)
    {   alert("the number is negative");
}else{
    alert("the number is zero");
}

// question 4
var v=prompt("enetr the vowels");
if (v==="i"){
    var v=prompt("enetr the vowels")
     if(v==="e"){}
     var v=prompt("enetr the vowels")
     if(v==="o"){}
     var v=prompt("enetr the vowels")
     if(v==="u"){}
     var v=prompt("enetr the vowels")
     if(v==="a"){}
    alert("true")
}else{alert("false")}

// question 5
var p1=prompt("enter the password 1")
var p2=prompt("enter the password 2")
if(p1 && p2 === "subhanrizwan"){
    alert("correct password")
}else{alert("incorrect password")}

// // question 6
var hour= prompt("18")
if(hour <= 18){
alert("good day")
}else{alert("good evening")}

// question 7
var hour=prompt("enter the time format like 1900 = 7pm")
if (hour<0 || hour>"2400"){
alert("enter the time in 2400")
}
if(hour <00000 && hour < 1200 ){
    alert("good morning")
}
if(hour >=1200 && hour < 1700 ){
    alert("good afternoon")
}
if(hour >= 1700 && hour < 1900 ){
    alert("good evening")
}
if(hour >=1900 && hour <= 2400 ){
    alert("good night")
}