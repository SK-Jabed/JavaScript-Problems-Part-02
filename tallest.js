const heights = [62, 61, 68, 59, 69, 64, 66];

function getMax(numbers) {
    let max = numbers[0];
    for(const num of numbers) {       
        if(num > max) {
            max = num;
        }
        console.log(num);
    }
    return max;
}

const max = getMax(heights);
console.log("Max number is:", max);