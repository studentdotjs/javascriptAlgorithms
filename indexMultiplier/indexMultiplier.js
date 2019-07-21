let arrindexMultiplier = function (numArr) {
    let sumarrindexMultiplier = 0;

    for (let i = 0; i < numArr.length; i++) {
        sumarrindexMultiplier = i * numArr[i] + sumarrindexMultiplier;
    }

    console.log(`After multiplying each element of [${numArr}] array with it's index number the sum is ${sumarrindexMultiplier}.`);

};

arrindexMultiplier([18, 7, 19, 15, 41, 53]);
