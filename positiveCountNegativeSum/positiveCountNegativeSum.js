let countPosSumNegNums = function (numArr) {
    let countSumNumsArr = [],
        counter = 0,
        negativeSum = 0;

    if (numArr === null || numArr.length === 0) {
        numArr = [];
        console.log(numArr);
    } else {
        for (let i = 0; i < numArr.length; i++) {
            if (numArr[i] > 0) {
                counter++;
            } else {
                negativeSum = negativeSum + numArr[i];
            }
        }

        countSumNumsArr.push(counter, negativeSum);

        console.log(`In [${numArr}] array total positive numbers are ${counter} and the sum of total negative integers is ${negativeSum}, Therefore we got [${countSumNumsArr}].`);
    }
};

countPosSumNegNums([11, 7, 19, -5, -18]);
