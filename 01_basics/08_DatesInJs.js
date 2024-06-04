//Type of Date -> Object


let myDate = new Date()

console.log(myDate);
console.log(myDate.toLocaleDateString());

let myCreatedDate = new Date(2021, 1, 21, 10, 54)
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
//gives the timestamp in miliseconds.....
console.log(myTimeStamp);
console.log(myCreatedDate.getTime())


//for the output to be in seconds........
console.log(Math.floor(Date.now()/1000));