let calculateProfit = function (info) {

    let totalProfit = (info.sellPrice * info.inventory) - (info.costPrice * info.inventory);
    totalProfit = Math.round(totalProfit);
    console.log(`Total profit is ${totalProfit} rupees.`);

}

calculateProfit({
    costPrice: 22.18,
    sellPrice: 30.20,
    inventory: 2019
});
