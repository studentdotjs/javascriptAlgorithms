let accumulatingSumArray = function (intArr) {
    let newArr = [],
        accumalteSum = 0;

    intArr.forEach(function (int) {
        accumalteSum = accumalteSum + int;
        newArr.push(accumalteSum);
    });

    console.log(`Accumulating sum array of [${intArr}] is [${newArr}].`);

};

accumulatingSumArray([8, 34, 18, 11]);
