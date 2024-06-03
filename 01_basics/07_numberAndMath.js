const number = 400
console.log(number);

const numberTwo = new Number(1111.890222);
console.log(numberTwo)

console.log(numberTwo.toString().length)
console.log(numberTwo.toFixed(3))

console.log(numberTwo.toPrecision(3));

const Amount = 1000000

console.log(Amount.toLocaleString());
console.log(Amount.toLocaleString('en-IN'))


//++++++++++++++++++++++++++++++++++++ MATHS

// console.log(Math);
// console.log(Math.abs(-86))
// console.log(Math.ceil(9.3))
// console.log(Math.floor(9.998))

console.log(Math.random())

//To pick always b/w 1 to 6 

console.log(Math.ceil(Math.random()*6))

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1) + min))