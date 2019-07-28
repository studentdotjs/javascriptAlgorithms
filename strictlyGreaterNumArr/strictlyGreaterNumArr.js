let strictlyGreaterNums = function (numArray) {
    let i = 1,
        strictlyGreaterNumsArr = [];

    while (i < numArray.length - 1) {

        let previousNum = numArray[-1 + i],
            nextNum = numArray[i + 1];

        if (numArray[i] > previousNum && numArray[i] > nextNum) {
            strictlyGreaterNumsArr.push(numArray[i]);
        }
        i++;
    }

    console.log(`In the [${numArray}] array the "Strictly Greater" number / numbers is [${strictlyGreaterNumsArr}].`);

};

strictlyGreaterNums([18, 18, 33, 23, 07, 19]);
