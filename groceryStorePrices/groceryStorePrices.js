let getGroceryItemsPrice = function (groceryItems) {
    let groceryItemsPriceArr = [];

    groceryItems.forEach(function (item) {
        let currentItemSplit = item.split(" "),
            currentItemPrice = currentItemSplit[currentItemSplit.length - 1];
        groceryItemsPriceArr.push(parseFloat(currentItemPrice.slice(2, currentItemPrice.length - 1)));
    });

    console.log(`Array of Grocery items prices is [${groceryItemsPriceArr}].`);

};

getGroceryItemsPrice(["ice cream ($5.99)", "banana ($0.20)", "sandwich ($8.50)", "soup ($1.99)"]);
