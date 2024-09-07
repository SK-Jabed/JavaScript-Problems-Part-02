const phones = [
    {name: "Samsung", price: 20000, camera: "64mp", color: "black"},
    {name: "Iphone", price: 120000, camera: "64mp", color: "black"},
    {name: "Vivo", price: 25000, camera: "64mp", color: "black"},
    {name: "Nokia", price: 2000, camera: "64mp", color: "black"},
    {name: "OnePlus", price: 50000, camera: "64mp", color: "black"}
]

function getCheapestPhone(phones) {
    let min = phones[0];
    for(const phone of phones) {
        if(phone.price < min.price) {
            min = phone;
        }
    }
    return min;
}

const cheap = getCheapestPhone(phones);
console.log("Cheapest phone is:", cheap);


function getExpensivePhone(phones) {
    let max = phones[0];
    for(const phone of phones) {
        if(phone.price > max.price) {
            max = phone;
        }
    }
    return max;
}

const expensive = getExpensivePhone(phones);
console.log("Expensive phone is:", expensive);


