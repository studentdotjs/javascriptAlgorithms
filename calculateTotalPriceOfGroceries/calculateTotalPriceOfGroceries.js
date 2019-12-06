let getTotalPrice = function (groceriesArr) {
    let totalPrice = 0;

    for (let grocery in groceriesArr) {
        totalPrice = groceriesArr[grocery].price * groceriesArr[grocery].quantity + totalPrice;
    }

    totalPrice = parseFloat(totalPrice.toFixed(2));
    console.log(`Total price of groceries are ${totalPrice} rupees.`);

};

getTotalPrice([{
        product: "Biscuit",
        quantity: 8,
        price: 15
    }, {
        product: "Milk",
        quantity: 4,
        price: 40
    },
    {
        product: "Cheese",
        quantity: 2,
        price: 103
    }, {
        product: "Namkeen",
        quantity: 3,
        price: 70
    }]);
