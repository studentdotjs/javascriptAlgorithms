let showUniqueNum = function (numArr) {
    let uniqueNumArr = [],
        repeatedElementsIndex = null,
        count = 0;

    for (let i = 0; i < numArr.length; i++) {
        repeatedElementsIndex = numArr.indexOf(numArr[i]);

        while (repeatedElementsIndex !== -1) {
            count++;
            repeatedElementsIndex = numArr.indexOf(numArr[i], repeatedElementsIndex + 1);
        }

        if (count === 1) {
            uniqueNumArr.push(numArr[i]);
        }

        count = 0;

    }

    console.log(`Two distinct elements in [${numArr}] is [${uniqueNumArr}].`);

};

showUniqueNum([5, 28, 5, 09, 20, 09, 30, 28]);
