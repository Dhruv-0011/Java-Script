//Immediately Invked Function Expressions...............

//iife ka use islie krte hn taki global scope k pollution se bch sake and fn declaration k just baad usko call krdete hnn

(function chai(){
    //Named iifi
    console.log("DB Connected");
})();
//semicolon mandatory hota h isme because terminate kidhr hona h editor dont know.......


( () => {
    //unnamed iifi
    console.log("DB Connected Two");
})();

( (name) => {
    //parametrised iifi.
    console.log(`DB Connected Two ${name}`);
})('Dhruv')