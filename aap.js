// Question 1

var ufsname = prompt("Enter your First name");
var ulsname = prompt("Enter your Last name");
var fname = ufsname + " " + ulsname;

console.log(fname);

// Question 2

var umobile = prompt("Enter you Mobile phone model");
var um22 ;
    um22 = umobile.length

document.write("<h3>" + "My favorite mobile is : " + umobile + "<br>" + "Lenght of string: " + um22 + "</h3>" + "<br>")
console.log(um22);

// Question 3

var cn = "Pakistan";
var lk = cn.indexOf("n");
document.write("<h3>" + "String: " + cn + "<br>" + "Index of 'n': " + lk + "</h3>" + "<br>")

// Question 4

var cn1 = "Hello World";
var lk1 = cn1.lastIndexOf("l")
document.write("<h3>" + "String: " + cn1 + "<br>" + "Lasr index of 'l': " + lk1 + "</h3>" + "<br>")

// Question 5

var cn2 = "Pakistan";
var lk2 = cn2.charAt(3);
document.write("<h3>" + "String: " + cn2 + "<br>" + "Charactor at index 3: " + lk2 + "</h3>" + "<br>")

// Question 6

var ufsname1 = prompt("Enter your First name");
var ulsname1 = prompt("Enter your Last name");
var fname1 = ufsname1.concat(ulsname1)

console.log(fname1);

// Question 7

var city = "Hyderabad";
var rezCity = city.replace("Hyder" , "Islam");
console.log(rezCity);
document.write("<h3>" + "String: " + city + "<br>" + "After replacement: " + rezCity + "</h3>" + "<br>")


// without replace method

// var city1 = "Hyderabad";
// var repCity1 = city1.indexOf("Hydera");

// if (repCity1 !== -1) {
//     var rezCity1 = city1.slice(0 , repCity1) + "Islam" + city1.slice(repCity1 + 5) 
// }
// document.write("<h3>" + "String: " + city1 + "<br>" + "After replacement: " + rezCity1 + "</h3>" + "<br>")


// Question 8

var message = "Ali and Sami are best friends. They play cricket and football together.";
var repmess = message.replace(/and/g, "&");

document.write("<h3>" + "Message: " + message + "<br>" + "After replacement 'and': " + repmess + "</h3>" + "<br>")


// Question 9

var numString = "472";
document.write("<h3>" + "Value: " + numString + "<br>" + "Type: " + typeof numString + "</h3>" );
numString = +numString
document.write("<h3>" + "Value: " + numString + "<br>" + "Type: " + typeof numString + "</h3>" + "<br>");


// Question 10

var userinp = prompt("Convert any word into capital letter")
document.write("<h3>" + "User input: " + userinp + "<br>" + "Upper case: " + userinp.toUpperCase() + "</h3>" + "<br>");


// Question 11

var userinp1 = prompt("Convert any word into capital letter");
var rezinp1;
var userinp2 = userinp1.split(" ")

for(var j = 0; j < userinp2.length; j++) {
    userinp2[j] = userinp2[j].charAt(0).toUpperCase()+userinp2[j].slice(1)+" "
}

document.write("<h3>" + "User input: " + userinp1 + "<br>" + "Upper case: " + userinp2 + "</h3>" + "<br>");


// Question 12

var num12 = 35.36;
document.write("<h3>" + "Number: " + num12 + "</h3>" );
num12 = num12.toString().replace(".","");
document.write("<h3>" +  "Result: " + num12 + "</h3>" + "<br>");

