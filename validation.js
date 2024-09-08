function multiply(num1, num2) {
    if(typeof num1 !== "number" || typeof num2 !== "number") {
        return "Please provide a number"
    }
    const multi = num1 * num2;
    return multi;
}

const result = multiply(6, "seven");
console.log(result);


function fullName(first, second) {
    if(typeof first !== "string" || typeof second !== "string") {
        return "Your name should be a string"
    }
    const full = first + " " + second;
    return full;
}

const full = fullName("Sheikh", "Jabed");
console.log(full);

function getPrice(product) {
    if(typeof product !== "object") {
        return "Please provide an object"
    }
    const price = product.color;
    return price;
}
 
const color = getPrice({name: "Shirt", price: 600, color: "Black"});
console.log(color);

function getSecond(numbers) {
    if(Array.isArray(numbers) === false) {
        return "Please provide an array";
    }
    const second = numbers[1];
    return second;
}

const second = getSecond([1, 2, 3, 4]);
console.log(second);