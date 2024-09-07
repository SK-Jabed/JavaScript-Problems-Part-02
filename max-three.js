const jim = 62;
const kim = 65;
const dim = 69;

if(jim > kim && jim > dim) {
    console.log("Jim is the ultimate boss");
}
else if(kim > jim && kim > dim) {
    console.log("Kim is the ultimate boss");
}
else {
    console.log("Dim is the ultimate boss");
}

function getOfThree(num1, num2, num3) {
    if(num1 > num2 && num1 > num3) {
        return num1;
    }
    else if(num2 > num1 && num2 > num3) {
        return num2;
    }
    else {
        return num3;
    }
}

const maxOfThree = getOfThree(5, 15, 6);
console.log("Max number is:", maxOfThree);


const max = Math.max(6, 69, -96, 9);
console.log("Max number using Math.max is:", max);