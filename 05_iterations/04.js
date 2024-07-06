const myArray = ["C++", "JS", "Ruby", "Python"]

myArray.forEach( function (item) {
    // console.log(item);
})


myArray.forEach( (item) => {
    // console.log(item);
})

myArray.forEach( (val, idx, arr) => {
    // console.log(val, idx, arr);
})



const myNewArray = [
    {
        LanguageName: "Javascipt",
        LanguageFileName: "js"
    },
    {
        LanguageName: "Java",
        LanguageFileName: "java"
    },
    {
        LanguageName: "python",
        LanguageFileName: "py"
    }
]


myNewArray.forEach( (item) => {
    console.log(item.LanguageName, item.LanguageFileName);
} )