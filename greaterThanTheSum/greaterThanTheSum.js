let greaterThanSumBefore = function (intArr) {
    let i, sumBeforeCurrentValue = intArr[0];

    for (i = 1; i < intArr.length; i++) {
        if (intArr[i] > sumBeforeCurrentValue) {
            sumBeforeCurrentValue = sumBeforeCurrentValue + intArr[i];
            continue;
        } else {
            console.log(`${false}, In [${intArr}] each number is not greater then the sum of all numbers that appear before in the [${intArr}] array.`);
            break;
        }
    }

    if (i === intArr.length) {
        console.log(`${true}, In [${intArr}] each number is greater then the sum of all numbers that appear before in the [${intArr}] array.`);
    }

};

greaterThanSumBefore([6, 30, 15, 08, 20, 19, 44]);
