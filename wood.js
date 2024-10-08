/**
 * Chair ==> 3 cft 
 * Table ==> 10 cft
 * Bed ==> 50 cft
*/

function woodQuantity(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairTotalWood = chairQuantity * perChairWood;
    const tableTotalWood = tableQuantity * perTableWood;
    const bedTotalWood = bedQuantity * perBedWood;

    const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;

    return totalWood;
}

const wood = woodQuantity(2, 1, 1);
console.log("Wood needed:", wood);



/**
 * Shirt price ==> 500
 * Pant price ==> 600
 * Shoe price ==> 1500
*/