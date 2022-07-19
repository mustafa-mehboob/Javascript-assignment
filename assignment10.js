// // Question 1

// function date() {
//     return new Date()
// }

// document.write("<h3>" + date() + "</h3>");


// // Question 2

// function userName() {
//     var userFirstName = prompt("Enter your first name");
//     var userLastName = prompt("Enter your last name");

//     document.write("<h3>" + "Hello " + userFirstName + " " + userLastName + "</h3>");
// }

// userName()


// // Question 3

// function sum() {
//     var sum1 = +prompt("Enter any first value for adding");
//     var sum2 = +prompt("Enter any last value for adding");
//     var addSum = sum1 + sum2

//     document.write("<h3>"  + addSum + "</h3>");
//     return
// }

// sum()

// // Question 4

// function operator() {
//     var opt1 = +prompt("Enter any first value for adding");
//     var opt2 = +prompt("Enter any last value for adding");
//     var opt = prompt("Enter Operator");
//     var addOpt;

//     if (opt === "+") {
//         addOpt = opt1 + opt2
//     }
//     else if (opt === "-") {
//         addOpt = opt1 - opt2
//     }
//     else if (opt === "/") {
//         addOpt = opt1 / opt2
//     }
//     else if (opt === "*") {
//         addOpt = opt1 * opt2
//     } else {
//         alert("Please enter a calid operator")
//     }

//     document.write("<h3>" + addOpt + "</h3>");
//     return
// }

// operator()


// // Question 5

// function square() {
//     var squares = prompt("Write a number for square argument");

//     document.write("<h3>" + squares * 2 + "</h3>");
// }
// square()

// // Question 6

// function factorial() {
//     var factorial = 1;
//     var facNum = +prompt("Enter a number to find the factorical that number : ")
//     document.write("<h3>" + "Factorial Of " + facNum + " !" + "<br>" + "</h3>")

//     if (facNum >= 1) {
//         for (i = 1; i <= facNum; i++) {

//             factorial = factorial * i;
//             document.write("<h3>" + i + " " + "</h3>")

//         }
//         document.write("<h3>" + " =  " + factorial + "</h3>")

//     }
// }
// factorial()

// // Question 7

// function counting() {
//     var usrcount1 = prompt("Enter Number to start counting");
//     var usrcount2 = prompt("Enter Number to end counting");

//     for(j = usrcount1; j <= usrcount2; j++){
//         document.write("<h3>" + j + "</h3>")
//     }
// }
// counting()

// Question 8