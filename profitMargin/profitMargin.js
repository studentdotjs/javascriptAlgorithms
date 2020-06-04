let calculateProfitMargin = function (salesPrice, costPrice) {
    let profitMargin = (salesPrice - costPrice) / salesPrice * 100;

    profitMargin = profitMargin.toFixed(1) + "%";

    console.log(profitMargin);
};

calculateProfitMargin(250, 177);
