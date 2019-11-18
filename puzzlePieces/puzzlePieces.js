let puzzlePieces = function (numArr1, numArr2) {
    let sumArr = [];

    if (numArr1.length === numArr2.length) {
        for (let i = 0; i < numArr1.length; i++) {
            sumArr.push(numArr1[i] + numArr2[i]);
        }

        if (sumArr.length === 1) {
            console.log(`[${numArr1}] and [${numArr2}] only have one element, so the answer is ${true}.`);
        } else {
            let j;
            for (j = 1; j < sumArr.length; j++) {
                if (sumArr[j] === sumArr[j - 1]) {
                    continue;
                } else {
                    console.log(`${false}, all element combinations of [${numArr1}] and [${numArr2}] does not add up to the same number.`);
                    break;
                }
            }

            if (j === sumArr.length) {
                console.log(`${true}, all element combinations of [${numArr1}] and [${numArr2}] add up to the same number.`);
            }
        }

    } else {
        console.log(`${false}, Length of [${numArr1}] and [${numArr2}] is not equal.`);
    }

};

puzzlePieces([9, 45, 5], [11, 20, 19]);
