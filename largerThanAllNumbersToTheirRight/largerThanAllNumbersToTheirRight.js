let largerThanRightNums = function (numsArr) {
    let answer = [],
        checkedNums = [];

    for (let i = 0; i < numsArr.length - 1; i++) {
        let currentInt = numsArr[i],
            nextNumber = numsArr[i + 1];

        if (checkedNums.indexOf(currentInt) === -1) {
            while (currentInt > nextNumber) {
                i++;
                nextNumber = numsArr[i + 1];
            }

            if (i === numsArr.length - 1) {
                answer.push(currentInt);
            }

            i = numsArr.indexOf(currentInt);
            checkedNums.push(currentInt);

        }

    }

    answer.push(numsArr[numsArr.length - 1]);
    console.log(`Every number in the [${numsArr}] that is strictly larger than every number that follows it is [${answer}].`);

};

largerThanRightNums([10, 26, 17, 12, 20, 19]);
