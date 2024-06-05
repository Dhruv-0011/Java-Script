//constructors made singlegton(single instance) of an object
//here we are makin through LITERAL which do not make single instance

//when a object is created, bts its members are stored in form of key and values.............................
const mySym = Symbol("key")



const JsUser = {
    name: "Dhruv",
    [mySym]: "myKey1",//adding symbol to an object
    "full Name": "Dhruv Gupta",
    age: "20",
    location: "Ghaziabad",
    loggedIn: false
}


JsUser.greetings = function(){
    console.log("Hello Js USer!");
}

JsUser.greetingsTwo = function(){
    console.log(`Hello JS User ${this.name}`);
}

console.log(JsUser.greetings());
console.log(JsUser.greetingsTwo());

console.log(JsUser.name);
console.log(JsUser["name"]);
console.log(JsUser["full Name"]);
console.log(typeof JsUser[mySym]);


JsUser.age = 25
Object.freeze(JsUser)
//once after freezing the object no changes are executed on them afterwards..............
JsUser.age = 69
console.log(JsUser);