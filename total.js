const numbers = [ 500, 600, 1500, 400];

const products =[
    {name: "Shirt", price: 500},
    {name: "Pant", price: 600},
    {name: "Shoe", price: 1500},
    {name: "Watch", price: 400}
]

function getShoppingTotal(products) {
    let total = 0;
    for(const product of products) {
        total = total + product.price;
    }
    return total;
}

const total = getShoppingTotal(products);
console.log("Total price is:", total);