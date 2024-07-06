const myArray = [1,2,3,4,5,6,7,8,9,10];

// const temp = myArray.forEach( (item) => {
//    return item;
// })
// console.log(temp);

const temp1 = myArray.filter( (item) => {
    if(item >= 5)
        return item;
} )
console.log(temp1);

// Filter method for returning bk object with certain required conditions i.e genre === 'history'..........

const myBooks = [
    {
        bookName: 'Book1',
        genre: 'History',
        published_in: 1991,
        edition: 2004
    },
    {
        bookName: 'Book2',
        genre: 'Fiction',
        published_in: 2001,
        edition: 2012
    },
    {
        bookName: 'Book3',
        genre: 'Non-Fiction',
        published_in: 1981,
        edition: 2014
    },
    {
        bookName: 'Book4',
        genre: 'History',
        published_in: 1996,
        edition: 2011
    },
    {
        bookName: 'Book5',
        genre: 'History',
        published_in: 1997,
        edition: 2005
    }
]


// const res = myBooks.filter( (bk) => bk.genre === 'History' )
res = myBooks.filter( (bk) => bk.published_in > 1996 )
console.log(res);