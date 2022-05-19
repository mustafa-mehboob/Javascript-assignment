var math = +prompt("enter your maths marks");
var english = +prompt("enter your english marks");
var urdu = +prompt("enter your urdu marks");
var totalMarks = 300;
var obtainedMarks = math + english + urdu;

document.write("<h2>" + "Marks Sheet " + "</h2>" + "<br>");
document.write("Maths marks " + math + "/100" + "<br>");
document.write("Urde Marks " + english + "/100" + "<br>");
document.write("English marks " + urdu + "/100" + "<br>");
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Obtained Marks: " + obtainedMarks + "<br>");
document.write("Percentage: " + (obtainedMarks / totalMarks) * 100 + "%" + "<br>");


//  Math Expression

var prop = prompt("Enter Number");
var num = 1;
document.write("<h2>" + "Table of " + prop + "</h2>" + "<br>");
document.write(prop + " x " + num + " = " + prop * num + "<br>");
document.write(prop + " x " + ++num + " = " + prop * num + "<br>");
document.write(prop + " x " + ++num + " = " + prop * num + "<br>");
document.write(prop + " x " + ++num + " = " + prop * num + "<br>");
document.write(prop + " x " + ++num + " = " + prop * num + "<br>");
document.write(prop + " x " + ++num + " = " + prop * num + "<br>");
document.write(prop + " x " + ++num + " = " + prop * num + "<br>");
document.write(prop + " x " + ++num + " = " + prop * num + "<br>");
document.write(prop + " x " + ++num + " = " + prop * num + "<br>");
document.write(prop + " x " + ++num + " = " + prop * num + "<br>");

if (prop = Number) {
    alert("corret Number");

} else {
    alert("please enter number only")
}


var num1 = +prompt("enter num");
var num2 = +prompt("enter num");
var opt = prompt("enter opt");

if (opt === "+") {
    console.log(num1 + num2)
} if (opt === "-") {
    console.log(num1 - num2)
} if (opt === "/") {
    console.log(num1 / num2)
} if (opt === "*") {
    console.log(num1 * num2)
}


