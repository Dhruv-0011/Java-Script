// Stack(Primitive) AND Heap(Non primitive)

let myName = "Dhruv"
let anotherName = myName
anotherName = "ABC"
console.log(myName);
console.log(anotherName)



let objOne = {
    email: 'user@google.com',
    upi: 'user@ptyes'
}
let objTwo = objOne

objTwo.email = "userTwo@google.com"
console.log(objOne);
console.log(objTwo);