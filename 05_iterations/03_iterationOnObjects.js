const myObject = {
    js: "JavaScript",
    cpp: "C++",
    rb: "Ruby",
    swift: "swift by app"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`)
}

const myArray = ["JavaScript", "C++", "Ruby", "swift by app"];

for (const key in myArray) {
    console.log(myArray[key])
}
