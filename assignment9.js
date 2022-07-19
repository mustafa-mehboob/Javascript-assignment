// Question 1
var date = new Date()

document.write("<h3>" + date + "</h3>")

// Question 2


var month = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

document.write("<h3>" + "Current Month: " + month[date.getMonth()] + "</h3>")

// Question 3

var day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

document.write("<h3>" + "Today: " + day[date.getDay()] + "</h3>")

// question 4

if (day[date.getDay()] === "Sun" || day[date.getDay()] === "Sat") {
    document.write("<h3>" + "It's Fun day" + "</h3>")
}

// Question 5

if (date.getDate() < 16) {
    document.write("<h3>" + "First fifteen days of the month" + "</h3>")
} else {
    document.write("<h3>" + "Last days of the month" + "</h3>")
}

// Question 7 

if (date.getHours() < 13) {
    document.write("<h3>" + "It's AM" + "</h3>")
} else {
    document.write("<h3>" + "It's PM" + "</h3>")
}

// Question 8

var lastDate = new Date("31 dec , 2022");
document.write("<h3>" + "Later date: " + lastDate + "</h3>")

// Question 9

var firstRamadan = new Date("18 June, 2015");
console.log(date.getTime() - firstRamadan.getTime() / (1000 * 60 * 60 * 24 * 365) );
var rtl = ((date.getTime() - firstRamadan.getTime()))
console.log(rtl );

