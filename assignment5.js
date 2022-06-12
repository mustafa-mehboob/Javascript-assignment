var arr=[[4,5],[20,21],[40,1],[52,3]]
console.log(arr[3][1]);


document.write("Question 2" +  "<br/>")

var arr1 = [[0,1,2,3],[1,0,1,2],[2,1,0,1]]

for(var i = 0; i < arr1.length; i++){
    for(var j = 0; j < arr1[2].length; j++){

        document.write((arr1[i][j] ))
    }
    document.write( "<br/>")
}

document.write("Question 3" +  "<br/>")

for(var numCount = 1; numCount <=10 ; numCount++){
    document.write(numCount +  "<br/>")
}

document.write("Question 4" +  "<br/>")
var tableInput = prompt("Enter table input")
var tableLenght = prompt("Enter lenght of table")

for(var table = 1; table <= tableLenght; table++){
    document.write(tableInput + " x " + table + " = " + table*tableInput + "<br/>")
    
}



document.write("Question 5" +  "<br/>")
var fruits = [["apple"], ["banana"], ["mango"], ["orange"], ["strawberry"]]
document.write(fruits +"<br>")
for (var f = 0; f < fruits.length; f++) {
    document.write("element at index " + f + " is " + fruits[f] + "<br>");
    
}

// document.write("Question 6" +  "<br/>")
// var arr=[]
// for(n=0; n<=10; n++){
//     console.log(n);
// }

// var arr=[]
// for(n=10; n>=0; n--){
//     console.log(n);
// }


// for(n=0; n<=20; n++){
// if(n%2==0)
//     console.log(n);
// }

// for(n=2; n<=21; n++){
//     if(n%2 ==0)
//         console.log(n);
//     }

// for(n=2; n<=21; n++){
//   if(n%2 ==0)
//     console.log(n+"k");

// document.write("Question 7" +  "<br/>")
// var cities = ["cake" , "apple pie" , "cookie" ,"chips","patties"]
// var cityName = prompt("Enter Name")
// var flag = false

// for(var i = 0; i < cities.length; i++){
// if (cityName === cities[i]){
// flag = true



// }

// } if(flag==="yes"){
//     alert("yes")
// }else(alert("no"))


// document.write("Question 8" +  "<br/>")
// var arr=[25,50,75,100]
// var max=0
// for(var i=0; i<=arr.length; i++){
//     if(max<arr[i]){
//         max=arr[i];
        
        
//     }
// }
// console.log(max)

// document.write("Question 9" +  "<br/>")
// var arr=[25,50,75,10]
// var min=0
// for(var i=0; i+1 > arr.length; i++){
//     if(min > arr[i]){
//         min=arr[i];
        
        
//     }
//     console.log(min);
// }

// or
// var arr=[23,33,44,56]
// var min=arr[0]
// for(var i=0; i<arr.length; i++){
// if(min>arr[i]){
//     min=arr[i]
// }console.log(min);
// }





// document.write("Question 10" +  "<br/>")

// var table=prompt("enter num");
// for(var i=1; i<=20; i++){
//     console.log(table*i );
    
// }