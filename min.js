const prices = [ 20000, 16000, 50000, 150000, 12000, 120000, 40000];

function getMin(numbers) {
    let min = numbers[0];
    for(const num of numbers) {
        if(num < min) {
            min = num
        }
    }
    return min;
}

const cheap = getMin(prices);
console.log("Cheapest one is:", cheap);