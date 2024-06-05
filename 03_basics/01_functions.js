function sayMyName(){
    console.log("D")
    console.log("H")
    console.log("R")
    console.log("U")
    console.log("V")
}

// sayMyName()

function addTwoNumbers(a, b){
    console.log(a+b)
}

addTwoNumbers(2, 90);

function addNumbers(a, b){
    return a+b
}
console.log(addNumbers(20, 12))


// function userLoggedIn(userName){
//     if(!userName){
//         console.log("Please enter a userName");
//         return;
//     }
//     return `${userName} just logged in!`
// }

function userLoggedIn(userName = "sam"){
    return `${userName} just logged in!`
}

console.log(userLoggedIn("Dhruv"))