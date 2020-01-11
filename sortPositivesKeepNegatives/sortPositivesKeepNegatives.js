let positiveNegativeSort = function (numArr) {
    let positiveNumSortedArr = [],
        indexArrOfNegativeNums = [],
        negativeNumArr = [];

    numArr.forEach(function (number) {
        if (number > 0) {
            positiveNumSortedArr.push(number);
        } else {
            if (negativeNumArr.indexOf(number) === -1) {
                let indexOfCurrentNum = numArr.indexOf(number);
                while (indexOfCurrentNum !== -1) {
                    indexArrOfNegativeNums.push(indexOfCurrentNum);
                    negativeNumArr.push(number);
                    indexOfCurrentNum = numArr.indexOf(number, indexOfCurrentNum + 1);
                }
            }

        }

        positiveNumSortedArr.sort(function (a, b) {
            return a - b;
        });

    });

    indexArrOfNegativeNums.forEach(function (index) {
        positiveNumSortedArr.splice(index, 0, numArr[index]);
    });

    console.log(`After sorting only positive numbers of [${numArr}] we have [${positiveNumSortedArr}].`);

};

positiveNegativeSort([6, 3, -2, 5, -8, 2, -2]);
