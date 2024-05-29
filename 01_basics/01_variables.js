const accountId = 1001
let mailId = "dhruv@gmail.com"
var password  = "12345"
accountCity = "Ghaziabad"
let accountState

/*
    let and var are approximately same
    var not under use in modern time because of block & functional scope issues
    Let is preferred only........
*/


// accountId = 1002
console.log(accountId)

console.log(mailId)
mailId = "d@gmail.com"
console.log(mailId);

console.log(password);
password = "23456"
console.log(password);

console.log(accountCity);
accountCity = "GZB"
console.log(accountCity);


console.table([accountId, mailId, password, accountCity, accountState])