let notDivisibleBy13 = function (intArr) {
    let notDivisibleBy13IntArr = [];

    for (let i = 0; i < intArr.length; i++) {
        if (intArr[i] % 13 !== 0) {
            notDivisibleBy13IntArr.push(intArr[i]);
        }
    }

    console.log(`After removing those numbers who are divisible by 13 we have [${notDivisibleBy13IntArr}].`);

};

notDivisibleBy13([12, 53, 26, 29, 65]);
