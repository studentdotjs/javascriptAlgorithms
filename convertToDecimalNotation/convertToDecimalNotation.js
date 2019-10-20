let convertPercentToDecimal = function (percentArr) {
    let decimalArr = [];

    percentArr.forEach(function (percentValue) {
        decimalArr.push(parseFloat(percentValue) / 100);
    });

    console.log(`After converting percent values of [${percentArr}] array, into decimal values we have [${decimalArr}] array.`);

};

convertPercentToDecimal(["5%", "34%", "19%", "10%", "20%", "19%"])
