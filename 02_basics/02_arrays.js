const marvel_heroes = ["Thor", "Iron Man"]
const dc_heroes = ["Super Man", "Wonder Women", "Batman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);

// const Arr = marvel_heroes.concat(dc_heroes)
// console.log(Arr);

const Arr1 = [...dc_heroes, ...marvel_heroes]
console.log(Arr1);

const Arr11 = [1,2,3,[4,5,6],[7,8,[9,0]]]
const realArray = Arr11.flat(Infinity)
console.log(realArray);


console.log(Array.isArray("Dhruv"))
console.log(Array.from("Dhruv"))
console.log(Array.from({name: "Dhruv"})); // INTERESTING CASE TO REMEMBER......

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))