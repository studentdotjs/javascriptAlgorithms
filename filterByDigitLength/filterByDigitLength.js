let filterByDigitLength = function (intArr, length) {
    let newArr = [];

    intArr.filter(function (int) {
        if (String(int).length === length) {
            newArr.push(int);
        }
    });

    console.log(`After filtering [${intArr}] array to includes those integers who have ${length} digits we have [${newArr}].`);

};

filterByDigitLength([05, 46, 1309, 09, 20, 19], 2);
