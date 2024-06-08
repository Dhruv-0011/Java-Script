/*
    let a = 10
    const b = 20
    var c = 30
    var not prefferred because it has no scope 
    due to which it can be altering the code.....

*/

var c = 20
if(true){
    var c = 300
}
console.log(c);

// this problem can be solved using let and const..........

let x = 200
const y = 1000
if(true){
    let x =30
    const y = 69
}
console.log(`${x} : ${y}`)