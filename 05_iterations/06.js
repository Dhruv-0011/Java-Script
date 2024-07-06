const myArray = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myArray.map( (num) => num+10 )



// CHAINING IN MAP.....................................................................

const newNums = myArray
                        .map( (num) => num*10)
                        .map( (num) => num+1)
                        .filter( (num) => num > 40)

console.log(newNums);