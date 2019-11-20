let freeShippingOrNot = function (shoppingListObj) {
    let totalCost = 0;

    for (let item in shoppingListObj) {
        totalCost = totalCost + shoppingListObj[item];
    }

    if (totalCost > 50) {
        console.log(`${true}, Order is eligible for free shipping.`);
    } else {
        console.log(`${false}, Order is not eligible for free shipping.`);
    }

};

freeShippingOrNot({
    Keyboard: 4,
    Mouse: 2,
    Speakers: 25
});
