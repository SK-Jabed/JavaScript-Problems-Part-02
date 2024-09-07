const products =[
    {name: "Shirt", price: 500, quantity: 2},
    {name: "Pant", price: 600, quantity: 3},
    {name: "Shoe", price: 1500, quantity: 2},
    {name: "Watch", price: 400, quantity: 1}
]

function cartTotal(products) {
    let total = 0;
    for(const product of products) {
        const thisProductCost = product.price * product.quantity;
        total = total + thisProductCost;
    }
    return total;
}

const cost = cartTotal(products);
console.log("Total cost is:", cost);