let eliminateOddIntegers = function (intArr) {
    let evenIntArr = [];

    intArr.filter(function (int) {
        if (int % 2 === 0) {
            evenIntArr.push(int);
        }
    });

    console.log(`After eliminating odd integers from [${intArr}] we have [${evenIntArr}].`);

};

eliminateOddIntegers([5, 58, 13, 09, 20, 19]);
