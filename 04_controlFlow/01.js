//falsy values ->     "", 0, -0, bigInt, null, undefined, NaN, false

//truthy values ->   " ", "0", 'false', "false",[], {}, function (){}


// checking whether a object is empty......

let arr = []
if(arr.length === 0){
    console.log("Array is empty.");
}

const emptyObject = {}

if(Object.keys(emptyObject).length === 0){
    console.log("Object is empty!!");
}



// Nullish coalescing Operator ??  (deals with null undefined values) 

let val1;
val1 = null ?? 10
console.log(val1);
val1 = undefined ?? 25
console.log(val1);

//Ternary Operator

let val = (false)?10:23
console.log(val);