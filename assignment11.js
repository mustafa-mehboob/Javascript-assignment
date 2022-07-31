// Question 1

var a = 2;
var b = 8;

function ab(x) {
    x = (a+b)-x;
    console.log(x);
}
ab(b);

// // Question 2

// var year = prompt("Enter a year to check the year is a leap year or not.")
// function leapyear(y) {
//     if (new Date(y, 1, 29).getMonth() != 1) {
//         console.log("Not leap year");
//     } else {
//         console.log("Leap year");
//     }
// }
// leapyear(year);

// // Question 3

// var a1 = 3;
// var b1 = 2;
// var c1 = 4;
// function triangle(x , y , z) {
//     console.log("a = " + x);
//     console.log("a = " + y);
//     console.log("a = " + z);

//     function areatriangle(x, y, z) {
//         var s = (x + y + z);
//         var area = (s*(s-x)*(s-y)*(s-z));

//         console.log(area);
        
//     }
//     areatriangle(x, y, z);
// }
// triangle(a1, b1, c1);

// // Question 4


// function studentmarks() {
//     var a2 = 70;
//     var b2 = 75
//     var c2 = 77;
    
//     function marks(x, y, z) {
//         console.log("Marks of subject 1: " + x);
//         console.log("Marks of subject 2: " + y);
//         console.log("Marks of subject 3: " + z);

//         function markscal(x, y, z) {
//             var avg = (x+y+z)/3.0;
//             var per = ((x+y+z)/300.0)*100;

//             console.log("The Average: " + avg);
//             console.log("The Percentage: " + per);
//         }

//         markscal(x, y, z);
        
//     }
//     marks(a2, b2, c2);
// }
// studentmarks();

// // Question 6

// function vowel() {
//     var words = "Hello World From JavaScript"; 
//     words = words.replace(/[aeiou]/g, '');
//     console.log(words);
     
// }
 
// vowel()

// Question 7

