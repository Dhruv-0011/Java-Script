const user = {
    userName: "Dhruv",
    price: 1000,

    welcomeMessage: function(){
        console.log(`${this.userName} welcome to ur website!`);
        // console.log(this) // it shows us the object in which we are present
    }
}

user.welcomeMessage()
user.userName = "Dhruv Bhai"
user.welcomeMessage()
console.log(this) //{} -> an empty object.......

//this is only usable with objects but not with functions.

function chai(){
    let userName1 = "hii"
    console.log(this.userName1)// undefined.
}
chai()



// Arrow function
// () => {}


const addTwo = (num1, num2) => {
    return num1+num2;
}

console.log(addTwo(1,6));

//implicit return method of arrow function parenthesis walacontent return hota h arrown fn m.................................

const addTwoAgain = (num1, num2) => (num1+num2)

console.log(addTwoAgain(6, 8));

const add = (num1) => ({username: "Dhruv"})
console.log(add(2));