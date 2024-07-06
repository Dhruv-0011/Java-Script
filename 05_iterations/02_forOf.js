// for-of loop


const arr = [1,2,3,4,5]

for (const itr of arr) {
    // console.log(itr)
}

const greetings = "Hello World!"

for (const greet of greetings) {
    // console.log(`THe character is ${greet}`)
}


//MAP...................................................................................................................
const map = new Map()
map.set('IN', "India")
map.set('FR', "France")
map.set('USA', "United States of America");

// console.log(map);

map.set('IN', "Country = INDIA")

// console.log(map);


for (const key of map) {
    // console.log(key);
}

for (const [key, val] of map) {
    console.log(`${key} => ${val}`);
}