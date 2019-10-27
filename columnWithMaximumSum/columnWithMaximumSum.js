let columnNoWithMaximumSum = function (numArr, nSplit) {
    let headArr = [],
        winningColumnNo = 0;

    for (let i = 0; i < numArr.length; i++) {
        headArr.push(numArr.slice(i, nSplit + i));
        i += nSplit - 1;
    }

    let previousSum = 0,
        currentSum = 0;

    for (let j = 0; j < nSplit; j++) {
        for (let k = 0; k < headArr.length; k++) {
            currentSum = currentSum + headArr[k][j];
        }

        if (currentSum > previousSum) {
            winningColumnNo = j + 1;
            previousSum = currentSum;
        }

        currentSum = 0;

    }

    console.log(`Colum no which has the greatest sum is ${winningColumnNo}.`);

};

columnNoWithMaximumSum([17, 38, 26, 10, 20, 19, 2, 22, 4], 3);
