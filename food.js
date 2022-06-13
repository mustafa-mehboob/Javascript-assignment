// for(i = 0; i < 10; i++){
//     if (i === 7) {
//         break
//     }
//     console.log(i);
// }
// console.log(i);

// for(a = 10; a > 0; a--){
//     console.log(a);
// }

var ch = prompt ("enter")
var flag = true;
var food = ["pizza" , "baryani" , "pasta" , "daal chawal"]
var ext = ["cold drink" , "water" , "ice cream"]
for(var b = 0; b < food.length; b++){
    
    if (ch === food[b]) {
        document.write("<h1>" + food[b] + " is available" + "</h1>")

        for(e = 0; e < ext.length; e++){
        document.write("<h1>" + (e+1) + ") "+ ext[e] + " is also available" + "</h1>")
        
        }

        flag = false;
        break
      
     
    }
    // if (ch === food[b]) {
    //     document.write("<h1>" + ext + " is also available" + "</h1>")
        
    // }
    

}
if (flag === true) {
    document.write("<h1>" + ch + " is not available" + "</h1>")
}
