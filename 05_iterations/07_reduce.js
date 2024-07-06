const myShoppingCart = [
    {
        productName: 'Item1',
        price: 999
    },
    {
        productName: 'Item2',
        price: 1999
    },
    {
        productName: 'Item3',
        price: 2999
    },
    {
        productName: 'Item4',
        price: 3999
    },
]

// const total = myShoppingCart.reduce( (acc, currVal) => acc+currVal.price, 0 );

const total = myShoppingCart.reduce( function(acc, currVal) {
    console.log(`acc = ${acc} curr = ${currVal.price}`);
    return acc+currVal.price;
}, 0)

console.log(total);