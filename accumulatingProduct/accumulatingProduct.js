let accumulatingProductArray = function (intArr) {
    let newArr = [],
        accumalteSum = 1;

    intArr.forEach(function (int) {
        accumalteSum = accumalteSum * int;
        newArr.push(accumalteSum);
    });

    console.log(`Accumulating product array of [${intArr}] is [${newArr}].`);

};

accumulatingProductArray([8, 12, 18, 21]);
