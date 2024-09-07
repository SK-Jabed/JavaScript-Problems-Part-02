const barca = 5;
const realMadrid = 15;

if(barca > realMadrid) {
    console.log("Barcelona is the greatest club");
}
else {
    console.log("Real Madrid is the greatest club");
}

// Inside a function 
function getMax(num1, num2) {
    if(num1 > num2) {
        return num1;
    }
    else {
        return num2;
    }
}

const max = getMax(5, 15);
console.log("Max number is:", max);

const max1 = getMax(69, 96);
const max2 = getMax(55, 50);
const ultimateMax = getMax(max1, max2);

console.log("Max number is:", ultimateMax);



const jim = 62;
const kim = 65;
const dim = 69;