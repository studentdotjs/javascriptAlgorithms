let isAvgerageWholeNum = function (numArr) {
    let numArrLength = numArr.length,
        numArrSum = 0;

    for (let i = 0; i < numArrLength; i++) {
        numArrSum = numArrSum + numArr[i];
    }

    if (numArrSum % numArrLength === 0) {
        console.log(`Average of all elemnets of [${numArr}] array is ${numArrSum / numArrLength} which is a whole number .`);
    } else {
        console.log(`Average of all elemnets of [${numArr}] array is ${(numArrSum / numArrLength).toFixed(2)} which is not a whole number .`);
    }

};

isAvgerageWholeNum([12, 6, 19]);
