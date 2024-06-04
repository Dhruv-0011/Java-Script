const myArray = [0, 1, 2, 3, 4, 5]
const myArray2 = ["IronMan", "SpiderMan"]
const MyArr = new Array(0,1,2,3,4,5)

console.log(myArray2)
console.log(MyArr);

//Arrays Methods...............................

myArray.push(6);
myArray.push(7)
console.log(myArray);
myArray.pop();
//unshift -> insert the element at the starting by shifting all the current elements by 1 positions
myArray.unshift(10)
//removes the first element of the array
myArray.shift()
console.log(myArray);

console.log(myArray.includes(9));
console.log(myArray.indexOf(9));

const newArray = myArray.join()
console.log(myArray);
console.log(newArray);
console.log(typeof newArray)

//slice and splice..............................................
//slice takes only from starting index to before ending index and donot alter the initial array whereas,
//splice takes the whole range from start to end and also remove the range from original array.

const A = [0,1,2,3,4,5,6]
console.log("A ", A)
const slicee = A.slice(1, 3)
console.log(slicee);
console.log("B ", A)
const splicee = A.splice(1, 3)
console.log(splicee);
console.log("C ", A)