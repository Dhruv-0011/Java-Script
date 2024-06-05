// const tinderUser = Object()

// console.log(tinderUser);

const tinderUser = {
    id: "123abc",
    name: "Tider",
    isLoggedIn: false,
}

console.log(tinderUser);

const anotherUser = {
    loggedIn: false,
    name: {
        fullname: {
            firstName: "Dhruv",
            secondName: "Gupta",
        }
    },
    email: "user@gmail.com"
}

console.log(anotherUser)


const obj1 = {0: 'a', 1: 'b'}
const obj2 = {2: 'c', 3: 'd'}

const obj3 = {obj1, obj2}
console.log(obj3);

const obj33 = {...obj1, ...obj2}
console.log(obj33);

const obj4 = Object.assign({}, obj1, obj2);
console.log(obj4)


console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser))



//Object destructure...................................................................................



const course = {
    courseName: "Js",
    coursePrice: 1000,
    time: "8:00 - 10:00"
}
//course.courseName
const {courseName: name1} = course
console.log(name1);


//JSON API -> used to fetch data and dealing with the data for our usage.....