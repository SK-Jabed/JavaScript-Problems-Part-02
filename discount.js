/**
 * Upto 100 ==> 100
 * More than 101-200 ==> 90
 * More than 200 ==> 70
*/


function discountPrice(quantity) {
    if(quantity <= 100) {
        const total = quantity * 100;
        return total;
    }
    else if(quantity <= 200) {
        const total = quantity * 90;
        return total;
    }
    else {
        const total = quantity * 70;
        return total;
    }
}

const total = discountPrice(69);
console.log("Your total price is:", total);